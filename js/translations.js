// Translations for the website
const translations = {
    en: {
        // Common elements
        title: "Sant'Agostino BnB - Palermo Map",
        title_location: "Palermo",
        title_map: "Map",
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
                name: "Maccio Osteria Alcolica",
                description: "A charming restaurant perfectly situated near Piazza Olivella, Maccio Osteria Alcolica offers an authentic culinary experience with their exceptional ragù bolognese that locals rave about. The restaurant boasts an impressive selection of liqueurs and wines, carefully curated to complement their dishes. The knowledgeable staff provides impeccable service, creating a memorable dining experience in a peaceful atmosphere. With reasonable prices for such high-quality cuisine and a stellar 4.7 Google rating, this restaurant is a must-visit for those seeking authentic Sicilian flavors in an intimate setting.",
                priceRange: "€20-30 per person",
                cuisine: "Traditional Sicilian, Wine Bar",
                image: "images/attractions/placeholder.jpg",
                referent: "Enrico",
                address: "Via Orologio 22, 90133, Palermo",
                phone: "+39 346 154 0413",
                openUntil: "23:00",
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
        title_location: "Palermo",
        title_map: "Mappa",
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
                name: "Maccio Osteria Alcolica",
                description: "Un incantevole ristorante perfettamente situato vicino a Piazza Olivella, Maccio Osteria Alcolica offre un'autentica esperienza culinaria con il loro eccezionale ragù bolognese, molto apprezzato dai clienti. Il ristorante vanta un'impressionante selezione di liquori e vini, attentamente selezionati per accompagnare i loro piatti. Il personale esperto fornisce un servizio impeccabile, creando un'esperienza gastronomica memorabile in un'atmosfera tranquilla. Con prezzi ragionevoli per una cucina di tale qualità e un eccellente punteggio di 4.7 su Google, questo ristorante è una tappa obbligata per chi cerca autentici sapori siciliani in un ambiente intimo.",
                priceRange: "€20-30 a persona",
                cuisine: "Siciliana Tradizionale, Enoteca",
                image: "images/attractions/placeholder.jpg",
                referent: "Enrico",
                address: "Via Orologio 22, 90133, Palermo",
                phone: "+39 346 154 0413",
                openUntil: "23:00",
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
                description: "Tour a piedi del centro storico per scoprire la millenaria storia di Palermo. Visiteremo il Teatro Massimo, il Mercato del Capo, la Cattedrale, il Palazzo dei Normanni con la Cappella Palatina, i Quattro Canti e Piazza Bellini.",
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
                name: "Arab-Norman Cathedrals Tour",
                description: "Visita le quattro cattedrali normanne più interessanti di Palermo e provincia in treno e trasporto privato, incluse la Cappella Palatina, la Martorana, Cefalù e Monreale.",
                duration: "4-5 ore",
                price: "€100-€140 a persona",
                image: "images/attractions/placeholder.jpg",
                note: "Includes train ticket and transfer to Monreale."
            },
            {
                name: "Lezione di cucina con lo Chef",
                description: "Visita il mercato del Capo con il nostro chef per selezionare ingredienti freschi, poi prepara ricette siciliane tradizionali a casa dello chef, concludendo con il pranzo insieme.",
                duration: "3-4 ore",
                price: "€130 a persona",
                image: "images/attractions/placeholder.jpg",
                note: "Includes market visit, cooking class, and lunch with selected ingredients."
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
        title_location: "Palerme",
        title_map: "Carte",
        explore: "Explorez les quatre quartiers historiques de Palerme",
        back: "← Retour à la Carte",
        placesToVisit: "Lieux à Visiter",
        scanVisit: "Scannez pour visiter cette page",
        printQR: "Imprimer le Code QR",
        exploreButton: "Explorer",
        copyright: "© Sant'Agostino BnB - Carte de Palerme",
        interactiveMap: "Carte Interactive de Palerme",
        
        // Additional services section
        additionalServices: "Services Complémentaires",
        restaurantsDesc: "Découvrez les meilleurs restaurants locaux et la cuisine sicilienne authentique",
        experiencesDesc: "Expériences locales authentiques proposées par notre B&B et nos partenaires",
        
        // Quarters
        capo: "Capo",
        albergheria: "Albergheria",
        kalsa: "Kalsa",
        loggia: "La Loggia",
        
        // Descriptions
        capoDesc: "Découvrez le Teatro Massimo, la Cathédrale et plus encore",
        albergheriaDesc: "Visitez le marché Ballarò, le Palazzo Reale et plus encore",
        kalsaDesc: "Explorez Piazza Pretoria, l'Orto Botanico et plus encore",
        loggiaDesc: "Visitez San Domenico, le marché Vucciria et plus encore",
        
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
        experiencesIntro: "Découvrez d'authentiques expériences siciliennes avec nos partenaires locaux",
        bookNow: "Réserver Maintenant",
        contactBnB: "Veuillez contacter l'hôte du B&B pour réserver cette expérience.",
        
        // Restaurant data
        restaurantsData: [
            {
                name: "Dainotti's",
                description: "Situé dans le Mercato del Capo, offrant la street food traditionnelle de Palerme. Connu pour sa gentillesse et son expertise.",
                priceRange: "€10-20 par personne",
                cuisine: "Street Food, Sandwicherie",
                image: "images/attractions/placeholder.jpg",
                referent: "Arianna",
                address: "Via Porta Carini, 51, 90134 Palermo PA",
                type: "Lunch"
            },
            {
                name: "Maccio Osteria Alcolica",
                description: "Un charmant restaurant idéalement situé près de la Piazza Olivella, Maccio Osteria Alcolica offre une expérience culinaire authentique avec son exceptionnel ragù bolognese dont les habitants raffolent. Le restaurant propose une impressionnante sélection de liqueurs et de vins, soigneusement choisis pour accompagner leurs plats. Le personnel compétent assure un service impeccable, créant une expérience gastronomique mémorable dans une atmosphère paisible. Avec des prix raisonnables pour une cuisine de cette qualité et une note Google exceptionnelle de 4,7, ce restaurant est incontournable pour ceux qui recherchent des saveurs siciliennes authentiques dans un cadre intime.",
                priceRange: "€20-30 par personne",
                cuisine: "Sicilienne Traditionnelle, Bar à Vin",
                image: "images/attractions/placeholder.jpg",
                referent: "Enrico",
                address: "Via Orologio 22, 90133, Palermo",
                phone: "+39 346 154 0413",
                openUntil: "23:00",
                type: "Lunch"
            },
            {
                name: "Trattoria Bersagliere",
                description: "Trattoria historique dans le quartier Albergheria, célèbre pour ses pâtes avec 'glassa' et son atmosphère chaleureuse et familiale.",
                priceRange: "€10-20 par personne",
                cuisine: "Sicilienne Traditionnelle",
                image: "images/attractions/placeholder.jpg",
                referent: "Lollo",
                address: "Via S. Nicolò All'Albergheria, 38, 90134 Palermo PA",
                type: "Lunch"
            },
            {
                name: "Dadalia Osteria",
                description: "Osteria sicilienne typique située dans le marché historique de Vucciria. Propose des plats végétariens et dispose d'une terrasse extérieure.",
                priceRange: "€10-20 par personne",
                cuisine: "Sicilienne, Options Végétariennes",
                image: "images/attractions/placeholder.jpg",
                referent: "Pippo ou Giovanni",
                address: "Via Maccherronai, 20, 90133 Palermo PA",
                type: "Lunch"
            },
            {
                name: "L'Acerba Osteria Dinamica",
                description: "Une osteria dynamique qui combine des éléments de galería de arte, cóctel bar et restaurante, avec une cuisine créative utilisant des ingrédients locaux.",
                priceRange: "€20-40 par personne",
                cuisine: "Sicilienne Créative",
                image: "images/attractions/placeholder.jpg",
                referent: "Gabriele",
                address: "Vicolo Maestro Cristofaro, 10, 90134 Palermo PA",
                type: "Dinner"
            },
            {
                name: "Le Angeliche",
                description: "Restaurant romantique avec un patio élégant, specialisé dans les fruits de mer, les pâtes et les aperitifs siciliens, avec des options véganes disponibles.",
                priceRange: "€30-40 par personne",
                cuisine: "Fruits de Mer, Options Véganes",
                image: "images/attractions/placeholder.jpg",
                referent: "Floriana ou Chiara",
                address: "Vicolo Abbadia, 10, 90134 Palermo PA",
                type: "Dinner"
            },
            {
                name: "Trattoria Supra i Mura",
                description: "Situé au cœur de Palermo, offrant une variété de plats de fruits de mer et de cuisine sicilienne traditionnelle dans une atmosphère accueillante.",
                priceRange: "€20-30 par personne",
                cuisine: "Fruits de Mer, Sicilienne Traditionnelle",
                image: "images/attractions/placeholder.jpg",
                referent: "Pietro",
                address: "Piazza Porta Carini, 5, 90134 Palermo PA",
                type: "Dinner"
            },
            {
                name: "Enoteca Butticè",
                description: "Restaurant et bar à vin avec plus de 700 étiquettes de vin, offreciendo cocina palermitana et excelentes cócteles.",
                priceRange: "€20-40 par personne",
                cuisine: "Sicilienne, Bar à Vin",
                image: "images/attractions/placeholder.jpg",
                referent: "Giuseppe",
                address: "Piazza S. Francesco di Paola, 12, 90138 Palermo PA",
                type: "Dinner"
            },
            {
                name: "Ferramenta",
                description: "Restaurant au cœur du centre historique de Palermo, avec des places en terrasse et des options véganes, idéal pour une atmosphère jeune et accueillante.",
                priceRange: "€20-30 par personne",
                cuisine: "Méditerranéenne, Opzions Véganes",
                image: "images/attractions/placeholder.jpg",
                referent: "Luca ou Marcello",
                address: "Piazza Giovanni Meli, 8, 90133 Palermo PA",
                type: "Dinner"
            },
            {
                name: "Forno Santa Maria",
                description: "Pizzería con un enfoque artesanal en la panadería y la mixología, ubicada en el corazón du centre historique.",
                priceRange: "€20-30 par personne",
                cuisine: "Pizza, Artesanal",
                image: "images/attractions/placeholder.jpg",
                referent: "Luca ou Marcello",
                address: "Via Giovanni Meli, 35, 90133 Palermo PA",
                type: "Dinner"
            }
        ],
        
        // Experience data
        experiencesData: [
            {
                name: "Découvrir Palermo",
                description: "Une visite à pied du centre historique pour découvrir l'histoire millénaire de Palermo, un crisol unique en le monde. Visitez le Teatro Massimo, le marché du Capo, la Cathédrale, le Palais des Normands avec la Chapelle Palatine, les Quattro Canti et la Piazza Bellini.",
                duration: "3 heures",
                price: "€45-€100 par personne",
                image: "images/attractions/placeholder.jpg",
                note: "Les entrées aux bâtiments historiques ou monuments ne sont pas incluses dans le prix."
            },
            {
                name: "Tour Apéritif de Street Food",
                description: "Un apéritif itinerant dans les rues du centre historique de Palermo. Experimente la comida callejera traditionnelle, incluyendo panelle, crocche, sfincione, pan con bazo y una copa de vino en la Vucciria.",
                duration: "2 heures",
                price: "€45-€55 par personne",
                image: "images/attractions/placeholder.jpg",
                note: "Degustations de comida inclues dans le prix."
            },
            {
                name: "Le Royaume du Soleil - Itinerario Árabe-Normando",
                description: "Descubra les sites du patrimonio Árabe-Normando de la UNESCO en Palermo, incluyendo el Palacio Real con la Chapelle Palatine, la Cathédrale, San Giovanni degli Eremiti, San Cataldo y Santa Maria dell'Ammiraglio.",
                duration: "3,5 heures",
                price: "€45-€100 par personne",
                image: "images/attractions/placeholder.jpg",
                note: "Les entrées aux bâtiments historiques ou monuments ne sont pas incluses dans le prix."
            },
            {
                name: "La Dynastía de los Florio - Recorrido a Pie",
                description: "Trace la historia de la famiglia Florio desde el distrito de la Loggia hasta el Teatro Massimo. Conozca sus negocios, éxitos e impacto en la Belle Époque palermitana.",
                duration: "3 heures",
                price: "€45-€100 par personne",
                image: "images/attractions/placeholder.jpg",
                note: "Les entrées aux bâtiments historiques ou monuments ne sont pas incluses dans le prix."
            },
            {
                name: "La Dynastía de los Florio con Transporte Privé",
                description: "Descubra el legado de la famiglia Florio con transporte privado. Visite el Villino Florio all'Olivuzza, la Villa Malfitano-Whitaker y la casa de Arenella con Quattro Pizzi.",
                duration: "4 heures",
                price: "€55-€150 par personne",
                image: "images/attractions/placeholder.jpg",
                note: "Solo disponible los sábados por la tarde y los domingos por la mañana."
            },
            {
                name: "Tour de Catedrales Árabe-Normandas",
                description: "Visite las cuatro catedrales normandas más interesantes de Palermo y su provincia en tren y transporte privado, incluyendo la Capilla Palatina, la Martorana, Cefalú y Monreale.",
                duration: "4-5 horas",
                price: "€100-€140 par personne",
                image: "images/attractions/placeholder.jpg",
                note: "Incluye boleto de tren y traslado a Monreale."
            },
            {
                name: "Cours de Cuisine avec Chef",
                description: "Visite el mercado del Capo con nuestro chef para seleccionar ingredientes frescos, luego prepare recetas sicilianas tradicionales en la casa del chef, finalizando con un almuerzo juntos.",
                duration: "3-4 horas",
                price: "€130 par personne",
                image: "images/attractions/placeholder.jpg",
                note: "Incluye visita al mercado, clase de cocina y almuerzo con los ingredientes seleccionados."
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
        scanToExploreSuffix: "de Palermo",
        quarterSuffix: "Quartier - Sant'Agostino BnB"
    },
    es: {
        // Common elements
        title: "Sant'Agostino BnB - Mapa de Palermo",
        title_location: "Palermo",
        title_map: "Mapa",
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
        experiencesDesc: "Experiencias locales auténticas ofrecidas por nuestro B&B y socios",
        
        // Quarters
        capo: "Capo",
        albergheria: "Albergheria",
        kalsa: "Kalsa",
        loggia: "La Loggia",
        
        // Descriptions
        capoDesc: "Descubre el Teatro Massimo, la Catedral y más",
        albergheriaDesc: "Visita el mercado de Ballarò, el Palazzo Reale y más",
        kalsaDesc: "Explora Piazza Pretoria, el Orto Botanico y más",
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
        experiencesIntro: "Descubre auténticas experiencias sicilianas con nuestros socios locales",
        bookNow: "Reservar Ahora",
        contactBnB: "Por favor, contacte con el anfitrión del B&B para reservar esta experiencia.",
        
        // Restaurant data
        restaurantsData: [
            {
                name: "Dainotti's",
                description: "Ubicado en el Mercato del Capo, ofrece comida callejera tradicional de Palermo. Conocido por su amabilidad y experiencia.",
                priceRange: "€10-20 por persona",
                cuisine: "Street Food, Sandwichería",
                image: "images/attractions/placeholder.jpg",
                referent: "Arianna",
                address: "Via Porta Carini, 51, 90134 Palermo PA",
                type: "Lunch"
            },
            {
                name: "Maccio Osteria Alcolica",
                description: "Un encantador restaurante perfectamente situado cerca de Piazza Olivella, Maccio Osteria Alcolica ofrece una auténtica experiencia culinaria con su excepcional ragù boloñesa del que los lugareños hablan maravillas. El restaurante cuenta con una impresionante selección de licores y vinos, cuidadosamente seleccionados para complementar sus platos. El personal conocedor proporciona un servicio impecable, creando una experiencia gastronómica memorable en un ambiente tranquilo. Con precios razonables para una cocina de tal calidad y una excelente calificación de 4.7 en Google, este restaurante es una visita obligada para aquellos que buscan auténticos sabores sicilianos en un entorno íntimo.",
                priceRange: "€20-30 por persona",
                cuisine: "Siciliana Tradicional, Bar de Vinos",
                image: "images/attractions/placeholder.jpg",
                referent: "Enrico",
                address: "Via Orologio 22, 90133, Palermo",
                phone: "+39 346 154 0413",
                openUntil: "23:00",
                type: "Lunch"
            },
            {
                name: "Trattoria Bersagliere",
                description: "Trattoria histórica en el barrio de Albergheria, famosa por su pasta con 'glassa' y un ambiente acogedor y familiar.",
                priceRange: "€10-20 por persona",
                cuisine: "Siciliana Tradicional",
                image: "images/attractions/placeholder.jpg",
                referent: "Lollo",
                address: "Via S. Nicolò All'Albergheria, 38, 90134 Palermo PA",
                type: "Lunch"
            },
            {
                name: "Dadalia Osteria",
                description: "Típica osteria siciliana situada en el histórico mercado de Vucciria. Ofrece platos vegetarianos y tiene asientos al aire libre.",
                priceRange: "€10-20 por persona",
                cuisine: "Siciliana, Opciones Vegetarianas",
                image: "images/attractions/placeholder.jpg",
                referent: "Pippo o Giovanni",
                address: "Via Maccherronai, 20, 90133 Palermo PA",
                type: "Lunch"
            },
            {
                name: "L'Acerba Osteria Dinamica",
                description: "Una osteria dinámica que combina elementos de galería de arte, cóctel bar y restaurante, con cocina creativa usando ingredientes locales.",
                priceRange: "€20-40 por persona",
                cuisine: "Siciliana Creativa",
                image: "images/attractions/placeholder.jpg",
                referent: "Gabriele",
                address: "Vicolo Maestro Cristofaro, 10, 90134 Palermo PA",
                type: "Dinner"
            },
            {
                name: "Le Angeliche",
                description: "Restaurante romántico con un elegante patio, especializado en mariscos, pasta y aperitivos sicilianos, con opciones veganas disponibles.",
                priceRange: "€30-40 por persona",
                cuisine: "Mariscos, Opciones Veganas",
                image: "images/attractions/placeholder.jpg",
                referent: "Floriana o Chiara",
                address: "Vicolo Abbadia, 10, 90134 Palermo PA",
                type: "Dinner"
            },
            {
                name: "Trattoria Supra i Mura",
                description: "Ubicado en el corazón de Palermo, offre una variedad de platos de mariscos y cocina tradicional siciliana en un ambiente acogedor.",
                priceRange: "€20-30 por persona",
                cuisine: "Mariscos, Siciliana Tradicional",
                image: "images/attractions/placeholder.jpg",
                referent: "Pietro",
                address: "Piazza Porta Carini, 5, 90134 Palermo PA",
                type: "Dinner"
            },
            {
                name: "Enoteca Butticè",
                description: "Restaurante y bar de vinos con más de 700 etiquetas de vino, ofreciendo cocina palermitana y excelentes cócteles.",
                priceRange: "€20-40 por persona",
                cuisine: "Siciliana, Bar de Vinos",
                image: "images/attractions/placeholder.jpg",
                referent: "Giuseppe",
                address: "Piazza S. Francesco di Paola, 12, 90138 Palermo PA",
                type: "Dinner"
            },
            {
                name: "Ferramenta",
                description: "Restaurante en el centro histórico de Palermo, con asientos al aire libre y opciones veganas, ideal para un ambiente joven y acogedor.",
                priceRange: "€20-30 por persona",
                cuisine: "Mediterránea, Opciones Veganas",
                image: "images/attractions/placeholder.jpg",
                referent: "Luca o Marcello",
                address: "Piazza Giovanni Meli, 8, 90133 Palermo PA",
                type: "Dinner"
            },
            {
                name: "Forno Santa Maria",
                description: "Pizzería con un enfoque artesanal en la panadería y la mixología, ubicada en el corazón del centro histórico.",
                priceRange: "€20-30 por persona",
                cuisine: "Pizza, Artesanal",
                image: "images/attractions/placeholder.jpg",
                referent: "Luca o Marcello",
                address: "Via Giovanni Meli, 35, 90133 Palermo PA",
                type: "Dinner"
            }
        ],
        
        // Experience data
        experiencesData: [
            {
                name: "Descubriendo Palermo",
                description: "Un recorrido a pie por el centro histórico para descubrir la historia millenaria de Palermo, un crisol único en el mundo. Visite el Teatro Massimo, el Mercado del Capo, la Cattedrale, el Palacio Normando con la Capilla Palatina, los Quattro Canti y la Piazza Bellini.",
                duration: "3 horas",
                price: "€45-€100 por persona",
                image: "images/attractions/placeholder.jpg",
                note: "Las entradas a edificios históricos o monumentos no están incluidas en el precio."
            },
            {
                name: "Tour de Aperitivo y Comida Callejera",
                description: "Un aperitivo itinerante por las calles del centro histórico de Palermo. Experimente la comida callejera tradicional, incluyendo panelle, crocche, sfincione, pan con bazo y una copa de vino en la Vucciria.",
                duration: "2 horas",
                price: "€45-€55 por persona",
                image: "images/attractions/placeholder.jpg",
                note: "Degustaciones de comida inclues en el precio."
            },
            {
                name: "El Reino del Sol - Itinerario Árabe-Normando",
                description: "Descubra los sitios del patrimonio Árabe-Normando de la UNESCO en Palermo, incluyendo el Palacio Real con la Capilla Palatina, la Cattedrale, San Giovanni degli Eremiti, San Cataldo y Santa Maria dell'Ammiraglio.",
                duration: "3.5 horas",
                price: "€45-€100 por persona",
                image: "images/attractions/placeholder.jpg",
                note: "Las entradas a edificios históricos o monumentos no están incluidas en el precio."
            },
            {
                name: "La Dinastía de los Florio - Recorrido a Pie",
                description: "Trace la historia de la familia Florio desde el distrito de la Loggia hasta el Teatro Massimo. Conozca sus negocios, éxitos e impacto en la Belle Époque palermitana.",
                duration: "3 horas",
                price: "€45-€100 por persona",
                image: "images/attractions/placeholder.jpg",
                note: "Las entradas a edificios históricos o monumentos no están incluidas en el precio."
            },
            {
                name: "La Dinastía de los Florio con Transporte Privado",
                description: "Descubra el legado de la familia Florio con transporte privado. Visite el Villino Florio all'Olivuzza, la Villa Malfitano-Whitaker y la casa de Arenella con Quattro Pizzi.",
                duration: "4 horas",
                price: "€55-€150 por persona",
                image: "images/attractions/placeholder.jpg",
                note: "Solo disponible los sábados por la tarde y los domingos por la mañana."
            },
            {
                name: "Tour de Catedrales Árabe-Normandas",
                description: "Visite las cuatro catedrales normandas más interesantes de Palermo y su provincia en tren y transporte privado, incluyendo la Capilla Palatina, la Martorana, Cefalú y Monreale.",
                duration: "4-5 horas",
                price: "€100-€140 por persona",
                image: "images/attractions/placeholder.jpg",
                note: "Incluye boleto de tren y traslado a Monreale."
            },
            {
                name: "Clase de Cocina con Chef",
                description: "Visite el mercado del Capo con nuestro chef para seleccionar ingredientes frescos, luego prepare recetas sicilianas tradicionales en la casa del chef, finalizando con un almuerzo juntos.",
                duration: "3-4 horas",
                price: "€130 por persona",
                image: "images/attractions/placeholder.jpg",
                note: "Incluye visita al mercado, clase de cocina y almuerzo con los ingredientes seleccionados."
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
            { name: "Musée Salinas", image: "images/attractions/museo_salinas.jpg" },
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