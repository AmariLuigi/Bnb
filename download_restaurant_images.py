#!/usr/bin/env python3
"""
Download restaurant images from TripAdvisor CDN with proper browser headers.
This script downloads images for all restaurants listed in Task 35882.csv
and saves them to the images/restaurants/ directory.
"""

import csv
import os
import sys
import time
from pathlib import Path
from urllib.parse import urlparse

try:
    import requests
except ImportError:
    print("Error: requests library not found. Installing...")
    os.system("pip install requests")
    import requests


# Mapping of restaurant names to output filenames
RESTAURANT_MAPPING = {
    "Dainotti's Apericapo": "dainottis.jpg",
    "Trattoria Bersagliere": "trattoria-bersagliere.jpg",
    "Osteria Dadalia": "dadalia-osteria.jpg",
    "Le Cattive": "le-cattive.jpg",
    "MEC Restaurant": "mec-restaurant.jpg",
    "Osteria dei Vespri": "osteria-dei-vespri.jpg",
    "Osteria Mangia e Bevi": "osteria-mangia-e-bevi.jpg",
    "Osteria Mercede": "osteria-mercede.jpg",
    "Corona Trattoria": "corona-trattoria.jpg",
    "Sardina PastaBar": "sardina-pastabar.jpg",
    "L'Acerba Osteria Dinamica": "lacerba-osteria-dinamica.jpg",
    "Le Angeliche": "le-angeliche.jpg",
    "Trattoria Supra I Mura": "trattoria-supra-i-mura.jpg",
    "Ferramenta": "ferramenta.jpg",
    "Forno Santa Maria": "forno-santa-maria.jpg",
    "Quid Gusto Siciliano": "quid-gusto-siciliano.jpg",
    "Scjabaca": "scjabaca.jpg",
    "U Babbio Made in Sicily": "u-babbio.jpg",
    "Enoteca Butticè": "enoteca-buttic.jpg",
}

# Browser-like headers to bypass TripAdvisor's blocking
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'Referer': 'https://www.tripadvisor.com/',
    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'Sec-Fetch-Dest': 'image',
    'Sec-Fetch-Mode': 'no-cors',
    'Sec-Fetch-Site': 'cross-site'
}

# Images already in restaurants-data.js (fallback URLs)
FALLBACK_IMAGES = {
    "sardina-pastabar.jpg": "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/1c/09/54/sardina-pasta-bar-interno.jpg",
    "osteria-dei-vespri.jpg": "https://media-cdn.tripadvisor.com/media/photo-m/1280/24/6d/33/3f/dehors.jpg",
    "le-cattive.jpg": "https://media-cdn.tripadvisor.com/media/photo-o/10/8f/ef/1e/interno-ristorante-versione.jpg",
    "mec-restaurant.jpg": "https://media-cdn.tripadvisor.com/media/photo-m/1280/22/16/00/26/un-esperienza-unica-in.jpg",
    "enoteca-buttic.jpg": "https://media-cdn.tripadvisor.com/media/photo-o/10/8f/ef/1e/interno-ristorante-versione.jpg",
}


def download_image(url, output_path, max_retries=3):
    """
    Download an image from URL with retry logic.
    
    Args:
        url: Image URL to download
        output_path: Path to save the image
        max_retries: Maximum number of retry attempts
        
    Returns:
        True if download successful, False otherwise
    """
    for attempt in range(max_retries):
        try:
            print(f"  Attempt {attempt + 1}/{max_retries}: Downloading from {url}")
            
            response = requests.get(url, headers=HEADERS, timeout=30, stream=True)
            response.raise_for_status()
            
            # Check if response is actually an image (not an error page)
            content_type = response.headers.get('Content-Type', '')
            if not content_type.startswith('image/'):
                print(f"  ⚠ Warning: Response is not an image (Content-Type: {content_type})")
                if attempt < max_retries - 1:
                    time.sleep(2)
                    continue
                return False
            
            # Check file size
            content = response.content
            if len(content) < 1024:  # Less than 1KB
                print(f"  ⚠ Warning: File too small ({len(content)} bytes)")
                if attempt < max_retries - 1:
                    time.sleep(2)
                    continue
                return False
            
            # Save the image
            with open(output_path, 'wb') as f:
                f.write(content)
            
            print(f"  ✓ Downloaded successfully ({len(content):,} bytes)")
            return True
            
        except requests.exceptions.RequestException as e:
            print(f"  ✗ Error: {e}")
            if attempt < max_retries - 1:
                print(f"  Retrying in 2 seconds...")
                time.sleep(2)
            else:
                print(f"  ✗ Failed after {max_retries} attempts")
                return False
    
    return False


