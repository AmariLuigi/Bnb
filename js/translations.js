// Image paths as variables
const images = {
    // Attractions
    ballaro_market: "images/attractions/ballaro_market.webp",
    capo_market: "images/attractions/capo_market.jpg",
    cattedrale: "images/attractions/cattedrale.webp",
    teatro_massimo: "images/attractions/teatromassimo.webp",
    sicilian_gallery: "images/attractions/Sicilian Regional Art Gallery.webp",
    chiesa_carmine: "images/attractions/chiesa_carmine.jpg",
    casa_professa: "images/attractions/casa_professa.jpg",
    palazzo_federico: "images/attractions/palazzo_conte_federico.jpg",
    san_giovanni_eremiti: "images/attractions/San-Giovanni-degli-Eremiti.jpg",
    palazzo_reale: "images/attractions/Palazzo reale.jpg",
    palazzo_asmundo: "images/attractions/palazzo asmundo.webp",
    palazzo_riso: "images/attractions/palazzo riso.jpeg",
    san_giuseppe_teatini: "images/attractions/Chiesa-san-giuseppe-dei-teatini-palermo.jpg",
    chiesa_immacolata: "images/attractions/Chiesa_dell'Immacolata_Concezione_al_Capo.jpeg",
    porta_carini: "images/attractions/porta-carini.webp",
    chiesa_san_cataldo: "images/attractions/Chiesa-di-San-Cataldo-Palermo.jpg",
    piazza_marina: "images/attractions/piazza-marina.jpg",
    palazzo_steri: "images/attractions/palazzo-steri.jpg",
    orto_botanico: "images/attractions/orto-botanico-pa.jpg",
    porta_felice: "images/attractions/Porta felice.jpg",
    castello_mare: "images/attractions/castello mare.jpg",
    chiesa_catena: "images/attractions/chiesa-di-santa-maria-della-catena.jpg",
    palazzo_abatellis: "images/attractions/palazzo abatellis.jpg",
    palazzo_butera: "images/attractions/il-fronte-a-mare-di-palazzo-butera.jpg",
    spasimo: "images/attractions/spasimo.jpg",
    chiesa_san_francesco: "images/attractions/chiesa-di-san-francesco-di-paola.jpg",
    oratorio_san_lorenzo: "images/attractions/oratorio-di-san-lorenzo.jpg",
    piazza_magione: "images/attractions/piazza-magione.jpg",
    mercato_vucciria: "images/attractions/mercato-vucciria.jpg",
    chiesa_san_domenico: "images/attractions/chiesa-di-san-domenico.jpg",
    piazza_san_domenico: "images/attractions/piazza-san-domenico.jpg",
    palazzo_mazzarino: "images/attractions/esterno-del-palazzo-mazzarino.jpg",
    la_cala: "images/attractions/la-cala.jpg",
    chiesa_santa_maria: "images/attractions/santa-maria-dell-ammiraglio.jpg",
    museo_salinas: "images/attractions/museo archeologio regionale antonino salinas.jpg",
    palazzo_branciforte: "images/attractions/palazzo-branciforte.jpg",
    piazza_tredici_vittime: "images/attractions/descrizione-dell-obelisco-tredici-vittime.jpg",
    placeholder: "images/attractions/placeholder.jpg"
};

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
        michelinRestaurants: "Michelin Starred Restaurants",
        referent: "Referent",
        experiences: "B&B Experiences",
        localExperiences: "Local Experiences",
        experiencesIntro: "Discover authentic Sicilian experiences with our local partners",
        bookNow: "Book Now",
        contactBnB: "Please contact the B&B host to book this experience.",
        
        // Quarter-specific attractions
        albergheriaAttractions: [
            { name: "Ballarò (market)", image: images.ballaro_market },
            { name: "Chiesa del Carmine", image: images.chiesa_carmine },
            { name: "Casa Professa", image: images.casa_professa },
            { name: "Palazzo Conte Federico", image: images.palazzo_federico },
            { name: "San Giovanni degli Eremiti", image: images.san_giovanni_eremiti },
            { name: "Palazzo Reale", image: images.palazzo_reale },
            { name: "Cattedrale", image: images.cattedrale },
            { name: "Palazzo Asmundo", image: images.palazzo_asmundo },
            { name: "Palazzo Riso", image: images.palazzo_riso },
            { name: "San Giuseppe dei Teatini", image: images.san_giuseppe_teatini }
        ],
        capoAttractions: [
            { name: "Mercato del Capo", image: images.capo_market },
            { name: "Chiesa dell'Immacolata Concezione", image: images.chiesa_immacolata },
            { name: "Porta Carini", image: images.porta_carini },
            { name: "Teatro Massimo", image: images.teatro_massimo }
        ],
        kalsaAttractions: [
            { name: "Piazza Marina", image: images.piazza_marina },
            { name: "Palazzo Steri", image: images.palazzo_steri },
            { name: "Orto Botanico", image: images.orto_botanico },
            { name: "Porta Felice", image: images.porta_felice },
            { name: "Castello a Mare", image: images.castello_mare },
            { name: "Chiesa della Catena", image: images.chiesa_catena },
            { name: "Palazzo Abatellis", image: images.palazzo_abatellis },
            { name: "Palazzo Butera", image: images.palazzo_butera },
            { name: "Spasimo", image: images.spasimo },
            { name: "Chiesa di San Francesco D'Assisi", image: images.chiesa_san_francesco },
            { name: "Oratorio di San Lorenzo", image: images.oratorio_san_lorenzo },
            { name: "Piazza Magione", image: images.piazza_magione },
            { name: "Chiesa di San Cataldo", image: images.chiesa_san_cataldo },
            { name: "GAM - Galleria D'Arte Moderna", image: images.sicilian_gallery }
        ],
        loggiaAttractions: [
            { name: "Chiesa di San Domenico", image: images.chiesa_san_domenico },
            { name: "Piazza San Domenico", image: images.piazza_san_domenico },
            { name: "Palazzo Mazzarino", image: images.palazzo_mazzarino },
            { name: "La Cala", image: images.la_cala },
            { name: "Chiesa di Santa Maria La Nova", image: images.chiesa_santa_maria },
            { name: "Musée Salinas", image: images.museo_salinas },
            { name: "Palazzo Branciforte", image: images.palazzo_branciforte },
            { name: "Piazza Tredici Vittime", image: images.piazza_tredici_vittime }
        ],
        
        // Print QR code texts
        scanToExplore: "Scan to explore the",
        scanToExploreSuffix: "Quarter of Palermo",
        quarterSuffix: "Quarter - Sant'Agostino BnB",
        // Common
        contactMessage: {
            en: "For booking, please contact us via WhatsApp at +39 123 456 7890 or email at info@santangostino.com",
            it: "Per prenotare, contattateci tramite WhatsApp al +39 123 456 7890 o via email a info@santangostino.com",
            fr: "Pour réserver, veuillez nous contacter via WhatsApp au +39 123 456 7890 ou par email à info@santangostino.com",
            es: "Para reservar, contáctenos por WhatsApp al +39 123 456 7890 o por correo electrónico a info@santangostino.com"
        },
        backToHome: {
            en: "Back to Home",
            it: "Torna alla Home",
            fr: "Retour à l'Accueil",
            es: "Volver al Inicio"
        },
        seeMore: {
            en: "See more",
            it: "Vedi di più",
            fr: "Voir plus",
            es: "Ver más"
        },
        seeLess: {
            en: "See less",
            it: "Vedi meno",
            fr: "Voir moins",
            es: "Ver menos"
        },
        bookNow: {
            en: "Book Now",
            it: "Prenota Ora",
            fr: "Réserver",
            es: "Reservar"
        },
        getDirections: {
            en: "Get Directions",
            it: "Ottieni Indicazioni",
            fr: "Itinéraire",
            es: "Cómo Llegar"
        },
        seeHours: {
            en: "See hours",
            it: "Orari",
            fr: "Horaires",
            es: "Horarios"
        },
        seeDuration: {
            en: "See duration",
            it: "Durata",
            fr: "Durée",
            es: "Duración"
        }
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
        loggiaDesc: "Visita San Domenico, Palazzo Mazzarino e altro ancora",
        
        // Language selector
        language: "Lingua",
        
        // Restaurant and Experience pages
        restaurants: "Ristoranti",
        recommendedRestaurants: "Ristoranti Consigliati",
        lunchRestaurants: "Ristoranti per Pranzo",
        dinnerRestaurants: "Ristoranti per Cena",
        michelinRestaurants: "Ristoranti Stellati Michelin",
        referent: "Referente",
        experiences: "Esperienze B&B",
        localExperiences: "Esperienze Locali",
        experiencesIntro: "Scopri esperienze siciliane autentiche con i nostri partner locali",
        bookNow: "Prenota Ora",
        contactBnB: "Contatta l'host del B&B per prenotare questa esperienza.",
        
        // Restaurant data
        
        // Ristoranti Stellati Michelin data
        
        // Experience data
        experiencesData: [
            {
                name: "Historic Palermo Walking Tour",
                description: "A walking tour of Palermo's historic center to discover its millenary history, unique melting pot, and cultural layers. From Teatro Massimo, Capo Market, Cathedral, Norman Palace with Palatine Chapel, Quattro Canti, Piazza della Vergogna, to Piazza Bellini with Martorana and San Cataldo.",
                duration: "3 hours - Starts at 9:00 or 15:00",
                price: "2/3 pax: €100 per person; 4/5 pax: €50 per person; 6+ pax: €45 per person (includes headsets)",
                image: "images/attractions/placeholder.jpg",
                note: "Entrance fees to historical buildings or monuments are not included."
            },
            {
                name: "Street Food Aperitif Tour",
                description: "An itinerant aperitif through Palermo's historic center, tasting traditional street food (panelle, crocche, sfincione, pani ca meusa) and a glass of wine at Vucciria. Includes cultural and historical storytelling.",
                duration: "2 hours - Starts at 17:30",
                price: "4 pax: €60 per person; 5+ pax: €50 per person. Tastings included.",
                image: "images/attractions/placeholder.jpg",
                note: "Tastings included in price. Minimum 4 participants."
            },
            {
                name: "Kingdom of the Sun - Arab-Norman Itinerary",
                description: "Discover Palermo's UNESCO Arab-Norman heritage: Royal Palace with Palatine Chapel, Cathedral, San Giovanni degli Eremiti, San Cataldo, and Santa Maria dell'Ammiraglio. A journey through the syncretism of Arab, Norman, and Byzantine cultures.",
                duration: "3.5 hours - Morning only, depending on opening times",
                price: "2/3 pax: €100 per person; 4/5 pax: €50 per person; 6+ pax: €45 per person (includes headsets)",
                image: "images/attractions/placeholder.jpg",
                note: "Entrance fees to historical buildings or monuments are not included."
            },
            {
                name: "The Florios Dynasty - Walking Tour",
                description: "A historical journey through the life, business, and loves of the Florio family, from their origins in La Loggia to Teatro Massimo. Discover their impact on Palermo's Belle Époque, with stories of splendor, betrayals, and decline.",
                duration: "3 hours - Starts at 9/10 or 14/15",
                price: "2/3 pax: €100 per person; 4/5 pax: €50 per person; 6+ pax: €45 per person (includes headsets)",
                image: "images/attractions/placeholder.jpg",
                note: "Entrance fees to historical buildings or monuments are not included."
            },
            {
                name: "The Florios Dynasty - Belle Époque Tour (with Private Transport)",
                description: "Discover the Florio family's sites and history: Villino Florio all'Olivuzza, Villa Malfitano-Whitaker, Arenella house with Quattro Pizzi. The story of Palermo's Belle Époque and Donna Franca Florio, queen of Sicilian society.",
                duration: "4 hours - Sat afternoon & Sun morning only",
                price: "2/3 pax: €150 per person; 4/5 pax: €125 per person; 5-7 pax: €55 per person",
                image: "images/attractions/placeholder.jpg",
                note: "Entrance fees to historical buildings or monuments are not included."
            },
            {
                name: "Arab-Norman Cathedrals Tour (Train & Private Transport)",
                description: "Visit the four most interesting Norman cathedrals in Palermo and province: Palatine Chapel, La Martorana, Cefalù, and Monreale. Includes train ticket and transfer to Monreale.",
                duration: "4-5 hours",
                price: "2/3 pax: €140 per person; 4/5 pax: €120 per person; 6+ pax: €100 per person",
                image: "images/attractions/placeholder.jpg",
                note: "Entrance fees to historical buildings or monuments are not included."
            },
            {
                name: "Cooking Class with Our Chef",
                description: "Immerse yourself in Palermo's markets with our chef, select fresh ingredients, then learn to cook traditional Sicilian recipes at the chef's home, ending with a convivial lunch.",
                duration: "3-4 hours",
                price: "€130 per person",
                image: "images/attractions/placeholder.jpg",
                note: "Includes market visit, cooking class, and lunch."
            },
            {
                name: "Sailing Along the Scents of Sicily - Palermo Coast Boat Tour",
                description: "Set sail for an unforgettable sailing experience along Palermo's coast. Discover hidden coves, crystal-clear waters, and breathtaking views. Includes an aperitif; dinner on board available on request. Minimum 4 participants for group tours.",
                duration: "Half day (various options)",
                price: "Exclusive (2 pax): €250 per person; 2 pax (non-exclusive): €200 per person; 4 pax: €150 per person; 5-6 pax: €130 per person; 7-8 pax: €100 per person",
                image: "images/attractions/placeholder.jpg",
                note: "For groups, the boat departs with a minimum of 4 participants. Aperitif included; dinner on request."
            }
        ],
        
        // Quarter-specific attractions
        albergheriaAttractions: [
            { name: "Ballarò (marché)", image: images.ballaro_market },
            { name: "Chiesa del Carmine", image: images.chiesa_carmine },
            { name: "Casa Professa", image: images.casa_professa },
            { name: "Palazzo Conte Federico", image: images.palazzo_federico },
            { name: "San Giovanni degli Eremiti", image: images.san_giovanni_eremiti },
            { name: "Palazzo Reale", image: images.palazzo_reale },
            { name: "Cathédrale", image: images.cattedrale },
            { name: "Palazzo Asmundo", image: images.palazzo_asmundo },
            { name: "Palazzo Riso", image: images.palazzo_riso },
            { name: "San Giuseppe dei Teatini", image: images.san_giuseppe_teatini }
        ],
        capoAttractions: [
            { name: "Teatro Massimo", image: images.teatro_massimo },
            { name: "Chiesa dell'Immacolata Concezione", image: images.chiesa_immacolata },
            { name: "Mercato del Capo", image: images.capo_market },
            { name: "Porta Carini", image: images.porta_carini }
        ],
        kalsaAttractions: [
            { name: "Piazza Marina", image: images.piazza_marina },
            { name: "Palazzo Steri", image: images.palazzo_steri },
            { name: "Orto Botanico", image: images.orto_botanico },
            { name: "Porta Felice", image: images.porta_felice },
            { name: "Foro Italico", image: images.foro_italico },
            { name: "Castello a Mare", image: images.castello_mare },
            { name: "Chiesa della Catena", image: images.chiesa_catena },
            { name: "Palazzo Abatellis", image: images.palazzo_abatellis },
            { name: "Oratorio di San Lorenzo", image: images.oratorio_san_lorenzo },
            { name: "Chiesa di San Cataldo", image: images.chiesa_san_cataldo },
            { name: "Galleria Regionale della Sicilia", image: images.sicilian_gallery }
        ],
        loggiaAttractions: [
            { name: "Chiesa di San Domenico", image: images.chiesa_san_domenico },
            { name: "Piazza San Domenico", image: images.piazza_san_domenico },
            { name: "Palazzo Mazzarino", image: images.palazzo_mazzarino },
            { name: "La Cala", image: images.la_cala },
            { name: "Chiesa di Santa Maria La Nova", image: images.chiesa_santa_maria },
            { name: "Musée Salinas", image: images.museo_salinas }
        ],
        
        // Print QR code texts
        scanToExplore: "Scannez pour explorer le quartier",
        scanToExploreSuffix: "de Palermo",
        quarterSuffix: "Quartier - Sant'Agostino BnB",
        // Common
        contactMessage: {
            en: "For booking, please contact us via WhatsApp at +39 123 456 7890 or email at info@santangostino.com",
            it: "Per prenotare, contattateci tramite WhatsApp al +39 123 456 7890 o via email a info@santangostino.com",
            fr: "Pour réserver, veuillez nous contacter via WhatsApp au +39 123 456 7890 ou par email à info@santangostino.com",
            es: "Para reservar, contáctenos por WhatsApp al +39 123 456 7890 o por correo electrónico a info@santangostino.com"
        },
        backToHome: {
            en: "Back to Home",
            it: "Torna alla Home",
            fr: "Retour à l'Accueil",
            es: "Volver al Inicio"
        },
        seeMore: {
            en: "See more",
            it: "Vedi di più",
            fr: "Voir plus",
            es: "Ver más"
        },
        seeLess: {
            en: "See less",
            it: "Vedi meno",
            fr: "Voir moins",
            es: "Ver menos"
        },
        bookNow: {
            en: "Book Now",
            it: "Prenota Ora",
            fr: "Réserver",
            es: "Reservar"
        },
        getDirections: {
            en: "Get Directions",
            it: "Ottieni Indicazioni",
            fr: "Itinéraire",
            es: "Cómo Llegar"
        },
        seeHours: {
            en: "See hours",
            it: "Orari",
            fr: "Horaires",
            es: "Horarios"
        },
        seeDuration: {
            en: "See duration",
            it: "Durata",
            fr: "Durée",
            es: "Duración"
        }
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
        michelinRestaurants: "Restaurants Étoilés Michelin",
        referent: "Personne de Référence",
        experiences: "Expériences B&B",
        localExperiences: "Expériences Locales",
        experiencesIntro: "Découvrez d'authentiques expériences siciliennes avec nos partenaires locaux",
        bookNow: "Réserver Maintenant",
        contactBnB: "Veuillez contacter l'hôte du B&B pour réserver cette expérience.",
        
        // Restaurant data
        
        // Ristoranti Stellati Michelin data
        
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
                note: "Le degustazioni sono incluse nel prezzo."
            },
            {
                name: "Le Royaume du Soleil - Itinerario Árabe-Normanno",
                description: "Scopri i siti UNESCO du patrimonio Árabe-Normando de la UNESCO en Palermo, tra cui il Palazzo Reale con la Cappella Palatina, la Cattedrale, San Giovanni degli Eremiti, San Cataldo, e Santa Maria dell'Ammiraglio.",
                duration: "3,5 heures",
                price: "€45-€100 par personne",
                image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/24/6d/33/3f/dehors.jpg",
                note: "Gli ingressi a edifici storici o monumenti non sono inclusi nel prezzo."
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
            },
            {
                name: "Voile parmi les parfums de la Sicile - Excursion en voilier sur la côte de Palerme",
                description: "Embarquez pour une expérience inoubliable en voilier le long de la côte de Palerme. Découvrez des criques cachées, des eaux cristallines et des panoramas à couper le souffle. Apéritif inclus ; dîner à bord disponible sur demande. Minimum 4 participants pour les groupes.",
                duration: "Demi-journée (plusieurs options)",
                price: "Exclusif (2 pers.): 250€ par personne ; 2 pers. (non exclusif): 200€ par personne ; 4 pers.: 150€ par personne ; 5-6 pers.: 130€ par personne ; 7-8 pers.: 100€ par personne",
                image: "images/attractions/placeholder.jpg",
                note: "Pour les groupes, le bateau part avec un minimum de 4 participants. Apéritif inclus ; dîner sur demande."
            }
        ],
        
        // Ristoranti Stellati Michelin data
        
        // Quarter-specific attractions
        albergheriaAttractions: [
            { name: "Ballarò (marché)", image: images.ballaro_market },
            { name: "Chiesa del Carmine", image: images.chiesa_carmine },
            { name: "Casa Professa", image: images.casa_professa },
            { name: "Palazzo Conte Federico", image: images.palazzo_federico },
            { name: "San Giovanni degli Eremiti", image: images.san_giovanni_eremiti },
            { name: "Palazzo Reale", image: images.palazzo_reale },
            { name: "Cathédrale", image: images.cattedrale },
            { name: "Palazzo Asmundo", image: images.palazzo_asmundo },
            { name: "Palazzo Riso", image: images.palazzo_riso },
            { name: "San Giuseppe dei Teatini", image: images.san_giuseppe_teatini }
        ],
        capoAttractions: [
            { name: "Teatro Massimo", image: images.teatro_massimo },
            { name: "Chiesa dell'Immacolata Concezione", image: images.chiesa_immacolata },
            { name: "Marché du Capo", image: images.capo_market },
            { name: "Porta Carini", image: images.porta_carini }
        ],
        kalsaAttractions: [
            { name: "Piazza Marina", image: images.piazza_marina },
            { name: "Palazzo Steri", image: images.palazzo_steri },
            { name: "Jardin Botanique", image: images.orto_botanico },
            { name: "Porta Felice", image: images.porta_felice },
            { name: "Castello a Mare", image: images.castello_mare },
            { name: "Chiesa della Catena", image: images.chiesa_catena },
            { name: "Palazzo Abatellis", image: images.palazzo_abatellis },
            { name: "Palazzo Butera", image: images.palazzo_butera },
            { name: "Spasimo", image: images.spasimo },
            { name: "Église de San Francesco D'Assisi", image: images.chiesa_san_francesco },
            { name: "Oratoire de San Lorenzo", image: images.oratorio_san_lorenzo },
            { name: "Place Magione", image: images.piazza_magione },
            { name: "Chiesa di San Cataldo", image: images.chiesa_san_cataldo },
            { name: "GAM - Galerie d'Art Moderne", image: images.sicilian_gallery }
        ],
        loggiaAttractions: [
            { name: "Marché de la Vucciria", image: images.mercato_vucciria },
            { name: "Église de San Domenico", image: images.chiesa_san_domenico },
            { name: "Place San Domenico", image: images.piazza_san_domenico },
            { name: "Palazzo Mazzarino", image: images.palazzo_mazzarino },
            { name: "La Cala", image: images.la_cala },
            { name: "Église de Santa Maria La Nova", image: images.chiesa_santa_maria },
            { name: "Musée Salinas", image: images.museo_salinas },
            { name: "Palazzo Branciforte", image: images.palazzo_branciforte },
            { name: "Place Tredici Vittime", image: images.piazza_tredici_vittime }
        ],
        
        // Print QR code texts
        scanToExplore: "Scannez pour explorer le quartier",
        scanToExploreSuffix: "de Palermo",
        quarterSuffix: "Quartier - Sant'Agostino BnB",
        // Common
        contactMessage: {
            en: "For booking, please contact us via WhatsApp at +39 123 456 7890 or email at info@santangostino.com",
            it: "Per prenotare, contattateci tramite WhatsApp al +39 123 456 7890 o via email a info@santangostino.com",
            fr: "Pour réserver, veuillez nous contacter via WhatsApp au +39 123 456 7890 ou par email à info@santangostino.com",
            es: "Para reservar, contáctenos por WhatsApp al +39 123 456 7890 o por correo electrónico a info@santangostino.com"
        },
        backToHome: {
            en: "Back to Home",
            it: "Torna alla Home",
            fr: "Retour à l'Accueil",
            es: "Volver al Inicio"
        },
        seeMore: {
            en: "See more",
            it: "Vedi di più",
            fr: "Voir plus",
            es: "Ver más"
        },
        seeLess: {
            en: "See less",
            it: "Vedi meno",
            fr: "Voir moins",
            es: "Ver menos"
        },
        bookNow: {
            en: "Book Now",
            it: "Prenota Ora",
            fr: "Réserver",
            es: "Reservar"
        },
        getDirections: {
            en: "Get Directions",
            it: "Ottieni Indicazioni",
            fr: "Itinéraire",
            es: "Cómo Llegar"
        },
        seeHours: {
            en: "See hours",
            it: "Orari",
            fr: "Horaires",
            es: "Horarios"
        },
        seeDuration: {
            en: "See duration",
            it: "Durata",
            fr: "Durée",
            es: "Duración"
        }
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
        michelinRestaurants: "Restaurantes con Estrella Michelin",
        referent: "Persona de Referencia",
        experiences: "Experiencias B&B",
        localExperiences: "Experiencias Locales",
        experiencesIntro: "Descubre auténticas experiencias sicilianas con nuestros socios locales",
        bookNow: "Reservar Ahora",
        contactBnB: "Por favor, contacte con el anfitrión del B&B para reservar esta experiencia.",
        
        // Restaurant data
        
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
                note: "Gli ingressi a edifici storici o monumenti non sono inclusi nel prezzo."
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
            },
            {
                name: "Navegando entre los aromas de Sicilia - Tour en velero por la costa de Palermo",
                description: "Zarpa con nosotros para una experiencia inolvidable en velero por la hermosa costa de Palermo. Descubre calas escondidas, aguas cristalinas y vistas impresionantes. Incluye aperitivo; cena a bordo disponible bajo petición. Mínimo 4 participantes para tours en grupo.",
                duration: "Medio día (varias opciones)",
                price: "Exclusivo (2 pers.): 250€ por persona; 2 pers. (no exclusivo): 200€ por persona; 4 pers.: 150€ por persona; 5-6 pers.: 130€ por persona; 7-8 pers.: 100€ por persona",
                image: "images/attractions/placeholder.jpg",
                note: "Para grupos, el barco sale con un mínimo de 4 participantes. Aperitivo incluido; cena bajo petición."
            }
        ],
        
        // Quarter-specific attractions
        albergheriaAttractions: [
            { name: "Ballarò (mercado)", image: images.ballaro_market },
            { name: "Chiesa del Carmine", image: images.chiesa_carmine },
            { name: "Casa Professa", image: images.casa_professa },
            { name: "Palazzo Conte Federico", image: images.palazzo_federico },
            { name: "San Giovanni degli Eremiti", image: images.san_giovanni_eremiti },
            { name: "Palazzo Reale", image: images.palazzo_reale },
            { name: "Catedral", image: images.cattedrale },
            { name: "Palazzo Asmundo", image: images.palazzo_asmundo },
            { name: "Palazzo Riso", image: images.palazzo_riso },
            { name: "San Giuseppe dei Teatini", image: images.san_giuseppe_teatini }
        ],
        capoAttractions: [
            { name: "Teatro Massimo", image: images.teatro_massimo },
            { name: "Chiesa dell'Immacolata Concezione", image: images.chiesa_immacolata },
            { name: "Mercado del Capo", image: images.capo_market },
            { name: "Porta Carini", image: images.porta_carini }
        ],
        kalsaAttractions: [
            { name: "Piazza Marina", image: images.piazza_marina },
            { name: "Palazzo Steri", image: images.palazzo_steri },
            { name: "Jardín Botánico", image: images.orto_botanico },
            { name: "Porta Felice", image: images.porta_felice },
            { name: "Castello a Mare", image: images.castello_mare },
            { name: "Chiesa della Catena", image: images.chiesa_catena },
            { name: "Palazzo Abatellis", image: images.palazzo_abatellis },
            { name: "Palazzo Butera", image: images.palazzo_butera },
            { name: "Spasimo", image: images.spasimo },
            { name: "Iglesia de San Francesco D'Assisi", image: images.chiesa_san_francesco },
            { name: "Oratorio de San Lorenzo", image: images.oratorio_san_lorenzo },
            { name: "Plaza Magione", image: images.piazza_magione },
            { name: "Chiesa di San Cataldo", image: images.chiesa_san_cataldo },
            { name: "GAM - Galería de Arte Moderno", image: images.sicilian_gallery }
        ],
        loggiaAttractions: [
            { name: "Mercado de la Vucciria", image: images.mercato_vucciria },
            { name: "Iglesia de San Domenico", image: images.chiesa_san_domenico },
            { name: "Plaza San Domenico", image: images.piazza_san_domenico },
            { name: "Palazzo Mazzarino", image: images.palazzo_mazzarino },
            { name: "La Cala", image: images.la_cala },
            { name: "Iglesia de Santa Maria La Nova", image: images.chiesa_santa_maria },
            { name: "Musée Salinas", image: images.museo_salinas },
            { name: "Palazzo Branciforte", image: images.palazzo_branciforte },
            { name: "Plaza Tredici Vittime", image: images.piazza_tredici_vittime }
        ],
        
        // Print QR code texts
        scanToExplore: "Escanea para explorar el barrio",
        scanToExploreSuffix: "de Palermo",
        quarterSuffix: "Barrio - Sant'Agostino BnB",
        // Common
        contactMessage: {
            en: "For booking, please contact us via WhatsApp at +39 123 456 7890 or email at info@santangostino.com",
            it: "Per prenotare, contattateci tramite WhatsApp al +39 123 456 7890 o via email a info@santangostino.com",
            fr: "Pour réserver, veuillez nous contacter via WhatsApp au +39 123 456 7890 ou par email à info@santangostino.com",
            es: "Para reservar, contáctenos por WhatsApp al +39 123 456 7890 o por correo electrónico a info@santangostino.com"
        },
        backToHome: {
            en: "Back to Home",
            it: "Torna alla Home",
            fr: "Retour à l'Accueil",
            es: "Volver al Inicio"
        },
        seeMore: {
            en: "See more",
            it: "Vedi di più",
            fr: "Voir plus",
            es: "Ver más"
        },
        seeLess: {
            en: "See less",
            it: "Vedi meno",
            fr: "Voir moins",
            es: "Ver menos"
        },
        bookNow: {
            en: "Book Now",
            it: "Prenota Ora",
            fr: "Réserver",
            es: "Reservar"
        },
        getDirections: {
            en: "Get Directions",
            it: "Ottieni Indicazioni",
            fr: "Itinéraire",
            es: "Cómo Llegar"
        },
        seeHours: {
            en: "See hours",
            it: "Orari",
            fr: "Horaires",
            es: "Horarios"
        },
        seeDuration: {
            en: "See duration",
            it: "Durata",
            fr: "Durée",
            es: "Duración"
        }
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

