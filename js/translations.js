// Translations for the website
const translations = {
    en: {
        // Common elements
        title: "Sant'Agostino BnB - Palermo Map",
        explore: "Explore the four historic quarters of Palermo",
        back: "← Back to Map",
        placesToVisit: "Places to Visit",
        scanVisit: "Scan to visit this page",
        printQR: "Print QR Code",
        exploreButton: "Explore",
        copyright: "© Sant'Agostino BnB - Palermo Map",
        interactiveMap: "Interactive Map of Palermo",
        
        // Additional services section
        additionalServices: "Additional Services",
        restaurantsDesc: "Discover the best local restaurants and authentic Sicilian cuisine",
        experiencesDesc: "Authentic local experiences offered by our B&B and partners",
        
        // Quarters
        capo: "Capo",
        albergheria: "Albergheria",
        kalsa: "Kalsa",
        loggia: "La Loggia",
        
        // Descriptions
        capoDesc: "Discover the Teatro Massimo, Cattedrale, and more",
        albergheriaDesc: "Visit Ballarò market, Palazzo Reale, and more",
        kalsaDesc: "Explore Piazza Pretoria, Orto Botanico, and more",
        loggiaDesc: "Visit San Domenico, Vucciria market, and more",
        
        // Language selector
        language: "Language",
        
        // Restaurant and Experience pages
        restaurants: "Restaurants",
        recommendedRestaurants: "Recommended Restaurants",
        lunchRestaurants: "Lunch Restaurants",
        dinnerRestaurants: "Dinner Restaurants",
        referent: "Referent",
        experiences: "B&B Experiences",
        localExperiences: "Local Experiences",
        experiencesIntro: "Discover authentic Sicilian experiences with our local partners",
        bookNow: "Book Now",
        contactBnB: "Please contact the B&B host to book this experience.",
        
        // Restaurant data
        restaurantsData: [
            {
                name: "Dainotti's",
                description: "Located in the Mercato del Capo, offering traditional Palermo street food. Known for their kindness and expertise.",
                priceRange: "€10-20 per person",
                cuisine: "Street Food, Sandwich Shop",
                image: "images/attractions/placeholder.jpg",
                referent: "Arianna",
                address: "Via Porta Carini, 51, 90134 Palermo PA",
                type: "Lunch"
            },
            {
                name: "Trattoria Bersagliere",
                description: "Historic trattoria in the Albergheria neighborhood, famous for pasta with \"glassa\" and a cozy, family-friendly atmosphere.",
                priceRange: "€10-20 per person",
                cuisine: "Traditional Sicilian",
                image: "images/attractions/placeholder.jpg",
                referent: "Lollo",
                address: "Via S. Nicolò All'Albergheria, 38, 90134 Palermo PA",
                type: "Lunch"
            },
            {
                name: "Dadalia Osteria",
                description: "Typical Sicilian osteria located in the historic Vucciria market. Offers vegetarian dishes and has outdoor seating.",
                priceRange: "€10-20 per person",
                cuisine: "Sicilian, Vegetarian Options",
                image: "images/attractions/placeholder.jpg",
                referent: "Pippo or Giovanni",
                address: "Via Maccherronai, 20, 90133 Palermo PA",
                type: "Lunch"
            },
            {
                name: "L'Acerba Osteria Dinamica",
                description: "A dynamic osteria that combines elements of an art gallery, cocktail bar, and restaurant, with creative cuisine using local ingredients.",
                priceRange: "€20-40 per person",
                cuisine: "Creative Sicilian",
                image: "images/attractions/placeholder.jpg",
                referent: "Gabriele",
                address: "Vicolo Maestro Cristofaro, 10, 90134 Palermo PA",
                type: "Dinner"
            },
            {
                name: "Le Angeliche",
                description: "Romantic restaurant with an elegant patio, specializing in seafood, pasta, and Sicilian snacks, with vegan options available.",
                priceRange: "€30-40 per person",
                cuisine: "Seafood, Vegan Options",
                image: "images/attractions/placeholder.jpg",
                referent: "Floriana or Chiara",
                address: "Vicolo Abbadia, 10, 90134 Palermo PA",
                type: "Dinner"
            },
            {
                name: "Trattoria Supra i Mura",
                description: "Located in the heart of Palermo, offering a variety of seafood dishes and traditional Sicilian cuisine in a welcoming atmosphere.",
                priceRange: "€20-30 per person",
                cuisine: "Seafood, Traditional Sicilian",
                image: "images/attractions/placeholder.jpg",
                referent: "Pietro",
                address: "Piazza Porta Carini, 5, 90134 Palermo PA",
                type: "Dinner"
            },
            {
                name: "Enoteca Butticè",
                description: "Restaurant and wine bar with over 700 wine labels, offering Palermo cuisine and excellent cocktails.",
                priceRange: "€20-40 per person",
                cuisine: "Sicilian, Wine Bar",
                image: "images/attractions/placeholder.jpg",
                referent: "Giuseppe",
                address: "Piazza S. Francesco di Paola, 12, 90138 Palermo PA",
                type: "Dinner"
            },
            {
                name: "Ferramenta",
                description: "Restaurant in the heart of Palermo's historic center, with outdoor seating and vegan options, ideal for a young and welcoming atmosphere.",
                priceRange: "€20-30 per person",
                cuisine: "Mediterranean, Vegan Options",
                image: "images/attractions/placeholder.jpg",
                referent: "Luca or Marcello",
                address: "Piazza Giovanni Meli, 8, 90133 Palermo PA",
                type: "Dinner"
            },
            {
                name: "Forno Santa Maria",
                description: "Pizzeria with an artisanal approach to baking and mixology, located in the heart of the historic center.",
                priceRange: "€20-30 per person",
                cuisine: "Pizza, Artisanal",
                image: "images/attractions/placeholder.jpg",
                referent: "Luca or Marcello",
                address: "Via Giovanni Meli, 35, 90133 Palermo PA",
                type: "Dinner"
            }
        ],
        
        // Experience data
        experiencesData: [
            {
                name: "Discovering Palermo",
                description: "A walking tour of the historic center to discover the millenary history of Palermo, a unique melting pot in the world. Visit Teatro Massimo, the Capo Market, Cathedral, Norman Palace with Palatine Chapel, Quattro Canti, and Piazza Bellini.",
                duration: "3 hours",
                price: "€45-€100 per person",
                image: "images/attractions/placeholder.jpg",
                note: "Any entrances to historic buildings or monuments are not included in the price."
            },
            {
                name: "Street Food Aperitif Tour",
                description: "An itinerant aperitif along the streets of the historic center of Palermo. Experience traditional street food including panelle, crocche, sfincione, bread with spleen, and a glass of wine at Vucciria.",
                duration: "2 hours",
                price: "€45-€55 per person",
                image: "images/attractions/placeholder.jpg",
                note: "Food tastings included in the price."
            },
            {
                name: "The Kingdom of the Sun - Arab-Norman Itinerary",
                description: "Discover the Arab-Norman UNESCO heritage sites of Palermo, including the Royal Palace with Palatine Chapel, Cathedral, San Giovanni degli Eremiti, San Cataldo, and Santa Maria dell'Ammiraglio.",
                duration: "3.5 hours",
                price: "€45-€100 per person",
                image: "images/attractions/placeholder.jpg",
                note: "Any entrances to historic buildings or monuments are not included in the price."
            },
            {
                name: "The Florios Dynasty - Walking Tour",
                description: "Trace the history of the Florio family from the Loggia district to the Teatro Massimo. Learn about their businesses, successes, and impact on Palermo's Belle Époque.",
                duration: "3 hours",
                price: "€45-€100 per person",
                image: "images/attractions/placeholder.jpg",
                note: "Any entrances to historic buildings or monuments are not included in the price."
            },
            {
                name: "The Florios Dynasty with Private Transport",
                description: "Discover the Florio family's legacy with private transportation. Visit Villino Florio all'Olivuzza, Villa Malfitano-Whitaker, and the Arenella house with Quattro Pizzi.",
                duration: "4 hours",
                price: "€55-€150 per person",
                image: "images/attractions/placeholder.jpg",
                note: "Only available on Saturday afternoon and Sunday morning."
            },
            {
                name: "Arab-Norman Cathedrals Tour",
                description: "Visit the four most interesting Norman cathedrals in Palermo and its province by train and private transportation, including the Palatine Chapel, Martorana, Cefalù and Monreale.",
                duration: "4-5 hours",
                price: "€100-€140 per person",
                image: "images/attractions/placeholder.jpg",
                note: "Includes train ticket and transfer to Monreale."
            },
            {
                name: "Cooking Class with Chef",
                description: "Visit the Capo market with our chef to select fresh ingredients, then prepare traditional Sicilian recipes at the chef's home, concluding with lunch together.",
                duration: "3-4 hours",
                price: "€130 per person",
                image: "images/attractions/placeholder.jpg",
                note: "Includes market visit, cooking class, and lunch with selected ingredients."
            }
        ],
        
        // Quarter-specific attractions
        albergheriaAttractions: [
            { name: "Ballarò (market)", image: "images/attractions/ballaro.jpg" },
            { name: "Chiesa del Carmine", image: "images/attractions/chiesa_carmine.jpg" },
            { name: "Casa Professa", image: "images/attractions/casa_professa.jpg" },
            { name: "Palazzo Conte Federico", image: "images/attractions/palazzo_federico.jpg" },
            { name: "San Giovanni degli Eremiti", image: "images/attractions/san_giovanni_eremiti.jpg" },
            { name: "Palazzo Reale", image: "images/attractions/palazzo_reale.jpg" },
            { name: "Cattedrale", image: "images/attractions/cattedrale.jpg" },
            { name: "Palazzo Asmundo", image: "images/attractions/palazzo_asmundo.jpg" },
            { name: "Palazzo Riso", image: "images/attractions/palazzo_riso.jpg" },
            { name: "San Giuseppe dei Teatini", image: "images/attractions/san_giuseppe_teatini.jpg" }
        ],
        capoAttractions: [
            { name: "Teatro Massimo", image: "images/attractions/teatro_massimo.jpg" },
            { name: "Chiesa dell'Immacolata Concezione", image: "images/attractions/chiesa_immacolata.jpg" },
            { name: "Mercato del Capo", image: "images/attractions/mercato_capo.jpg" },
            { name: "Porta Carini", image: "images/attractions/porta_carini.jpg" },
            { name: "Chiesa del Gesù (Casa Professa)", image: "images/attractions/chiesa_gesu.jpg" },
            { name: "Oratorio di San Lorenzo", image: "images/attractions/oratorio_san_lorenzo.jpg" },
            { name: "Quattro Canti", image: "images/attractions/quattro_canti.jpg" },
            { name: "Fontana Pretoria", image: "images/attractions/fontana_pretoria.jpg" },
            { name: "Chiesa di San Cataldo", image: "images/attractions/chiesa_san_cataldo.jpg" },
            { name: "Palazzo dei Normanni", image: "images/attractions/palazzo_normanni.jpg" }
        ],
        kalsaAttractions: [
            { name: "Piazza Marina", image: "images/attractions/piazza_marina.jpg" },
            { name: "Palazzo Steri", image: "images/attractions/palazzo_steri.jpg" },
            { name: "Giardino Garibaldi", image: "images/attractions/giardino_garibaldi.jpg" },
            { name: "Orto Botanico", image: "images/attractions/orto_botanico.jpg" },
            { name: "Porta Felice", image: "images/attractions/porta_felice.jpg" },
            { name: "Foro Italico", image: "images/attractions/foro_italico.jpg" },
            { name: "Castello a Mare", image: "images/attractions/castello_mare.jpg" },
            { name: "Chiesa della Catena", image: "images/attractions/chiesa_catena.jpg" },
            { name: "Palazzo Abatellis", image: "images/attractions/palazzo_abatellis.jpg" },
            { name: "Galleria Regionale della Sicilia", image: "images/attractions/galleria_sicilia.jpg" }
        ],
        loggiaAttractions: [
            { name: "Mercato della Vucciria", image: "images/attractions/mercato_vucciria.jpg" },
            { name: "Chiesa di San Domenico", image: "images/attractions/chiesa_san_domenico.jpg" },
            { name: "Piazza San Domenico", image: "images/attractions/piazza_san_domenico.jpg" },
            { name: "Via Roma", image: "images/attractions/via_roma.jpg" },
            { name: "Palazzo Mazzarino", image: "images/attractions/palazzo_mazzarino.jpg" },
            { name: "La Cala", image: "images/attractions/la_cala.jpg" },
            { name: "Chiesa di Santa Maria La Nova", image: "images/attractions/chiesa_santa_maria.jpg" },
            { name: "Osteria dei Vespri", image: "images/attractions/osteria_vespri.jpg" },
            { name: "Museo Salinas", image: "images/attractions/museo_salinas.jpg" },
            { name: "Porta Nuova", image: "images/attractions/porta_nuova.jpg" }
        ],
        
        // Print QR code texts
        scanToExplore: "Scan to explore the",
        scanToExploreSuffix: "Quarter of Palermo",
        quarterSuffix: "Quarter - Sant'Agostino BnB"
    },
    it: {
        // Common elements
        title: "Sant'Agostino BnB - Mappa di Palermo",
        explore: "Esplora i quattro quartieri storici di Palermo",
        back: "← Torna alla Mappa",
        placesToVisit: "Luoghi da Visitare",
        scanVisit: "Scansiona per visitare questa pagina",
        printQR: "Stampa Codice QR",
        exploreButton: "Esplora",
        copyright: "© Sant'Agostino BnB - Mappa di Palermo",
        interactiveMap: "Mappa Interattiva di Palermo",
        
        // Additional services section
        additionalServices: "Servizi Aggiuntivi",
        restaurantsDesc: "Scopri i migliori ristoranti locali e l'autentica cucina siciliana",
        experiencesDesc: "Esperienze locali autentiche offerte dal nostro B&B e dai nostri partner",
        
        // Quarters
        capo: "Capo",
        albergheria: "Albergheria",
        kalsa: "Kalsa",
        loggia: "La Loggia",
        
        // Descriptions
        capoDesc: "Scopri il Teatro Massimo, la Cattedrale e altro ancora",
        albergheriaDesc: "Visita il mercato di Ballarò, il Palazzo Reale e altro ancora",
        kalsaDesc: "Esplora Piazza Pretoria, l'Orto Botanico e altro ancora",
        loggiaDesc: "Visita San Domenico, il mercato della Vucciria e altro ancora",
        
        // Language selector
        language: "Lingua",
        
        // Restaurant and Experience pages
        restaurants: "Ristoranti",
        recommendedRestaurants: "Ristoranti Consigliati",
        lunchRestaurants: "Ristoranti per Pranzo",
        dinnerRestaurants: "Ristoranti per Cena",
        referent: "Referente",
        experiences: "Esperienze B&B",
        localExperiences: "Esperienze Locali",
        experiencesIntro: "Scopri esperienze siciliane autentiche con i nostri partner locali",
        bookNow: "Prenota Ora",
        contactBnB: "Contatta l'host del B&B per prenotare questa esperienza.",
        
        // Restaurant data
        restaurantsData: [
            {
                name: "Dainotti's",
                description: "Situato nel Mercato del Capo, offre il tradizionale street food palermitano. Conosciuto per la sua gentilezza e competenza.",
                priceRange: "€10-20 a persona",
                cuisine: "Street Food, Paninoteca",
                image: "images/attractions/placeholder.jpg",
                referent: "Arianna",
                address: "Via Porta Carini, 51, 90134 Palermo PA",
                type: "Pranzo"
            },
            {
                name: "Trattoria Bersagliere",
                description: "Storica trattoria nel quartiere Albergheria, famosa per la pasta con \"glassa\" e un'atmosfera accogliente, adatta per le famiglie.",
                priceRange: "€10-20 a persona",
                cuisine: "Siciliana Tradizionale",
                image: "images/attractions/placeholder.jpg",
                referent: "Lollo",
                address: "Via S. Nicolò All'Albergheria, 38, 90134 Palermo PA",
                type: "Pranzo"
            },
            {
                name: "Dadalia Osteria",
                description: "Tipica osteria siciliana situata nel storico mercato della Vucciria. Offre piatti vegetariani e dispone di posti a sedere all'aperto.",
                priceRange: "€10-20 a persona",
                cuisine: "Siciliana, Opzioni Vegetariane",
                image: "images/attractions/placeholder.jpg",
                referent: "Pippo o Giovanni",
                address: "Via Maccherronai, 20, 90133 Palermo PA",
                type: "Pranzo"
            },
            {
                name: "L'Acerba Osteria Dinamica",
                description: "Un'osteria dinamica che unisce elementi di galleria d'arte, cocktail bar e ristorante, con una cucina creativa che utilizza ingredienti locali.",
                priceRange: "€20-40 a persona",
                cuisine: "Siciliana Creativa",
                image: "images/attractions/placeholder.jpg",
                referent: "Gabriele",
                address: "Vicolo Maestro Cristofaro, 10, 90134 Palermo PA",
                type: "Cena"
            },
            {
                name: "Le Angeliche",
                description: "Ristorante romantico con un elegante patio, specializzato in piatti di pesce, pasta e stuzzichini siciliani, con opzioni vegane disponibili.",
                priceRange: "€30-40 a persona",
                cuisine: "Pesce, Opzioni Vegane",
                image: "images/attractions/placeholder.jpg",
                referent: "Floriana o Chiara",
                address: "Vicolo Abbadia, 10, 90134 Palermo PA",
                type: "Cena"
            },
            {
                name: "Trattoria Supra i Mura",
                description: "Situato nel cuore di Palermo, offre una varietà di piatti di pesce e cucina siciliana tradizionale in un'atmosfera accogliente.",
                priceRange: "€20-30 a persona",
                cuisine: "Pesce, Siciliana Tradizionale",
                image: "images/attractions/placeholder.jpg",
                referent: "Pietro",
                address: "Piazza Porta Carini, 5, 90134 Palermo PA",
                type: "Cena"
            },
            {
                name: "Enoteca Butticè",
                description: "Ristorante e wine bar con oltre 700 etichette di vino, che offre cucina palermitana e ottimi cocktail.",
                priceRange: "€20-40 a persona",
                cuisine: "Siciliana, Wine Bar",
                image: "images/attractions/placeholder.jpg",
                referent: "Giuseppe",
                address: "Piazza S. Francesco di Paola, 12, 90138 Palermo PA",
                type: "Cena"
            },
            {
                name: "Ferramenta",
                description: "Ristorante nel cuore del centro storico di Palermo, con posti a sedere all'aperto e opzioni vegane, ideale per un'atmosfera giovane e accogliente.",
                priceRange: "€20-30 a persona",
                cuisine: "Mediterranea, Opzioni Vegane",
                image: "images/attractions/placeholder.jpg",
                referent: "Luca o Marcello",
                address: "Piazza Giovanni Meli, 8, 90133 Palermo PA",
                type: "Cena"
            },
            {
                name: "Forno Santa Maria",
                description: "Pizzeria con un approccio artigianale alla panificazione e alla mixologia, situata nel cuore del centro storico.",
                priceRange: "€20-30 a persona",
                cuisine: "Pizza, Artigianale",
                image: "images/attractions/placeholder.jpg",
                referent: "Luca o Marcello",
                address: "Via Giovanni Meli, 35, 90133 Palermo PA",
                type: "Cena"
            }
        ],
        
        // Experience data
        experiencesData: [
            {
                name: "Scoprire Palermo",
                description: "Tour a piedi del centro storico per scoprire la millenaria storia di Palermo. Visiterai il Teatro Massimo, il Mercato del Capo, la Cattedrale, il Palazzo dei Normanni con la Cappella Palatina, i Quattro Canti e Piazza Bellini.",
                duration: "3 ore",
                price: "€45-€100 a persona",
                image: "images/attractions/placeholder.jpg",
                note: "Gli ingressi a edifici storici o monumenti non sono inclusi nel prezzo."
            },
            {
                name: "Tour Aperitivo Street Food",
                description: "Un aperitivo itinerante lungo le strade del centro storico di Palermo. Degustazione del tradizionale street food tra cui panelle, crocche, sfincione, pane con la milza e un bicchiere di vino alla Vucciria.",
                duration: "2 ore",
                price: "€45-€55 a persona",
                image: "images/attractions/placeholder.jpg",
                note: "Le degustazioni sono incluse nel prezzo."
            },
            {
                name: "Il Regno del Sole - Itinerario arabo-normanno",
                description: "Scopri i siti UNESCO del patrimonio arabo-normanno di Palermo, tra cui il Palazzo Reale con la Cappella Palatina, la Cattedrale, San Giovanni degli Eremiti, San Cataldo e Santa Maria dell'Ammiraglio.",
                duration: "3.5 ore",
                price: "€45-€100 a persona",
                image: "images/attractions/placeholder.jpg",
                note: "Gli ingressi a edifici storici o monumenti non sono inclusi nel prezzo."
            },
            {
                name: "I Florio, una dinastia - tour a piedi",
                description: "Ripercorri la storia della famiglia Florio dal quartiere della Loggia al Teatro Massimo. Scopri le loro attività commerciali, i successi e l'impatto sulla Belle Époque palermitana.",
                duration: "3 ore",
                price: "€45-€100 a persona",
                image: "images/attractions/placeholder.jpg",
                note: "Gli ingressi a edifici storici o monumenti non sono inclusi nel prezzo."
            },
            {
                name: "I Florio, una dinastia con trasporto privato",
                description: "Scopri l'eredità della famiglia Florio con trasporto privato. Visita il Villino Florio all'Olivuzza, Villa Malfitano-Whitaker e la casa dell'Arenella con i Quattro Pizzi.",
                duration: "4 ore",
                price: "€55-€150 a persona",
                image: "images/attractions/placeholder.jpg",
                note: "Disponibile solo il sabato pomeriggio e la domenica mattina."
            },
            {
                name: "Tour delle Cattedrali Arabo-Normanne",
                description: "Visita le quattro cattedrali normanne più interessanti di Palermo e provincia in treno e trasporto privato, incluse la Cappella Palatina, la Martorana, Cefalù e Monreale.",
                duration: "4-5 ore",
                price: "€100-€140 a persona",
                image: "images/attractions/placeholder.jpg",
                note: "Include il biglietto del treno e il trasferimento a Monreale."
            },
            {
                name: "Lezione di cucina con lo Chef",
                description: "Visita il mercato del Capo con il nostro chef per selezionare ingredienti freschi, poi prepara ricette siciliane tradizionali a casa dello chef, concludendo con il pranzo insieme.",
                duration: "3-4 ore",
                price: "€130 a persona",
                image: "images/attractions/placeholder.jpg",
                note: "Include visita al mercato, lezione di cucina e pranzo con gli ingredienti selezionati."
            }
        ],
        
        // Quarter-specific attractions
        albergheriaAttractions: [
            { name: "Ballarò (mercato)", image: "images/attractions/ballaro.jpg" },
            { name: "Chiesa del Carmine", image: "images/attractions/chiesa_carmine.jpg" },
            { name: "Casa Professa", image: "images/attractions/casa_professa.jpg" },
            { name: "Palazzo Conte Federico", image: "images/attractions/palazzo_federico.jpg" },
            { name: "San Giovanni degli Eremiti", image: "images/attractions/san_giovanni_eremiti.jpg" },
            { name: "Palazzo Reale", image: "images/attractions/palazzo_reale.jpg" },
            { name: "Cattedrale", image: "images/attractions/cattedrale.jpg" },
            { name: "Palazzo Asmundo", image: "images/attractions/palazzo_asmundo.jpg" },
            { name: "Palazzo Riso", image: "images/attractions/palazzo_riso.jpg" },
            { name: "San Giuseppe dei Teatini", image: "images/attractions/san_giuseppe_teatini.jpg" }
        ],
        capoAttractions: [
            { name: "Teatro Massimo", image: "images/attractions/teatro_massimo.jpg" },
            { name: "Chiesa dell'Immacolata Concezione", image: "images/attractions/chiesa_immacolata.jpg" },
            { name: "Mercato del Capo", image: "images/attractions/mercato_capo.jpg" },
            { name: "Porta Carini", image: "images/attractions/porta_carini.jpg" },
            { name: "Chiesa del Gesù (Casa Professa)", image: "images/attractions/chiesa_gesu.jpg" },
            { name: "Oratorio di San Lorenzo", image: "images/attractions/oratorio_san_lorenzo.jpg" },
            { name: "Quattro Canti", image: "images/attractions/quattro_canti.jpg" },
            { name: "Fontana Pretoria", image: "images/attractions/fontana_pretoria.jpg" },
            { name: "Chiesa di San Cataldo", image: "images/attractions/chiesa_san_cataldo.jpg" },
            { name: "Palazzo dei Normanni", image: "images/attractions/palazzo_normanni.jpg" }
        ],
        kalsaAttractions: [
            { name: "Piazza Marina", image: "images/attractions/piazza_marina.jpg" },
            { name: "Palazzo Steri", image: "images/attractions/palazzo_steri.jpg" },
            { name: "Giardino Garibaldi", image: "images/attractions/giardino_garibaldi.jpg" },
            { name: "Orto Botanico", image: "images/attractions/orto_botanico.jpg" },
            { name: "Porta Felice", image: "images/attractions/porta_felice.jpg" },
            { name: "Foro Italico", image: "images/attractions/foro_italico.jpg" },
            { name: "Castello a Mare", image: "images/attractions/castello_mare.jpg" },
            { name: "Chiesa della Catena", image: "images/attractions/chiesa_catena.jpg" },
            { name: "Palazzo Abatellis", image: "images/attractions/palazzo_abatellis.jpg" },
            { name: "Galleria Regionale della Sicilia", image: "images/attractions/galleria_sicilia.jpg" }
        ],
        loggiaAttractions: [
            { name: "Mercato della Vucciria", image: "images/attractions/mercato_vucciria.jpg" },
            { name: "Chiesa di San Domenico", image: "images/attractions/chiesa_san_domenico.jpg" },
            { name: "Piazza San Domenico", image: "images/attractions/piazza_san_domenico.jpg" },
            { name: "Via Roma", image: "images/attractions/via_roma.jpg" },
            { name: "Palazzo Mazzarino", image: "images/attractions/palazzo_mazzarino.jpg" },
            { name: "La Cala", image: "images/attractions/la_cala.jpg" },
            { name: "Chiesa di Santa Maria La Nova", image: "images/attractions/chiesa_santa_maria.jpg" },
            { name: "Osteria dei Vespri", image: "images/attractions/osteria_vespri.jpg" },
            { name: "Musée Salinas", image: "images/attractions/museo_salinas.jpg" },
            { name: "Porta Nuova", image: "images/attractions/porta_nuova.jpg" }
        ],
        
        // Print QR code texts
        scanToExplore: "Scansiona per esplorare il quartiere",
        scanToExploreSuffix: "di Palermo",
        quarterSuffix: "Quartiere - Sant'Agostino BnB"
    },
    fr: {
        // Common elements
        title: "Sant'Agostino BnB - Carte de Palerme",
        explore: "Explorez les quatre quartiers historiques de Palerme",
        back: "← Retour à la Carte",
        placesToVisit: "Lieux à Visiter",
        scanVisit: "Scannez pour visiter cette page",
        printQR: "Imprimer le Code QR",
        exploreButton: "Explorer",
        copyright: "© Sant'Agostino BnB - Carte de Palerme",
        interactiveMap: "Carte Interactive de Palerme",
        
        // Additional services section
        additionalServices: "Services Supplémentaires",
        restaurantsDesc: "Découvrez les meilleurs restaurants locaux et l'authentique cuisine sicilienne",
        experiencesDesc: "Expériences locales authentiques proposées par notre B&B et nos partenaires",
        
        // Quarters
        capo: "Capo",
        albergheria: "Albergheria",
        kalsa: "Kalsa",
        loggia: "La Loggia",
        
        // Descriptions
        capoDesc: "Découvrez le Teatro Massimo, la Cathédrale et plus encore",
        albergheriaDesc: "Visitez le marché de Ballarò, le Palazzo Reale et plus encore",
        kalsaDesc: "Explorez la Piazza Pretoria, le Jardin Botanique et plus encore",
        loggiaDesc: "Visitez San Domenico, le marché de Vucciria et plus encore",
        
        // Language selector
        language: "Langue",
        
        // Restaurant and Experience pages
        restaurants: "Restaurants",
        recommendedRestaurants: "Restaurants Recommandés",
        lunchRestaurants: "Restaurants pour le Déjeuner",
        dinnerRestaurants: "Restaurants pour le Dîner",
        referent: "Personne de Référence",
        experiences: "Expériences B&B",
        localExperiences: "Expériences Locales",
        experiencesIntro: "Découvrez des expériences siciliennes authentiques avec nos partenaires locaux",
        bookNow: "Réserver",
        contactBnB: "Veuillez contacter l'hôte du B&B pour réserver cette expérience.",
        
        // Restaurant data
        restaurantsData: [
            {
                name: "Dainotti's",
                name: "Osteria Ballarò",
                description: "Restaurant sicilien traditionnel avec une touche moderne, situé au cœur du marché historique de Ballarò.",
                priceRange: "€€-€€€",
                cuisine: "Sicilienne, Méditerranéenne",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "Gagini Restaurant",
                description: "Cuisine raffinée dans un cadre élégant du XVIe siècle avec une cuisine sicilienne créative à base d'ingrédients locaux.",
                priceRange: "€€€-€€€€",
                cuisine: "Sicilienne Contemporánea",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "Buatta Cucina Popolana",
                description: "Restaurant rustique spécialisé dans les plats traditionnels de Palerme et les recettes sicilianas tradicionales.",
                priceRange: "€€",
                cuisine: "Siciliana Tradicional",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "Bisso Bistrot",
                description: "Charmant bistrot dans une ancienne librairie, servant des plats siciliens simples dans une atmosphère vintage.",
                priceRange: "€-€€",
                cuisine: "Bistrot, Sicilienne",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "L'Ottava Nota",
                description: "Restaurant élégant proposant des spécialités de fruits de mer et une cuisine sicilienne raffinée avec un service attentif.",
                priceRange: "€€-€€€",
                cuisine: "Fruits de mer, Sicilienne",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "Ferro di Cavallo",
                description: "Trattoria historique populaire auprès des locaux, connue pour la street food traditionnelle de Palermo et une cuisine décontractée.",
                priceRange: "€",
                cuisine: "Street Food, Trattoria",
                image: "images/attractions/placeholder.jpg"
            }
        ],
        
        // Experience data
        experiencesData: [
            {
                name: "Cours de Cuisine Sicilienne",
                description: "Apprenez à préparer des plats siciliens traditionnels avec notre chef local. Comprend la visite du marché, le cours de cuisine et le déjeuner avec dégustation de vins.",
                duration: "4 heures",
                price: "€85 par personne",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "Tour de Street Food",
                description: "Découvrez la célèbre street food de Palermo avec un guide local. Visitez les marchés historiques et goûtez aux spécialités locales authentiques.",
                duration: "3 heures",
                price: "€60 par personne",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "Dégustation de Vins Siciliens",
                description: "Dégustez les meilleurs vins siciliens avec les conseils d'un expert. Comprend la dégustation de 5 vins premium et des apéritifs locaux.",
                duration: "2 heures",
                price: "€55 par personne",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "Tour de Palermo by Night",
                description: "Découvrez la magie de Palermo après la tombée de la nuit. Visitez des monuments illuminés et profitez de l'ambiance nocturne animée.",
                duration: "3 heures",
                price: "€50 par personne",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "Spectacle de Marionnettes Siciliennes",
                description: "Assistez à un spectacle traditionnel de marionnettes siciliennes (Opera dei Pupi) et découvrez ce patrimonio cultural reconnu par l'UNESCO.",
                duration: "1.5 heures",
                price: "€35 par personne",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "Randonnée au Mont Pellegrino",
                description: "Randonnée guidée au Mont Pellegrino avec vue panoramique sur Palermo et la mer Méditerranée.",
                duration: "5 heures",
                price: "€45 par personne",
                image: "images/attractions/placeholder.jpg"
            }
        ],
        
        // Quarter-specific attractions
        albergheriaAttractions: [
            { name: "Ballarò (marché)", image: "images/attractions/ballaro.jpg" },
            { name: "Chiesa del Carmine", image: "images/attractions/chiesa_carmine.jpg" },
            { name: "Casa Professa", image: "images/attractions/casa_professa.jpg" },
            { name: "Palazzo Conte Federico", image: "images/attractions/palazzo_federico.jpg" },
            { name: "San Giovanni degli Eremiti", image: "images/attractions/san_giovanni_eremiti.jpg" },
            { name: "Palazzo Reale", image: "images/attractions/palazzo_reale.jpg" },
            { name: "Cathédrale", image: "images/attractions/cattedrale.jpg" },
            { name: "Palazzo Asmundo", image: "images/attractions/palazzo_asmundo.jpg" },
            { name: "Palazzo Riso", image: "images/attractions/palazzo_riso.jpg" },
            { name: "San Giuseppe dei Teatini", image: "images/attractions/san_giuseppe_teatini.jpg" }
        ],
        capoAttractions: [
            { name: "Teatro Massimo", image: "images/attractions/teatro_massimo.jpg" },
            { name: "Chiesa dell'Immacolata Concezione", image: "images/attractions/chiesa_immacolata.jpg" },
            { name: "Marché du Capo", image: "images/attractions/mercato_capo.jpg" },
            { name: "Porta Carini", image: "images/attractions/porta_carini.jpg" },
            { name: "Chiesa del Gesù (Casa Professa)", image: "images/attractions/chiesa_gesu.jpg" },
            { name: "Oratorio di San Lorenzo", image: "images/attractions/oratorio_san_lorenzo.jpg" },
            { name: "Quattro Canti", image: "images/attractions/quattro_canti.jpg" },
            { name: "Fontana Pretoria", image: "images/attractions/fontana_pretoria.jpg" },
            { name: "Chiesa di San Cataldo", image: "images/attractions/chiesa_san_cataldo.jpg" },
            { name: "Palazzo dei Normanni", image: "images/attractions/palazzo_normanni.jpg" }
        ],
        kalsaAttractions: [
            { name: "Piazza Marina", image: "images/attractions/piazza_marina.jpg" },
            { name: "Palazzo Steri", image: "images/attractions/palazzo_steri.jpg" },
            { name: "Jardin Garibaldi", image: "images/attractions/giardino_garibaldi.jpg" },
            { name: "Jardin Botanique", image: "images/attractions/orto_botanico.jpg" },
            { name: "Porta Felice", image: "images/attractions/porta_felice.jpg" },
            { name: "Foro Italico", image: "images/attractions/foro_italico.jpg" },
            { name: "Castello a Mare", image: "images/attractions/castello_mare.jpg" },
            { name: "Chiesa della Catena", image: "images/attractions/chiesa_catena.jpg" },
            { name: "Palazzo Abatellis", image: "images/attractions/palazzo_abatellis.jpg" },
            { name: "Galerie Régionale de Sicile", image: "images/attractions/galleria_sicilia.jpg" }
        ],
        loggiaAttractions: [
            { name: "Marché de la Vucciria", image: "images/attractions/mercato_vucciria.jpg" },
            { name: "Église de San Domenico", image: "images/attractions/chiesa_san_domenico.jpg" },
            { name: "Place San Domenico", image: "images/attractions/piazza_san_domenico.jpg" },
            { name: "Via Roma", image: "images/attractions/via_roma.jpg" },
            { name: "Palazzo Mazzarino", image: "images/attractions/palazzo_mazzarino.jpg" },
            { name: "La Cala", image: "images/attractions/la_cala.jpg" },
            { name: "Église de Santa Maria La Nova", image: "images/attractions/chiesa_santa_maria.jpg" },
            { name: "Osteria dei Vespri", image: "images/attractions/osteria_vespri.jpg" },
            { name: "Musée Salinas", image: "images/attractions/museo_salinas.jpg" },
            { name: "Porta Nuova", image: "images/attractions/porta_nuova.jpg" }
        ],
        
        // Print QR code texts
        scanToExplore: "Scannez pour explorer le quartier",
        scanToExploreSuffix: "de Palerme",
        quarterSuffix: "Quartier - Sant'Agostino BnB"
    },
    es: {
        // Common elements
        title: "Sant'Agostino BnB - Mapa de Palermo",
        explore: "Explora los cuatro barrios históricos de Palermo",
        back: "← Volver al Mapa",
        placesToVisit: "Lugares para Visitar",
        scanVisit: "Escanea para visitar esta página",
        printQR: "Imprimir Código QR",
        exploreButton: "Explorar",
        copyright: "© Sant'Agostino BnB - Mapa de Palermo",
        interactiveMap: "Mapa Interactivo de Palermo",
        
        // Additional services section
        additionalServices: "Servicios Adicionales",
        restaurantsDesc: "Descubre los mejores restaurantes locales y la auténtica cocina siciliana",
        experiencesDesc: "Experiencias locales auténticas ofrecidas por nuestro B&B y nuestros socios",
        
        // Quarters
        capo: "Capo",
        albergheria: "Albergheria",
        kalsa: "Kalsa",
        loggia: "La Loggia",
        
        // Descriptions
        capoDesc: "Descubre el Teatro Massimo, la Catedral y más",
        albergheriaDesc: "Visita el mercado de Ballarò, el Palazzo Reale y más",
        kalsaDesc: "Explora la Piazza Pretoria, el Jardín Botánico y más",
        loggiaDesc: "Visita San Domenico, el mercado de Vucciria y más",
        
        // Language selector
        language: "Idioma",
        
        // Restaurant and Experience pages
        restaurants: "Restaurantes",
        recommendedRestaurants: "Restaurantes Recomendados",
        lunchRestaurants: "Restaurantes para Almuerzo",
        dinnerRestaurants: "Restaurantes para Cena",
        referent: "Persona de Referencia",
        experiences: "Experiencias B&B",
        localExperiences: "Experiencias Locales",
        experiencesIntro: "Descubre experiencias sicilianas auténticas con nuestros socios locales",
        bookNow: "Reservar Ahora",
        contactBnB: "Por favor contacta al anfitrión del B&B para reservar esta experiencia.",
        
        // Restaurant data
        restaurantsData: [
            {
                name: "Osteria Ballarò",
                description: "Restaurante siciliano tradicional con un toque moderno, ubicado en el corazón del histórico mercado de Ballarò.",
                priceRange: "€€-€€€",
                cuisine: "Siciliana, Mediterránea",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "Gagini Restaurant",
                description: "Restaurante elegante en un entorno del siglo XVI con cocina siciliana creativa hecha con ingredientes locales.",
                priceRange: "€€€-€€€€",
                cuisine: "Siciliana Contemporánea",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "Buatta Cucina Popolana",
                description: "Restaurante rústico especializado en platos caseros de Palermo y recetas sicilianas tradicionales.",
                priceRange: "€€",
                cuisine: "Siciliana Tradicional",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "Bisso Bistrot",
                description: "Encantador bistró en una antigua librería, que sirve platos sicilianos sencillos en un ambiente vintage.",
                priceRange: "€-€€",
                cuisine: "Bistró, Siciliana",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "L'Ottava Nota",
                description: "Elegante restaurante que ofrece especialidades de mariscos y cocina siciliana refinada con un servicio atento.",
                priceRange: "€€-€€€",
                cuisine: "Mariscos, Siciliana",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "Ferro di Cavallo",
                description: "Trattoria histórica popular entre los locales, conocida por la comida callejera tradicional de Palermo y la cocina informal.",
                priceRange: "€",
                cuisine: "Comida Callejera, Trattoria",
                image: "images/attractions/placeholder.jpg"
            }
        ],
        
        // Experience data
        experiencesData: [
            {
                name: "Clase de Cocina Siciliana",
                description: "Aprende a preparar platos tradicionales sicilianos con nuestro chef local. Incluye visita al mercado, clase de cocina y almuerzo con maridaje de vinos.",
                duration: "4 horas",
                price: "€85 por persona",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "Tour de Comida Callejera",
                description: "Descubre la famosa comida callejera de Palermo con un guía local. Visita mercados históricos y prueba auténticas especialidades locales.",
                duration: "3 horas",
                price: "€60 por persona",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "Cata de Vinos Sicilianos",
                description: "Prueba los mejores vinos sicilianos con la orientación de un experto. Incluye degustación de 5 vinos premium y aperitivos locales.",
                duration: "2 horas",
                price: "€55 por persona",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "Tour de Palermo de Noche",
                description: "Experimenta la magia de Palermo después del anochecer. Visita monumentos iluminados y disfruta de la vibrante escena nocturna.",
                duration: "3 horas",
                price: "€50 por persona",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "Espectáculo de Marionetas Sicilianas",
                description: "Contempla un espectáculo tradicional de marionetas sicilianas (Opera dei Pupi) y aprende sobre este patrimonio cultural reconocido por la UNESCO.",
                duration: "1.5 horas",
                price: "€35 por persona",
                image: "images/attractions/placeholder.jpg"
            },
            {
                name: "Excursión al Monte Pellegrino",
                description: "Excursión guiada al Monte Pellegrino con vistas panorámicas de Palermo y el Mar Mediterráneo.",
                duration: "5 horas",
                price: "€45 por persona",
                image: "images/attractions/placeholder.jpg"
            }
        ],
        
        // Quarter-specific attractions
        albergheriaAttractions: [
            { name: "Ballarò (mercado)", image: "images/attractions/ballaro.jpg" },
            { name: "Chiesa del Carmine", image: "images/attractions/chiesa_carmine.jpg" },
            { name: "Casa Professa", image: "images/attractions/casa_professa.jpg" },
            { name: "Palazzo Conte Federico", image: "images/attractions/palazzo_federico.jpg" },
            { name: "San Giovanni degli Eremiti", image: "images/attractions/san_giovanni_eremiti.jpg" },
            { name: "Palazzo Reale", image: "images/attractions/palazzo_reale.jpg" },
            { name: "Catedral", image: "images/attractions/cattedrale.jpg" },
            { name: "Palazzo Asmundo", image: "images/attractions/palazzo_asmundo.jpg" },
            { name: "Palazzo Riso", image: "images/attractions/palazzo_riso.jpg" },
            { name: "San Giuseppe dei Teatini", image: "images/attractions/san_giuseppe_teatini.jpg" }
        ],
        capoAttractions: [
            { name: "Teatro Massimo", image: "images/attractions/teatro_massimo.jpg" },
            { name: "Chiesa dell'Immacolata Concezione", image: "images/attractions/chiesa_immacolata.jpg" },
            { name: "Mercado del Capo", image: "images/attractions/mercato_capo.jpg" },
            { name: "Porta Carini", image: "images/attractions/porta_carini.jpg" },
            { name: "Chiesa del Gesù (Casa Professa)", image: "images/attractions/chiesa_gesu.jpg" },
            { name: "Oratorio di San Lorenzo", image: "images/attractions/oratorio_san_lorenzo.jpg" },
            { name: "Quattro Canti", image: "images/attractions/quattro_canti.jpg" },
            { name: "Fontana Pretoria", image: "images/attractions/fontana_pretoria.jpg" },
            { name: "Chiesa di San Cataldo", image: "images/attractions/chiesa_san_cataldo.jpg" },
            { name: "Palazzo dei Normanni", image: "images/attractions/palazzo_normanni.jpg" }
        ],
        kalsaAttractions: [
            { name: "Piazza Marina", image: "images/attractions/piazza_marina.jpg" },
            { name: "Palazzo Steri", image: "images/attractions/palazzo_steri.jpg" },
            { name: "Jardín Garibaldi", image: "images/attractions/giardino_garibaldi.jpg" },
            { name: "Jardín Botánico", image: "images/attractions/orto_botanico.jpg" },
            { name: "Porta Felice", image: "images/attractions/porta_felice.jpg" },
            { name: "Foro Italico", image: "images/attractions/foro_italico.jpg" },
            { name: "Castello a Mare", image: "images/attractions/castello_mare.jpg" },
            { name: "Chiesa della Catena", image: "images/attractions/chiesa_catena.jpg" },
            { name: "Palazzo Abatellis", image: "images/attractions/palazzo_abatellis.jpg" },
            { name: "Galería Regional de Sicilia", image: "images/attractions/galleria_sicilia.jpg" }
        ],
        loggiaAttractions: [
            { name: "Mercado de la Vucciria", image: "images/attractions/mercato_vucciria.jpg" },
            { name: "Iglesia de San Domenico", image: "images/attractions/chiesa_san_domenico.jpg" },
            { name: "Plaza San Domenico", image: "images/attractions/piazza_san_domenico.jpg" },
            { name: "Via Roma", image: "images/attractions/via_roma.jpg" },
            { name: "Palazzo Mazzarino", image: "images/attractions/palazzo_mazzarino.jpg" },
            { name: "La Cala", image: "images/attractions/la_cala.jpg" },
            { name: "Iglesia de Santa Maria La Nova", image: "images/attractions/chiesa_santa_maria.jpg" },
            { name: "Osteria dei Vespri", image: "images/attractions/osteria_vespri.jpg" },
            { name: "Museo Salinas", image: "images/attractions/museo_salinas.jpg" },
            { name: "Porta Nuova", image: "images/attractions/porta_nuova.jpg" }
        ],
        
        // Print QR code texts
        scanToExplore: "Escanea para explorar el barrio",
        scanToExploreSuffix: "de Palermo",
        quarterSuffix: "Barrio - Sant'Agostino BnB"
    }
};