def main():
    """Main function to download all restaurant images."""
    
    print("=" * 80)
    print("RESTAURANT IMAGE DOWNLOADER")
    print("=" * 80)
    print()
    
    # Create output directory
    output_dir = Path("images/restaurants")
    output_dir.mkdir(parents=True, exist_ok=True)
    print(f"✓ Output directory: {output_dir}")
    print()
    
    # Read CSV file
    csv_file = "Task 35882.csv"
    if not os.path.exists(csv_file):
        print(f"✗ Error: CSV file '{csv_file}' not found")
        sys.exit(1)
    
    print(f"✓ Reading CSV file: {csv_file}")
    print()
    
    # Parse CSV and build image URL mapping
    restaurant_images = {}
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            name = row['name']
            featured_image = row['featured_image']
            
            if name in RESTAURANT_MAPPING:
                # Check if featured_image is a valid URL
                if featured_image and featured_image.startswith('http') and 'tripadvisor' in featured_image:
                    restaurant_images[name] = featured_image
                else:
                    # Use fallback if available
                    output_filename = RESTAURANT_MAPPING[name]
                    if output_filename in FALLBACK_IMAGES:
                        restaurant_images[name] = FALLBACK_IMAGES[output_filename]
                        print(f"⚠ Using fallback URL for {name}")
    
    # Add restaurants not in CSV but with fallback images
    for restaurant_name, output_filename in RESTAURANT_MAPPING.items():
        if restaurant_name not in restaurant_images and output_filename in FALLBACK_IMAGES:
            restaurant_images[restaurant_name] = FALLBACK_IMAGES[output_filename]
            print(f"⚠ Using fallback URL for {restaurant_name} (not in CSV)")
    
    print(f"Found {len(restaurant_images)} restaurants with image URLs")
    print()
    
    # Download images
    success_count = 0
    failed_count = 0
    skipped_count = 0
    
    for restaurant_name, output_filename in RESTAURANT_MAPPING.items():
        print(f"[{success_count + failed_count + skipped_count + 1}/{len(RESTAURANT_MAPPING)}] {restaurant_name}")
        
        output_path = output_dir / output_filename
        
        # Check if image already exists
        if output_path.exists():
            file_size = output_path.stat().st_size
            if file_size > 1024:  # At least 1KB
                print(f"  ⊙ Already exists ({file_size:,} bytes) - skipping")
                skipped_count += 1
                print()
                continue
        
        # Get image URL
        if restaurant_name not in restaurant_images:
            print(f"  ✗ No image URL available")
            failed_count += 1
            print()
            continue
        
        image_url = restaurant_images[restaurant_name]
        
        # Download the image
        if download_image(image_url, output_path):
            success_count += 1
        else:
            failed_count += 1
        
        print()
        
        # Small delay to avoid rate limiting
        time.sleep(0.5)
    
    # Summary
    print("=" * 80)
    print("DOWNLOAD SUMMARY")
    print("=" * 80)
    print(f"✓ Successfully downloaded: {success_count}")
    print(f"⊙ Skipped (already exist): {skipped_count}")
    print(f"✗ Failed: {failed_count}")
    print(f"Total: {success_count + skipped_count + failed_count}/{len(RESTAURANT_MAPPING)}")
    print()
    
    if failed_count > 0:
        print("⚠ Some images failed to download. Check the log above for details.")
        sys.exit(1)
    else:
        print("✓ All images downloaded successfully!")
        sys.exit(0)


if __name__ == "__main__":
    main()