/**
 * ============================================================================
 * RESTAURANT DATA FUNCTIONS
 * ============================================================================
 * 
 * These functions work with the centralized restaurant database in
 * js/restaurants-data.js. There is NO fallback to legacy data.
 */

/**
 * Get restaurant data for a specific language from the centralized database
 * 
 * @param {string} lang - Language code ('en', 'it', 'fr', 'es')
 * @param {string} type - Type of restaurants ('regular' or 'michelin')
 * @returns {Array} Array of restaurant objects for the specified language
 * 
 * IMPORTANT: This function requires js/restaurants-data.js to be loaded.
 * It does NOT fall back to any legacy data structure.
 * 
 * HOW IT WORKS:
 * 1. Accesses the centralized restaurantsDatabase or michelinRestaurantsDatabase
 * 2. For each restaurant, merges the translation for the requested language
 *    with the language-agnostic fields
 * 3. Returns an array ready for rendering
 * 
 * USAGE:
 *   const italianRestaurants = getRestaurantData('it', 'regular');
 *   const michelinRestaurants = getRestaurantData('en', 'michelin');
 */
function getRestaurantData(lang = 'en', type = 'regular') {
    const database = type === 'michelin' ? michelinRestaurantsDatabase : restaurantsDatabase;
    
    if (typeof database === 'undefined') {
        console.error('Restaurant database not loaded! Make sure js/restaurants-data.js is included before translations.js');
        return [];
    }
    
    return database.map(restaurant => {
        // Get translation for this language, fall back to English if missing
        const translation = restaurant.translations[lang] || restaurant.translations.en;
        
        if (!translation) {
            console.warn(`Missing translation for restaurant ${restaurant.id} in language ${lang}`);
            return null;
        }
        
        // Merge translation with language-agnostic fields
        // Exclude the 'translations' and 'id' fields from the result
        const { translations, id, ...commonFields } = restaurant;
        
        return {
            ...translation,      // name, description
            ...commonFields      // priceRange, type, address, etc.
        };
    }).filter(r => r !== null);
}
document.addEventListener('DOMContentLoaded', initializeLanguage);
