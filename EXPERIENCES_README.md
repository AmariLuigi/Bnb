# Experiences Data Structure

## Overview

The experiences data for Sant'Agostino B&B is managed through a centralized, multilingual database system that follows the same pattern as the restaurant data structure.

## File Location

- **Database File**: `/js/experiences-data.js`
- **HTML Page**: `/experiences.html`
- **Smoke Test**: `/scripts/smoke-test-experiences.js`

## Data Structure

Each experience in the `experiencesDatabase` array follows this structure:

```javascript
{
    id: "unique-identifier",           // Unique ID in kebab-case
    translations: {
        en: {
            name: "Experience Name",
            description: "Detailed description...",
            note: "Optional note"      // Optional
        },
        it: { /* Italian translation */ },
        fr: { /* French translation */ },
        es: { /* Spanish translation */ }
    },
    duration: "3 hours - Departure at 9am",
    price: "2/3 pax - €100 per person | 4/5 pax - €50 per person",
    image: "images/attractions/placeholder.jpg"
}
```

## Key Features

### Centralized Management
- **Single Source of Truth**: Each experience is defined once with all translations
- **No Duplication**: Language-agnostic data (duration, price, image) is stored once
- **Easy Maintenance**: Update one entry to change it across all languages

### Multilingual Support
- **Supported Languages**: English (en), Italian (it), French (fr), Spanish (es)
- **Required Translation Fields**:
  - `name`: Experience title
  - `description`: Full description of the experience
  - `note`: Optional additional information or conditions

### Language-Agnostic Fields
These fields are the same across all languages:
- `id`: Unique identifier (kebab-case)
- `duration`: Time duration and schedule
- `price`: Pricing tiers and conditions
- `image`: Image path or URL

## How to Add a New Experience

1. Open `/js/experiences-data.js`
2. Add a new object to the `experiencesDatabase` array:

```javascript
{
    id: "my-new-experience",
    translations: {
        en: {
            name: "My New Experience",
            description: "A detailed description of what this experience offers...",
            note: "Optional booking conditions or extra info"
        },
        it: {
            name: "La Mia Nuova Esperienza",
            description: "Una descrizione dettagliata di ciò che offre questa esperienza...",
            note: "Condizioni di prenotazione opzionali o informazioni extra"
        },
        fr: {
            name: "Ma Nouvelle Expérience",
            description: "Une description détaillée de ce que cette expérience offre...",
            note: "Conditions de réservation facultatives ou informations supplémentaires"
        },
        es: {
            name: "Mi Nueva Experiencia",
            description: "Una descripción detallada de lo que ofrece esta experiencia...",
            note: "Condiciones de reserva opcionales o información adicional"
        }
    },
    duration: "4 hours - Flexible schedule",
    price: "€150 per person",
    image: "images/attractions/my-experience.jpg"
}
```

3. Save the file
4. Run the smoke test: `node scripts/smoke-test-experiences.js`

## How to Update an Existing Experience

1. Open `/js/experiences-data.js`
2. Find the experience by its `id`
3. Update the desired fields:
   - To change text in one language, edit that translation
   - To change price/duration/image, edit the language-agnostic field
4. Save the file
5. Run the smoke test to verify changes

## Translation Guidelines

### Professional Translation Needed
The current French and Spanish translations were automatically generated. For production use:
1. Have translations reviewed by native speakers
2. Ensure cultural appropriateness
3. Verify terminology is correct for tourism/hospitality context

### Translation Best Practices
- Keep translations natural, not literal
- Adapt pricing format if needed for local customs
- Maintain the same tone and style across languages
- Preserve important details (times, locations, conditions)

## Testing

### Smoke Test
Run the automated smoke test to verify data integrity:

```bash
node scripts/smoke-test-experiences.js
```

The test checks:
- File existence and loadability
- Data structure validity
- Required fields presence
- Translation completeness
- Description quality (no placeholders, minimum length)
- Integration with experiences.html

### Manual Verification
1. Open `experiences.html` in a browser
2. Switch between languages using the selector
3. Verify:
   - All experiences load correctly
   - Descriptions are properly displayed
   - Pricing shows correctly
   - Duration information is accessible
   - Book Now button works
   - Language switching updates all content

## Image Management

### Current State
All experiences currently use a placeholder image: `images/attractions/placeholder.jpg`

### Adding Real Images
1. Add image files to `/images/experiences/` directory
2. Update the `image` field in the experience data:
   ```javascript
   image: "images/experiences/my-experience-photo.jpg"
   ```
3. Recommended image specifications:
   - Format: JPG or WebP
   - Dimensions: 800x600px minimum
   - File size: < 500KB for optimal loading
   - Aspect ratio: 4:3 or 16:9

## Integration with experiences.html

The experiences page loads data in this sequence:

1. **Load Database**: `<script src="js/experiences-data.js"></script>`
2. **Load Translations**: `<script src="js/translations.js"></script>`
3. **Render Experiences**: JavaScript reads `experiencesDatabase` and creates cards
4. **Language Switching**: Updates cards with translations for selected language

The rendering function:
```javascript
function loadExperiences() {
    const lang = getCurrentLanguage();
    experiencesDatabase.forEach((experienceData) => {
        const localizedExperience = {
            name: experienceData.translations[lang].name,
            description: experienceData.translations[lang].description,
            // ... other fields
        };
        // Create and append card
    });
}
```

## Common Issues and Solutions

### Experience not showing
- Check that the experience object is properly formatted
- Verify all required fields are present
- Run smoke test to identify issues

### Translation missing
- Ensure all 4 languages (en, it, fr, es) have translations
- Check for typos in language codes
- Verify `name` and `description` fields are present

### Images not loading
- Verify image path is correct
- Check that image file exists
- Ensure image is accessible from the web server

## Migration from translations.js

The old system stored experiences separately in each language section of `translations.js`. The new centralized system:

**Old approach** (duplicated data):
```javascript
translations.en.experiencesData = [ /* English experiences */ ];
translations.it.experiencesData = [ /* Italian experiences */ ];
// ... separate arrays for each language
```

**New approach** (centralized):
```javascript
experiencesDatabase = [
    {
        id: "experience-1",
        translations: {
            en: { /* English */ },
            it: { /* Italian */ }
        },
        duration: "...",
        price: "..."
    }
];
```

## Support

For questions or issues:
1. Check the smoke test output for validation errors
2. Review this README for guidance
3. Examine `/js/restaurants-data.js` for a similar pattern
4. Contact the development team for assistance

---

**Last Updated**: November 2025  
**Version**: 1.0.0
