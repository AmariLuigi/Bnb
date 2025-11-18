#!/usr/bin/env python3
"""
Update restaurants-data.js to use local image paths instead of TripAdvisor CDN URLs.
"""

import re

# Mapping of restaurant IDs to local image filenames
ID_TO_FILENAME = {
    "dainottis": "dainottis.jpg",
    "trattoria-bersagliere": "trattoria-bersagliere.jpg",
    "dadalia-osteria": "dadalia-osteria.jpg",
    "le-cattive": "le-cattive.jpg",
    "mec-restaurant": "mec-restaurant.jpg",
    "osteria-dei-vespri": "osteria-dei-vespri.jpg",
    "osteria-mangia-e-bevi": "osteria-mangia-e-bevi.jpg",
    "osteria-mercede": "osteria-mercede.jpg",
    "corona-trattoria": "corona-trattoria.jpg",
    "sardina-pastabar": "sardina-pastabar.jpg",
    "lacerba-osteria-dinamica": "lacerba-osteria-dinamica.jpg",
    "le-angeliche": "le-angeliche.jpg",
    "trattoria-supra-i-mura": "trattoria-supra-i-mura.jpg",
    "ferramenta": "ferramenta.jpg",
    "forno-santa-maria": "forno-santa-maria.jpg",
    "quid-gusto-siciliano": "quid-gusto-siciliano.jpg",
    "scjabaca": "scjabaca.jpg",
    "u-babbio": "u-babbio.jpg",
    "enoteca-buttice": "enoteca-buttic.jpg",
}

def update_image_paths(filename):
    """Read the file and update image paths."""
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Track changes
    changes = []
    
    # For each restaurant ID, find its image line and update it
    for restaurant_id, image_filename in ID_TO_FILENAME.items():
        # Pattern to find the restaurant block and its image line
        # We need to handle both http and https URLs
        pattern = r'(id: "' + re.escape(restaurant_id) + r'".*?image: )"https?://[^"]+?"'
        
        # Find all matches to see what we're replacing
        matches = list(re.finditer(pattern, content, re.DOTALL))
        
        if matches:
            for match in matches:
                old_url = match.group(0).split('image: ')[1]
                new_path = f'"images/restaurants/{image_filename}"'
                changes.append((restaurant_id, old_url, new_path))
        
        # Replace with local path
        replacement = r'\1"images/restaurants/' + image_filename + '"'
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    # Write back
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return changes

if __name__ == "__main__":
    filename = "js/restaurants-data.js"
    
    print("Updating image paths in restaurants-data.js...")
    print()
    
    changes = update_image_paths(filename)
    
    if changes:
        print(f"Updated {len(changes)} restaurant images:")
        for restaurant_id, old_url, new_path in changes:
            print(f"  ✓ {restaurant_id}: {old_url} → {new_path}")
    else:
        print("No changes made (images may already be using local paths)")
    
    print()
    print("✓ Image paths updated successfully!")
