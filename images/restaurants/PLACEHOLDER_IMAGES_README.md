# Restaurant Images - Placeholder Information

## Current Status

This directory contains **placeholder images** for all 19 restaurants. These are temporary images created with the restaurant names to ensure the website structure works correctly and eliminates 404 errors.

## Placeholder Details

- **Format:** JPEG
- **Dimensions:** 600x400 pixels
- **Size:** ~11KB each
- **Design:** Red background (theme color) with restaurant name in white text and yellow border

## How to Replace with Actual Images

### Option 1: Download from TripAdvisor (Recommended)

Use the provided download script to fetch actual restaurant images from TripAdvisor:

```bash
python3 download_restaurant_images.py
```

**Requirements:**
- Python 3.x
- `requests` library (will auto-install if missing)
- Network access to `media-cdn.tripadvisor.com` (may need to whitelist this domain)

The script includes:
- Proper browser headers to bypass CDN blocking
- Retry logic (up to 3 attempts per image)
- Validation to ensure downloaded files are valid images
- Progress reporting

### Option 2: Manual Download

If you prefer to download images manually:

1. Open `Task 35882.csv` to find the `featured_image` URL for each restaurant
2. Download the image using a browser (right-click → Save Image As)
3. Save to this directory with the correct filename (see mapping below)

### Filename Mapping

| Restaurant Name | Filename | Source |
|----------------|----------|--------|
| Dainotti's Apericapo | `dainottis.jpg` | Task 35882.csv |
| Trattoria Bersagliere | `trattoria-bersagliere.jpg` | Task 35882.csv |
| Osteria Dadalia | `dadalia-osteria.jpg` | Task 35882.csv |
| Le Cattive | `le-cattive.jpg` | Fallback URL in script |
| MEC Restaurant | `mec-restaurant.jpg` | Fallback URL in script |
| Osteria dei Vespri | `osteria-dei-vespri.jpg` | Fallback URL in script |
| Osteria Mangia e Bevi | `osteria-mangia-e-bevi.jpg` | Task 35882.csv |
| Osteria Mercede | `osteria-mercede.jpg` | Task 35882.csv |
| Corona Trattoria | `corona-trattoria.jpg` | Task 35882.csv |
| Sardina PastaBar | `sardina-pastabar.jpg` | Fallback URL in script |
| L'Acerba Osteria Dinamica | `lacerba-osteria-dinamica.jpg` | Task 35882.csv |
| Le Angeliche | `le-angeliche.jpg` | Task 35882.csv |
| Trattoria Supra I Mura | `trattoria-supra-i-mura.jpg` | Task 35882.csv |
| Ferramenta | `ferramenta.jpg` | Task 35882.csv |
| Forno Santa Maria | `forno-santa-maria.jpg` | Task 35882.csv |
| Quid Gusto Siciliano | `quid-gusto-siciliano.jpg` | Task 35882.csv |
| Scjabaca | `scjabaca.jpg` | Task 35882.csv |
| U Babbio Made in Sicily | `u-babbio.jpg` | Task 35882.csv |
| Enoteca Butticè | `enoteca-buttic.jpg` | Fallback URL in script |

### Option 3: Use Your Own Images

You can replace any placeholder with your own high-quality restaurant photos:

1. **Recommended dimensions:** 600x400 pixels minimum (same aspect ratio)
2. **Format:** JPEG or PNG
3. **Size:** Optimize for web (< 200KB recommended)
4. **Naming:** Use the exact filename from the table above

## Image Requirements

For best results, replacement images should:
- Be high-resolution (minimum 600x400, ideally 1200x800 or higher)
- Show the restaurant interior, exterior, or signature dishes
- Be properly lit and professionally composed
- Be optimized for web (compressed without visible quality loss)
- Match the 3:2 aspect ratio (width:height) for consistent display

## Verification

After replacing images, verify:
1. All 19 files exist with correct filenames
2. File sizes are reasonable (> 1KB, ideally 50-200KB)
3. Images display correctly on http://localhost:8000/restaurants.html
4. No 404 errors in browser console

## Technical Details

The `js/restaurants-data.js` file has been updated to reference these local paths:
```javascript
image: "images/restaurants/dainottis.jpg"
```

All TripAdvisor CDN URLs have been removed to prevent 404 errors and CORS issues.

## Support

If you encounter issues:
1. Check that filenames match exactly (case-sensitive on Linux/Mac)
2. Verify images are valid JPEG/PNG files
3. Ensure file permissions allow web server to read them
4. Check browser console for specific error messages

## Scripts in Repository

- `download_restaurant_images.py` - Automated download script with retry logic
- `update_image_paths.py` - Script that updated restaurants-data.js paths (already run)
