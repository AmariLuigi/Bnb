# Sant'Agostino BnB - Palermo Map

A simple, interactive map application for exploring the four historic quarters of Palermo, Italy. Each quarter page includes attractions and a QR code for easy mobile access.

## Quarter Pages

The application includes four quarter pages, each accessible via QR codes:
- **Albergheria** (`albergheria.html`)
- **Capo** (`capo.html`)
- **Kalsa** (`kalsa.html`)
- **La Loggia** (`loggia.html`)

## Architecture

### Centralized Data Management

All quarter content is managed through a centralized data architecture:

```
data/
  └── quarters.json          # Centralized data for all quarters
js/
  ├── qrcode.min.js         # QR code generation library
  └── quarters.js           # Dynamic content loader
```

**Benefits:**
- Single source of truth for all quarter data
- Easy maintenance - update once, applies to all pages
- Consistent data structure across all quarters
- Prepared for future internationalization

### How It Works

1. Each quarter HTML file (e.g., `albergheria.html`) loads the `quarters.js` script
2. The script automatically detects which quarter page is loaded
3. It fetches the appropriate data from `data/quarters.json`
4. Content is dynamically rendered into the page (title, attractions, QR codes)

## Updating Quarter Content

### Adding/Modifying Attractions

Edit the `data/quarters.json` file:

```json
{
  "quarters": {
    "albergheria": {
      "id": "albergheria",
      "title": "Albergheria Quarter",
      "attractions": [
        "Ballarò (mercato)",
        "Chiesa del Carmine",
        "Casa Professa",
        ...
      ]
    },
    "capo": { ... },
    "kalsa": { ... },
    "loggia": { ... }
  }
}
```

**Steps:**
1. Open `data/quarters.json`
2. Find the quarter you want to modify
3. Add, remove, or edit items in the `attractions` array
4. Save the file
5. Refresh the browser - changes appear immediately

**Important:** The JSON must remain valid. Use a JSON validator if unsure.

### Adding a New Quarter

To add a new quarter (e.g., "Vucciria"):

1. **Add data to `data/quarters.json`:**
   ```json
   "vucciria": {
     "id": "vucciria",
     "title": "Vucciria Quarter",
     "attractions": [
       "Attraction 1",
       "Attraction 2"
     ]
   }
   ```

2. **Create a new HTML file** (e.g., `vucciria.html`):
   - Copy an existing quarter HTML file
   - Update the `<body>` class (e.g., `vucciria-bg`)
   - The title and attractions will load automatically

3. **Update `index.html`:**
   - Add a new quarter card with QR code and link

4. **Update CSS** (if needed):
   - Add background styling for `.vucciria-bg` in `css/style.css`

## Future Internationalization

The architecture is designed to support multiple languages in the future. To add internationalization:

1. **Restructure `data/quarters.json`:**
   ```json
   {
     "en": {
       "quarters": { ... }
     },
     "it": {
       "quarters": { ... }
     },
     "fr": {
       "quarters": { ... }
     }
   }
   ```

2. **Modify `js/quarters.js`:**
   - Add language detection logic
   - Update `loadQuarterData()` to accept a language parameter
   - Modify `renderQuarterContent()` to use language-specific data

3. **Add language selector UI:**
   - Add language switcher buttons to each page
   - Store user preference in localStorage

See detailed comments in `js/quarters.js` for implementation guidance.

## Development

### Running Locally

Since this is a static site, you can use any HTTP server:

**Python 3:**
```bash
python3 -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (http-server):**
```bash
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

### File Structure

```
/
├── index.html              # Main landing page with all quarters
├── albergheria.html        # Albergheria quarter page
├── capo.html              # Capo quarter page
├── kalsa.html             # Kalsa quarter page
├── loggia.html            # La Loggia quarter page
├── css/
│   └── style.css          # Styling for all pages
├── data/
│   └── quarters.json      # Centralized quarter data
├── js/
│   ├── qrcode.min.js      # QR code generation library
│   └── quarters.js        # Dynamic content loader
└── README.md              # This file
```

## QR Codes

Each quarter page:
- Automatically generates a QR code for its own URL
- Includes a "Print QR Code" button for easy printing
- QR codes on the index page link to each quarter

**URLs are permanent** - they are mapped to physical QR codes and must not change.

## Browser Compatibility

- Modern browsers with ES6+ support
- Fetch API required (all modern browsers)
- JavaScript must be enabled

## License

© Sant'Agostino BnB - Palermo Map
