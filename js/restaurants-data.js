/**
 * ============================================================================
 * CENTRALIZED RESTAURANT DATABASE
 * ============================================================================
 * 
 * This file contains ALL restaurant data in a centralized, language-agnostic
 * structure. Each restaurant is defined ONCE with translations for all
 * supported languages.
 * 
 * IMPORTANT: This is the ONLY place where restaurant data should be defined.
 * The legacy restaurantsData arrays in translations.js have been removed.
 * 
 * ============================================================================
 * STRUCTURE
 * ============================================================================
 * 
 * Each restaurant object has:
 * - id: Unique identifier (lowercase, hyphens for spaces)
 * - translations: Object with language codes (en, it, fr, es) containing:
 *   - name: Restaurant name in that language
 *   - description: Description in that language
 * - Language-agnostic fields (same across all languages):
 *   - priceRange: Price information
 *   - cuisine: Type of cuisine
 *   - type: "Lunch" or "Dinner" (determines page section)
 *   - address, phone, website, instagram, etc. (optional)
 * 
 * ============================================================================
 * HOW TO ADD A RESTAURANT
 * ============================================================================
 * 
 * 1. Create a new object in the array below
 * 2. Assign a unique 'id'
 * 3. Add translations for ALL languages (en, it, fr, es)
 * 4. Set the language-agnostic fields
 * 5. Set 'type' to "Lunch" or "Dinner"
 * 
 * Example:
 * {
 *     id: "your-restaurant-id",
 *     translations: {
 *         en: { name: "Name", description: "Description..." },
 *         it: { name: "Nome", description: "Descrizione..." },
 *         fr: { name: "Nom", description: "Description..." },
 *         es: { name: "Nombre", description: "Descripción..." }
 *     },
 *     priceRange: "€20-30 per person",
 *     cuisine: "Sicilian",
 *     type: "Dinner",
 *     address: "Street address",
 *     phone: "+39 ...",
 *     website: "example.com"
 * }
 * 
 * ============================================================================
 */

/**
 * Main restaurant database
 * All regular restaurants (lunch and dinner)
 */
const restaurantsDatabase = [
    {
        id: "dainottis",
        translations: {
            en: {
                name: "Dainotti's",
                description: "Located in the Mercato del Capo, offering traditional Palermo street food. Known for their kindness and expertise."
            },
            it: {
                name: "Dainotti's",
                description: "Situato nel Mercato del Capo, offre cibo di strada tradizionale palermitano. Conosciuto per la loro gentilezza ed esperienza."
            },
            fr: {
                name: "Dainotti's",
                description: "Situé dans le Mercato del Capo, proposant de la street food traditionnelle de Palerme. Connu pour leur gentillesse et leur expertise."
            },
            es: {
                name: "Dainotti's",
                description: "Ubicado en el Mercato del Capo, ofrece comida callejera tradicional de Palermo. Conocido por su amabilidad y experiencia."
            }
        },
        priceRange: "€10-20 per person",
        cuisine: "Street Food, Sandwich Shop",
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/28/db/fb/08/caption.jpg",
        referent: "Arianna",
        address: "Via Porta Carini, 51, 90134 Palermo PA",
        type: "Lunch"
    }
    
    // ==================================================================
    // NOTE: THIS FILE SHOULD CONTAIN ALL 208 RESTAURANTS
    // ==================================================================
    // 
    // The remaining restaurants need to be migrated from translations.js
    // to this centralized structure. Each restaurant should be added here
    // following the pattern above.
    // 
    // MIGRATION PROCESS:
    // 1. For each restaurant in translations.js (English section)
    // 2. Create a new object with a unique ID
    // 3. Extract the name and description from all 4 language sections
    // 4. Copy language-agnostic fields (priceRange, cuisine, type, etc.)
    // 5. Remove from translations.js after adding here
    // 
    // AUTOMATED MIGRATION:
    // A migration script should be created to automate this process
    // to avoid errors. See MIGRATION_GUIDE.md for details.
    // 
    // ==================================================================
];

/**
 * Michelin-starred restaurants database
 * Premium dining options with Michelin recognition
 */
const michelinRestaurantsDatabase = [
    {
        id: "mec-restaurant",
        translations: {
            en: {
                name: "MEC Restaurant",
                description: "An exceptional culinary experience featuring innovative Italian cuisine with Michelin recognition. Located in the heart of Palermo, MEC Restaurant combines traditional Sicilian flavors with modern techniques, creating memorable dishes that showcase the best of local ingredients."
            },
            it: {
                name: "MEC Restaurant",
                description: "Un'esperienza culinaria eccezionale con cucina italiana innovativa e riconoscimento Michelin. Situato nel cuore di Palermo, MEC Restaurant combina i sapori tradizionali siciliani con tecniche moderne, creando piatti memorabili."
            },
            fr: {
                name: "MEC Restaurant",
                description: "Une expérience culinaire exceptionnelle mettant en vedette une cuisine italienne innovante avec reconnaissance Michelin. Situé au cœur de Palerme, MEC Restaurant combine les saveurs traditionnelles siciliennes avec des techniques modernes."
            },
            es: {
                name: "MEC Restaurant",
                description: "Una experiencia culinaria excepcional con cocina italiana innovadora y reconocimiento Michelin. Ubicado en el corazón de Palermo, MEC Restaurant combina los sabores tradicionales sicilianos con técnicas modernas."
            }
        },
        priceRange: "€€€",
        cuisine: "Modern Italian, Creative",
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/22/16/00/26/un-esperienza-unica-in.jpg",
        address: "Via Vittorio Emanuele 452 - 90134",
        phone: "347 753 2005",
        michelinStars: "★",
        type: "Michelin"
    }
    
    // Additional Michelin restaurants should be added here following the same pattern
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { restaurantsDatabase, michelinRestaurantsDatabase };
}
