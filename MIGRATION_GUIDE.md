# Restaurant Data Migration Guide

## Overview

This guide explains how to complete the migration of restaurant data from the legacy structure (distributed across language sections in `translations.js`) to the new centralized structure (`js/restaurants-data.js`).

## Current Status

✅ **Completed:**
- Created `js/restaurants-data.js` with the new centralized structure
- Added `getRestaurantData()` function in `translations.js` (NO fallback to legacy)
- Updated `restaurants.html` to use the new system
- Migrated 1 example regular restaurant (Dainotti's)
- Migrated 1 example Michelin restaurant (MEC Restaurant)

⚠️ **Remaining Work:**
- Migrate approximately 207 remaining restaurants from `translations.js`
- Remove legacy restaurant data arrays from `translations.js`

## Why This Migration is Needed

The old system had restaurant data duplicated across 4 language sections:
```javascript
en: { restaurantsData: [{ name: "Rest A", description: "..." }] }
it: { restaurantsData: [{ name: "Rist A", description: "..." }] }
fr: { restaurantsData: [{ name: "Rest A", description: "..." }] }
es: { restaurantsData: [{ name: "Rest A", description: "..." }] }
```

**Problems:**
- Risk of inconsistencies (different restaurants in different languages)
- Harder to maintain (must update 4 places for each change)
- Easy to make mistakes

The new system defines each restaurant once:
```javascript
{
    id: "restaurant-a",
    translations: {
        en: { name: "Rest A", description: "..." },
        it: { name: "Rist A", description: "..." },
        fr: { name: "Rest A", description: "..." },
        es: { name: "Rest A", description: "..." }
    },
    priceRange: "€20-30",
    type: "Lunch"
}
```

**Benefits:**
- Guaranteed consistency across all languages
- Update once, affects all languages
- Impossible to have different restaurants in different languages

## Migration Steps

### Option 1: Manual Migration (Slower but Safer)

For each restaurant in the English section of `translations.js`:

1. **Extract data from English section** (line 94+):
   - Copy the restaurant object
   - Note the name, description, and all other fields

2. **Find matching translations**:
   - Italian section (line 482+): Find the restaurant with same order/name
   - French section (line 934+): Find the corresponding restaurant
   - Spanish section (line 1422+): Find the corresponding restaurant

3. **Create ID**: Convert restaurant name to lowercase ID with hyphens
   - Example: "Dainotti's" → "dainottis"
   - Example: "Osteria Mangia e Bevi" → "osteria-mangia-e-bevi"

4. **Add to `restaurants-data.js`**:
   ```javascript
   {
       id: "your-restaurant-id",
       translations: {
           en: {
               name: "English Name",
               description: "English description..."
           },
           it: {
               name: "Nome Italiano",
               description: "Descrizione italiana..."
           },
           fr: {
               name: "Nom Français",
               description: "Description française..."
           },
           es: {
               name: "Nombre Español",
               description: "Descripción española..."
           }
       },
       priceRange: "€20-30 per person",
       cuisine: "Sicilian",
       type: "Lunch",  // or "Dinner"
       address: "...",
       phone: "...",
       website: "...",
       instagram: "...",
       // ... any other fields
   },
   ```

5. **Verify**: Load restaurants.html in browser and verify the restaurant appears correctly in all languages

6. **Repeat** for each restaurant

### Option 2: Automated Migration (Faster, Requires Scripting)

Create a Python/JavaScript script to automate the process:

```python
import re
import json

# 1. Parse translations.js
# 2. Extract all restaurants from each language section
# 3. Match restaurants across languages (by order/index)
# 4. Generate centralized structure
# 5. Output to restaurants-data.js format
```

**Advantages:**
- Much faster for 200+ restaurants
- Reduces human error
- Can validate all restaurants have all 4 translations

**Script Requirements:**
- Read and parse `translations.js`
- Extract restaurant arrays from all 4 language sections
- Match restaurants by index (assuming they're in the same order)
- Generate unique IDs from restaurant names
- Create the centralized structure
- Output JavaScript code ready to paste into `restaurants-data.js`

### Recommended Approach

Given the large number of restaurants (208), **automated migration is strongly recommended**.

## After Migration

Once all restaurants are migrated to `restaurants-data.js`:

1. **Test thoroughly**:
   - Load restaurants.html
   - Test all 4 languages (EN, IT, FR, ES)
   - Verify lunch, dinner, and Michelin sections
   - Check that all restaurant details display correctly

2. **Remove legacy data** from `translations.js`:
   - Delete `restaurantsData:` arrays from all language sections
   - Delete `michelinRestaurantsData:` arrays from all language sections
   - Keep only the UI text translations in `translations.js`

3. **Verify quarter pages** still work:
   - Quarter attraction data should remain in `translations.js`
   - Only restaurant data is migrated to `restaurants-data.js`

## File Structure After Migration

```
js/
├── translations.js (UI text + quarter attractions only)
├── restaurants-data.js (ALL restaurant data)
└── qrcode.min.js

restaurants.html (loads both files, uses getRestaurantData())
```

## Validation Checklist

After completing the migration:

- [ ] All 208 restaurants are in `restaurants-data.js`
- [ ] Each restaurant has translations for all 4 languages
- [ ] Each restaurant has a unique ID
- [ ] Restaurant types are set correctly ("Lunch", "Dinner", or "Michelin")
- [ ] `restaurants.html` loads and displays all restaurants
- [ ] Language switching works correctly for all 4 languages
- [ ] Legacy restaurant data removed from `translations.js`
- [ ] No console errors when loading the page
- [ ] Quarter pages (albergheria.html, etc.) still work

## Troubleshooting

**Problem**: Restaurant not appearing in a specific language
- Check that the restaurant has a translation for that language
- Verify the translation object structure is correct

**Problem**: Console error "restaurantsDatabase is not defined"
- Ensure `restaurants-data.js` is loaded BEFORE `translations.js`
- Check the script tag order in `restaurants.html`

**Problem**: Different number of restaurants in different languages
- This indicates incomplete migration
- Review `restaurants-data.js` to ensure all restaurants have all 4 translations

## Getting Help

If you encounter issues during migration:
1. Check the browser console for errors
2. Verify the structure of newly added restaurants matches the examples
3. Ensure all required fields are present
4. Test with a small batch before migrating all restaurants

## Example Migration

**Before (in translations.js):**
```javascript
en: {
    restaurantsData: [
        {
            name: "Sample Restaurant",
            description: "A great place to eat",
            priceRange: "€20-30",
            cuisine: "Italian",
            type: "Dinner"
        }
    ]
}
it: {
    restaurantsData: [
        {
            name: "Ristorante Esempio",
            description: "Un ottimo posto per mangiare",
            priceRange: "€20-30",
            cuisine: "Italiano",
            type: "Cena"
        }
    ]
}
```

**After (in restaurants-data.js):**
```javascript
{
    id: "sample-restaurant",
    translations: {
        en: {
            name: "Sample Restaurant",
            description: "A great place to eat"
        },
        it: {
            name: "Ristorante Esempio",
            description: "Un ottimo posto per mangiare"
        },
        fr: {
            name: "Restaurant Exemple",
            description: "Un excellent endroit pour manger"
        },
        es: {
            name: "Restaurante Ejemplo",
            description: "Un gran lugar para comer"
        }
    },
    priceRange: "€20-30",
    cuisine: "Italian",
    type: "Dinner"  // Note: Use "Lunch" or "Dinner", not translated versions
}
```

---

**Note**: The type field should always be "Lunch", "Dinner", or "Michelin" in English, regardless of the language. The system filters based on these values.