// Function to get a translation
function getTranslation(key, lang = 'en') {
    const langData = translations[lang] || translations.en;
    return langData[key] || translations.en[key] || key;
}

// Function to search for an image dynamically
async function searchAttractionImage(attractionName) {
    try {
        // Add Palermo to make the search more specific
        const searchQuery = `${attractionName} Palermo Sicily`;
        const encodedQuery = encodeURIComponent(searchQuery);
        
        // Unsplash API credentials
        const apiKey = 'AZSIli5_la1qpsVQvNOQuNcbflnnc73U_9L6BbNUX6Q';
        
        // Using Unsplash API
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodedQuery}&per_page=1&client_id=${apiKey}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch image');
        }
        
        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
            return data.results[0].urls.regular;
        } else {
            throw new Error('No images found');
        }
    } catch (error) {
        console.error('Error fetching image:', error);
        return null;
    }
}

// Function to create an attraction card
function createAttractionCard(attraction, useDynamicImages = false) {
    const card = document.createElement('div');
    card.className = 'attraction-card';
    
    // Image with fallback
    const img = document.createElement('img');
    img.className = 'attraction-image';
    img.alt = attraction.name;
    
    if (useDynamicImages) {
        // Set a loading placeholder initially
        img.src = 'images/attractions/loading.gif';
        
        // Try to find a dynamic image
        searchAttractionImage(attraction.name)
            .then(imageUrl => {
                if (imageUrl) {
                    img.src = imageUrl;
                } else {
                    // If dynamic image fails, use the predefined one or placeholder
                    img.src = attraction.image || 'images/attractions/placeholder.jpg';
                }
            })
            .catch(() => {
                // If the API call fails, use the predefined image or placeholder
                img.src = attraction.image || 'images/attractions/placeholder.jpg';
            });
    } else {
        // Use the predefined image path with fallback
        img.src = attraction.image;
        img.onerror = function() {
            this.src = 'images/attractions/placeholder.jpg';
        };
    }
    
    // Info section
    const info = document.createElement('div');
    info.className = 'attraction-info';
    
    const title = document.createElement('h3');
    title.textContent = attraction.name;
    
    info.appendChild(title);
    card.appendChild(img);
    card.appendChild(info);
    
    return card;
}

