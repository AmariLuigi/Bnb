# Restaurant Images Directory

This directory is used for storing restaurant images that will be loaded dynamically by the restaurant page.

## How it works

The restaurant page now supports dynamic image loading with the following priority:

1. **Local Images** (Highest Priority)
   - Place restaurant images in this directory
   - Name format: `restaurant-name.jpg` (lowercase, spaces and special characters replaced with hyphens)
   - Example: "Osteria dei Vespri" → `osteria-dei-vespri.jpg`

2. **External Image Services** (Medium Priority)
   - Automatically fetches food/restaurant images from Unsplash
   - Uses restaurant cuisine type to get relevant images
   - Falls back to generic restaurant/food images

3. **Letter Placeholder** (Fallback)
   - Shows the first letter of the restaurant name
   - Used when no images are available

## Adding Restaurant Images

To add a specific image for a restaurant:

1. Save the image as a `.jpg` file
2. Name it using the restaurant name in lowercase with hyphens
3. Place it in this directory

Example filenames:
- `mec-restaurant.jpg`
- `osteria-dei-vespri.jpg`
- `quid-gusto-siciliano.jpg`
- `corona-trattoria.jpg`

## Supported Features

- **Loading Animation**: Shows a spinner while images load
- **Error Handling**: Automatically falls back to letter placeholder if image fails
- **Hover Effects**: Images scale slightly on hover
- **Responsive**: Images adapt to different screen sizes
- **Performance**: Images are cached by the browser

## Technical Details

- Images are loaded asynchronously to avoid blocking the page
- Multiple fallback options ensure something always displays
- External images are fetched from free services (no API key required)
- Local images take priority over external ones for better performance