// Function to update all elements with data-i18n attribute
function updatePageLanguage(lang) {
    // Save language preference
    localStorage.setItem('preferred_language', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key) {
            // For text content
            if (!element.hasAttribute('data-i18n-attr')) {
                element.textContent = getTranslation(key, lang);
            } else {
                // For attributes like placeholder, title, etc.
                const attr = element.getAttribute('data-i18n-attr');
                element.setAttribute(attr, getTranslation(key, lang));
            }
        }
    });
    
    // If attractions grid exists, update it
    const attractionsGrid = document.getElementById('attractions-grid');
    if (attractionsGrid) {
        // Get current page
        const path = window.location.pathname;
        let quarter = '';
        
        if (path.includes('albergheria')) {
            quarter = 'albergheriaAttractions';
        } else if (path.includes('capo')) {
            quarter = 'capoAttractions';
        } else if (path.includes('kalsa')) {
            quarter = 'kalsaAttractions';
        } else if (path.includes('loggia')) {
            quarter = 'loggiaAttractions';
        }
        
        if (quarter) {
            // Clear current grid
            attractionsGrid.innerHTML = '';
            
            // Add new items
            const attractions = getTranslation(quarter, lang);
            if (Array.isArray(attractions)) {
                // Check if we should use dynamic images
                const useDynamicImages = localStorage.getItem('use_dynamic_images') === 'true';
                
                attractions.forEach(attraction => {
                    const card = createAttractionCard(attraction, useDynamicImages);
                    attractionsGrid.appendChild(card);
                });
            }
        }
    }
    
    // Update document title if available
    if (document.title) {
        const currentQuarter = getCurrentQuarter();
        if (currentQuarter) {
            const quarterName = getTranslation(currentQuarter, lang);
            document.title = `${quarterName} ${getTranslation('quarterSuffix', lang)}`;
        } else {
            document.title = getTranslation('title', lang);
        }
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Function to get current quarter from URL
function getCurrentQuarter() {
    const path = window.location.pathname;
    if (path.includes('albergheria')) {
        return 'albergheria';
    } else if (path.includes('capo')) {
        return 'capo';
    } else if (path.includes('kalsa')) {
        return 'kalsa';
    } else if (path.includes('loggia')) {
        return 'loggia';
    }
    return null;
}

// Initialize language from localStorage or default to English
function initializeLanguage() {
    const savedLang = localStorage.getItem('preferred_language') || 'en';
    updatePageLanguage(savedLang);
    
    // Update language selector if it exists
    const langSelector = document.getElementById('language-selector');
    if (langSelector) {
        langSelector.value = savedLang;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeLanguage); 