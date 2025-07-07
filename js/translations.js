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
                name: "Osteria Mangia e Bevi",
                description: "A traditional Sicilian osteria that embodies authentic local cuisine. 'La cucina che parla siciliano' (The cuisine that speaks Sicilian) - their motto reflects their commitment to serving traditional Sicilian dishes prepared with local ingredients and time-honored recipes. The restaurant offers an intimate dining experience where guests can enjoy the true flavors of Sicily in a warm and welcoming atmosphere.",
                priceRange: "€20-35 per person",
                cuisine: "Traditional Sicilian, Local Specialties",
                image: "images/attractions/placeholder.jpg",
                referent: "Contact B&B",
                address: "Palermo, Sicily",
                website: "osteriamangiaebevi.it",
                type: "Dinner"
            },
            {
                name: "Osteria Mercede",
                description: "A seafood establishment that offers fine dining with a focus on fish and seafood dishes. The ambiance is cozy and intimate, with attentive service and friendly staff. The interior design is reminiscent of a traditional fishermen's boat, adding to the authenticity. The menu features local specialties such as linguine with seafood, grilled blue fish, shrimp cocktail, and mixed raw fish appetizers. Their daily changing specials board ensures fresh options, and they offer outdoor seating for al fresco dining. Located near Teatro Massimo, it's perfect for a pre-theater dinner or a memorable evening out.",
                priceRange: "€25-40 per person",
                cuisine: "Seafood, Sicilian",
                image: "images/attractions/placeholder.jpg",
                instagram: "@osteria_mercede_palermo",
                address: "Via Sammartino, n 1, Palermo, Sicily",
                type: "Dinner"
            },
            {
                name: "Corona Trattoria",
                description: "A family-run establishment serving some of the best Sicilian seafood cuisine in Palermo. The elegant yet informal ambiance and impeccable service make it a fine dining spot for locals and tourists alike. The owner takes pride in using fresh farm foods directly from producers to create traditional dishes with a modern twist. Recommended dishes include Caponata di Melanzane, Spaghetti ai Gamberetti, and Involtino di Spatola. They offer an extensive list of exclusively Sicilian wines, carefully selected to represent various terroirs. Located in a quiet street in the new part of the city, reservations are highly recommended.",
                priceRange: "€9-23 per person (€40-50 for full course)",
                cuisine: "Italian, Seafood, Vegetarian Options",
                image: "images/attractions/placeholder.jpg",
                address: "Via Guglielmo Marconi, 9, Palermo, Sicily",
                phone: "+39 091 335139",
                website: "coronatrattoria.com",
                instagram: "@coronatrattoria",
                openHours: "Tue-Sat: 12:30PM-3PM, 8PM-11PM (Closed Sun-Mon)",
                type: "Dinner"
            },
            {
                name: "Sardina PastaBar",
                description: "A charming restaurant specializing in Italian and Mediterranean cuisines with a focus on pasta dishes. Known for their excellent spaghetti carbonara, sardine and prawn dishes. Delicious desserts include gelato, tiramisu, and parfait. The bar offers fine wine, cordial, and white wine selections, along with great coffee. The cozy atmosphere makes visitors feel relaxed, and the staff is known for their accommodating and enjoyable service. With a Google rating of 4.6 stars, this affordable spot is popular among locals and tourists alike. Offers outdoor seating and accepts credit cards.",
                priceRange: "€15-30 per person",
                cuisine: "Italian, Mediterranean, Gluten-free",
                image: "images/attractions/placeholder.jpg",
                referent: "Rita",
                address: "Via dei Cassari, 41/43, Palermo, Sicily",
                phone: "+39 389 189 3380",
                website: "sardinapastabar.plateform.app",
                instagram: "@sardinapastabar",
                openHours: "Tue-Thu: 7PM-11PM, Fri-Sat: 12:30PM-2:30PM & 7PM-11PM, Sun: 1PM-4PM",
                type: "Dinner"
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
            },
            {
                name: "Quid gusto siciliano",
                description: "A popular restaurant near Palazzo Steri offering authentic Italian cuisine. Known for perfectly cooked spaghetti vongole, Neapolitan pizza and swordfish. Desserts include semifreddo, tiramisu and gelato. The restaurant offers delicious margaritas, house wine, and cordial, along with great coffee and lemonade. With a 4.3 Google rating, the restaurant is praised for its competent staff, terrific service, affordable prices, and pretty ambiance.",
                priceRange: "€13-41 per person",
                cuisine: "Pizza, Italian, Vegetarian Options",
                image: "images/attractions/placeholder.jpg",
                referent: "Serena",
                address: "Piazza Marina, 52, Palermo, Sicily",
                phone: "+39 091 729 6996",
                website: "facebook.com",
                instagram: "@quidgustosiciliano",
                openHours: "Daily 12PM-3PM, 7PM-11PM",
                type: "Dinner"
            },
            {
                name: "Scjabaca",
                description: "Located near Fontana del Genio, this restaurant offers Italian and Mediterranean cuisine with a 4.7 Google rating. Specialties include grilled octopus, ravioli, and grilled tuna, along with delightful desserts like parfait, panna cotta, and crumble. The restaurant is known for its diverse wine list, delicious coffee, nice staff, fast service, and reasonable prices. The calm atmosphere and beautiful decor make for an enjoyable dining experience.",
                priceRange: "€20-61 per person",
                cuisine: "Mediterranean, Italian, Vegetarian Options",
                image: "images/attractions/placeholder.jpg",
                referent: "Valeria",
                address: "Vicolo S. Carlo, 42, Palermo, Sicily",
                phone: "+39 091 507 6739",
                website: "ristorantescjabaca.it",
                instagram: "@scjabaca",
                openHours: "Mon-Tue, Thu-Fri: 7PM-11PM; Sat-Sun: 12PM-3PM, 7PM-11PM; Wed: Closed",
                type: "Dinner"
            },
            {
                name: "Osteria dei Vespri",
                description: "A Michelin-selected restaurant near Fontana del Genio, offering refined Italian cuisine with a focus on seafood. Notable dishes include antipasto, pork belly, and seared tuna, with delicious fruit cakes, cookies, and parfait for dessert. The restaurant serves good chardonnay, cordial, and fino sherry, along with exquisite ristretto and lemonade. Appreciated for its attractive staff, spectacular service, and democratic prices, this restaurant features cute decor and a charming atmosphere. It has received 2 black knife and fork symbols from Michelin, indicating optimal comfort.",
                priceRange: "€35-150 per person",
                cuisine: "Italian, Seafood, Wine Bars",
                image: "images/attractions/placeholder.jpg",
                referent: "Andrea",
                address: "Piazza Croce dei Vespri, 6, Palermo, Sicily",
                phone: "+39 091 617 1631",
                website: "osteriadeivespri.it",
                instagram: "@osteria_dei_vespri",
                openHours: "Mon-Sat: 12:30PM-2:45PM, 7:30PM-10:45PM; Sun: Closed",
                type: "Dinner"
            },
            {
                name: "Le Cattive",
                description: "Located near Porta Felice, this restaurant offers Italian and Mediterranean cuisines. Specialties include monkfish, aglio, and risotto, with tasty biscuits, cannoli, and tiramisu for dessert. The restaurant is known for its good wine, negroni, cordial, and great coffee. With a Google rating of 4.5, visitors praise the great view, accommodating staff, professional service, democratic prices, peaceful atmosphere, and fine decor.",
                priceRange: "€40-70 per person",
                cuisine: "Italian, Mediterranean, Seafood",
                image: "images/attractions/placeholder.jpg",
                referent: "Andrea",
                address: "Piazza Santo Spirito, 1, Palermo, Sicily",
                phone: "+39 091 619 5635",
                website: "lecattivepalazzobutera.it",
                instagram: "@lecattivepalazzobutera",
                openHours: "Tue-Sun: 10AM-7PM; Mon: Closed",
                type: "Lunch"
            },
            {
                name: "U Babbio",
                description: "Church of the Holy Cross can be on your route by default, the clients' recommendation is to visit this restaurant. U Babbio is famous for serving Italian and Mediterranean cuisines. Many people visit this place to taste perfectly cooked busiate, sardine and antipasto. Delicious prosecco gets positive reviews. This spot has good coffee among its drinks. The convenient location of this restaurant makes it easy to reach even in rush hours. The staff is said to be knowledgeable here. The professional service displays a high level of quality. With a Google rating of 4.5, this restaurant offers fair prices for quality meals in a lovely atmosphere.",
                priceRange: "€16-36 per person",
                cuisine: "Italian, Mediterranean, Healthy food",
                image: "images/attractions/placeholder.jpg",
                referent: "Fiamma",
                address: "Via Principe Scordia, 104, Palermo, Sicily, Italy",
                phone: "+39 091 910 1627",
                instagram: "@ubabbio",
                openHours: "Sun: 9AM-5PM; Mon, Wed-Fri: 6:30PM-11PM; Sat: 12PM-11PM; Tue: Closed",
                type: "Dinner"
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
            { name: "Musée Salinas", image: "images/attractions/museo_salinas.jpg" },
            { name: "Porta Nuova", image: "images/attractions/porta_nuova.jpg" }
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
                name: "Osteria Mangia e Bevi",
                description: "Un'osteria siciliana tradizionale che incarna la cucina locale autentica. 'La cucina che parla siciliano' - il loro motto riflette l'impegno a servire piatti siciliani tradizionali preparati con ingredienti locali e ricette tramandate nel tempo. Il ristorante offre un'esperienza culinaria intima dove gli ospiti possono gustare i veri sapori della Sicilia in un'atmosfera calda e accogliente.",
                priceRange: "€20-35 a persona",
                cuisine: "Siciliana Tradizionale, Specialità Locali",
                image: "images/attractions/placeholder.jpg",
                referent: "Contatta B&B",
                address: "Palermo, Sicilia",
                website: "osteriamangiaebevi.it",
                type: "Cena"
            },
            {
                name: "Osteria Mercede",
                description: "Un'istituzione di cucina tipica siciliana che offre una esperienza culinaria autentica con i suoi piatti tipici, come la linguine con i frutti di mare, il pesce grigliato, il cocktail di gamberi e gli antipasti crudi misti. Il menu cambia quotidianamente per offrire opzioni fresche, e offrono un'ampia terrazza all'aperto per un pranzo al fresco. Situato vicino al Teatro Massimo, è ideale per un pranzo prima del teatro o per una serata memorabile.",
                priceRange: "€25-40 a persona",
                cuisine: "Siciliana, Pesce",
                image: "images/attractions/placeholder.jpg",
                instagram: "@osteria_mercede_palermo",
                address: "Via Sammartino, n 1, Palermo, Sicily",
                type: "Cena"
            },
            {
                name: "Corona Trattoria",
                description: "Un'istituzione familiare che offre alcuni dei migliori piatti di cucina siciliana in Palermo. L'atmosfera elegante ma informale e il servizio attento rendono questo ristorante un punto di incontro ideale per i locali e i turisti. Il proprietario è orgoglioso di utilizzare alimenti freschi direttamente dai produttori per creare piatti tradizionali con un tocco moderno. Les plats recommandés incluent Caponata di Melanzane, Spaghetti ai Gamberetti et Involtino di Spatola. Ils proposent une grande liste de vins siciliens exclusifs, sélectionnés avec soin pour représenter divers terroirs. Situé dans une petite rue dans la nouvelle partie de la ville, les réservations sont fortement recommandées.",
                priceRange: "€9-23 a persona (€40-50 pour un repas complet)",
                cuisine: "Italienne, Poisson, Options Végétariennes",
                image: "images/attractions/placeholder.jpg",
                address: "Via Guglielmo Marconi, 9, Palermo, Sicily",
                phone: "+39 091 335139",
                website: "coronatrattoria.com",
                instagram: "@coronatrattoria",
                openHours: "Tue-Sat: 12:30PM-3PM, 8PM-11PM (Closed Sun-Mon)",
                type: "Cena"
            },
            {
                name: "Sardina PastaBar",
                description: "Un'osteria tipica siciliana qui se spécialise dans la cuisine italienne et méditerranéenne avec un focus sur les pâtes. Notés pour leurs excellents spaghetti carbonara, les pâtes de sardine et de crevettes. Les desserts incluent gelato, tiramisù e parfait. La barre offre vins de haute qualité, cordial et sélections de vins blancs, ainsi que de grandes tasses de café. L'atmosphère accueillante rend les visiteurs plus tranquilles, et l'équipe est connue pour son service accueillant et divertissant. Avec une note Google de 4,6 étoiles, ce point économique est populaire parmi les locaux et les touristes. Ils offrent une grande terrasse en plein air et acceptent les cartes de crédit.",
                priceRange: "€15-30 a persona",
                cuisine: "Italienne, Méditerranéenne, Sans Gluten",
                image: "images/attractions/placeholder.jpg",
                referent: "Rita",
                address: "Via dei Cassari, 41/43, Palermo, Sicily",
                phone: "+39 389 189 3380",
                website: "sardinapastabar.plateform.app",
                instagram: "@sardinapastabar",
                openHours: "Tue-Thu: 7PM-11PM, Fri-Sat: 12:30PM-2:30PM & 7PM-11PM, Sun: 1PM-4PM",
                type: "Cena"
            },
            {
                name: "Trattoria Bersagliere",
                description: "Storica trattoria nel quartiere Albergheria, célèbre pour ses pâtes avec 'glassa' et son atmosphère chaleureuse et familiale.",
                priceRange: "€10-20 a persona",
                cuisine: "Sicilienne Traditionnelle",
                image: "images/attractions/placeholder.jpg",
                referent: "Lollo",
                address: "Via S. Nicolò All'Albergheria, 38, 90134 Palermo PA",
                type: "Pranzo"
            },
            {
                name: "Dadalia Osteria",
                description: "Tipica osteria siciliana située dans le marché historique de Vucciria. Offre des plats végétariens et dispose d'une terrasse extérieure.",
                priceRange: "€10-20 a persona",
                cuisine: "Sicilienne, Options Végétariennes",
                image: "images/attractions/placeholder.jpg",
                referent: "Pippo o Giovanni",
                address: "Via Maccherronai, 20, 90133 Palermo PA",
                type: "Pranzo"
            },
            {
                name: "L'Acerba Osteria Dinamica",
                description: "Un'osteria dinamica che unisce elementi di galleria d'arte, cocktail bar et restaurante, avec une cuisine créative utilisant des ingrédients locaux.",
                description: "Une osteria dynamique qui combine des éléments de galería de arte, cóctel bar et restaurante, avec une cuisine créative utilisant des ingrédients locaux.",
                priceRange: "€20-40 a persona",
                cuisine: "Sicilienne Créative",
                image: "images/attractions/placeholder.jpg",
                referent: "Gabriele",
                address: "Vicolo Maestro Cristofaro, 10, 90134 Palermo PA",
                type: "Cena"
            },
            {
                name: "Le Angeliche",
                description: "Ristorante romantico con un patio élégant, specialisé dans les fruits de mer, les pâtes et les aperitifs siciliens, avec des options véganes disponibles.",
                priceRange: "€30-40 a persona",
                cuisine: "Pesce, Opzioni Vegane",
                image: "images/attractions/placeholder.jpg",
                referent: "Floriana ou Chiara",
                address: "Vicolo Abbadia, 10, 90134 Palermo PA",
                type: "Cena"
            },
            {
                name: "Trattoria Supra i Mura",
                description: "Situé nel cuore di Palermo, offre une variété de plats de fruits de mer et de cuisine sicilienne traditionnelle dans une atmosphère accueillante.",
                priceRange: "€20-30 a persona",
                cuisine: "Pesce, Siciliana Tradizionale",
                image: "images/attractions/placeholder.jpg",
                referent: "Pietro",
                address: "Piazza Porta Carini, 5, 90134 Palermo PA",
                type: "Cena"
            },
            {
                name: "Enoteca Butticè",
                description: "Ristorante et bar à vin avec plus de 700 étiquettes de vin, che offre cucina palermitana et excelentes cócteles.",
                priceRange: "€20-40 a persona",
                cuisine: "Sicilienne, Bar à Vin",
                image: "images/attractions/placeholder.jpg",
                referent: "Giuseppe",
                address: "Piazza S. Francesco di Paola, 12, 90138 Palermo PA",
                type: "Cena"
            },
            {
                name: "Ferramenta",
                description: "Ristorante au cœur du centre historique de Palermo, avec des places en terrasse et des options véganes, idéal pour une atmosphère jeune et accueillante.",
                priceRange: "€20-30 a persona",
                cuisine: "Méditerranéenne, Opzions Véganes",
                image: "images/attractions/placeholder.jpg",
                referent: "Luca ou Marcello",
                address: "Piazza Giovanni Meli, 8, 90133 Palermo PA",
                type: "Cena"
            },
            {
                name: "Forno Santa Maria",
                description: "Pizzería con un enfoque artesanal en la panadería y la mixología, située nel cuore del centro storico.",
                priceRange: "€20-30 a persona",
                cuisine: "Pizza, Artisanal",
                image: "images/attractions/placeholder.jpg",
                referent: "Luca o Marcello",
                address: "Via Giovanni Meli, 35, 90133 Palermo PA",
                type: "Cena"
            },
            {
                name: "Quid gusto siciliano",
                description: "Un popolare ristorante vicino a Palazzo Steri che offre autentica cucina italiana. Noto per i suoi spaghetti alle vongole, pizza napoletana e pesce spada perfettamente cucinati. I dessert includono semifreddo, tiramisù e gelato. Il ristorante offre deliziosi margarita, vino della casa e cordiale, insieme a ottimo caffè e limonata. Con un punteggio di 4.3 su Google, il ristorante è elogiato per il suo personale competente, servizio eccellente, prezzi accessibili e un'atmosfera gradevole.",
                priceRange: "€13-41 a persona",
                cuisine: "Pizza, Italiana, Opzioni Vegetariane",
                image: "images/attractions/placeholder.jpg",
                referent: "Serena",
                address: "Piazza Marina, 52, Palermo, Sicilia",
                phone: "+39 091 729 6996",
                website: "facebook.com",
                instagram: "@quidgustosiciliano",
                openHours: "Tutti i giorni 12:00-15:00, 19:00-23:00",
                type: "Cena"
            },
            {
                name: "Scjabaca",
                description: "Situato vicino alla Fontana del Genio, questo ristorante offre cucina italiana e mediterranea con un punteggio di 4.7 su Google. Le specialità includono polpo alla griglia, ravioli e tonno alla griglia, insieme a deliziosi dessert come parfait, panna cotta e crumble. Il ristorante è noto per la sua diversificata carta dei vini, ottimo caffè, personale gentile, servizio veloce e prezzi ragionevoli. L'atmosfera tranquilla e il bel arredamento rendono l'esperienza culinaria piacevole.",
                priceRange: "€20-61 a persona",
                cuisine: "Mediterranea, Italiana, Opzioni Vegetariane",
                image: "images/attractions/placeholder.jpg",
                referent: "Valeria",
                address: "Vicolo S. Carlo, 42, Palermo, Sicilia",
                phone: "+39 091 507 6739",
                website: "ristorantescjabaca.it",
                instagram: "@scjabaca",
                openHours: "Lun-Mar, Gio-Ven: 19:00-23:00; Sab-Dom: 12:00-15:00, 19:00-23:00; Mer: Chiuso",
                type: "Cena"
            },
            {
                name: "Osteria dei Vespri",
                description: "Un ristorante selezionato dalla Guida Michelin vicino alla Fontana del Genio, che offre raffinata cucina italiana con un focus sui frutti di mare. I piatti notevoli includono antipasto, pancia di maiale e tonno scottato, con deliziose torte alla frutta, biscotti e parfait per dessert. Il ristorante serve buon chardonnay, cordiale e fino, insieme a squisito ristretto e limonata. Apprezzato per il personale attraente, servizio spettacolare e prezzi democratici, questo ristorante presenta interni graziosi e un'atmosfera affascinante. Ha ricevuto 2 simboli di coltello e forchetta neri da Michelin, indicando un comfort ottimale.",
                priceRange: "€35-150 a persona",
                cuisine: "Italiana, Frutti di Mare, Bar di Vini",
                image: "images/attractions/placeholder.jpg",
                referent: "Andrea",
                address: "Piazza Croce dei Vespri, 6, Palermo, Sicilia",
                phone: "+39 091 617 1631",
                website: "osteriadeivespri.it",
                instagram: "@osteria_dei_vespri",
                openHours: "Lun-Sab: 12:30-14:45, 19:30-22:45; Dom: Chiuso",
                type: "Cena"
            },
            {
                name: "Le Cattive",
                description: "Situato vicino a Porta Felice, questo ristorante offre cucine italiana e mediterranea. Le specialità includono rana pescatrice, aglio e risotto, con deliziosi biscotti, cannoli e tiramisù per dessert. Il ristorante è noto per il suo buon vino, negroni, cordiale e ottimo caffè. Con una valutazione di 4.5 su Google, i visitatori elogiano la splendida vista, il personale disponibile, il servizio professionale, i prezzi democratici, l'atmosfera tranquilla e l'arredamento raffinato.",
                priceRange: "€40-70 a persona",
                cuisine: "Italiana, Mediterranea, Frutti di Mare",
                image: "images/attractions/placeholder.jpg",
                referent: "Andrea",
                address: "Piazza Santo Spirito, 1, Palermo, Sicilia",
                phone: "+39 091 619 5635",
                website: "lecattivepalazzobutera.it",
                instagram: "@lecattivepalazzobutera",
                openHours: "Mar-Dom: 10:00-19:00; Lun: Chiuso",
                type: "Pranzo"
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
                description: "Scopri i siti UNESCO del patrimonio arabo-normanno di Palermo, tra cui il Palazzo Reale con la Cappella Palatina, la Cattedrale, San Giovanni degli Eremiti, San Cataldo, e Santa Maria dell'Ammiraglio.",
                duration: "3.5 ore",
                price: "€45-€100 a persona",
                image: "images/attractions/placeholder.jpg",
                note: "Gli ingressi a edifici storici o monumenti non sono inclusi nel prezzo."
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
        quarterSuffix: "Quartiere - Sant'Agostino BnB",
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
                name: "Osteria Mangia e Bevi",
                description: "Une osteria sicilienne traditionnelle qui incarne la cuisine locale authentique. 'La cucina che parla siciliano' (La cuisine qui parle sicilien) - leur devise reflète leur engagement à servir des plats siciliens traditionnels préparés avec des ingrédients locaux et des recettes transmises au fil du temps. Le restaurant offre une expérience culinaire intime où les invités peuvent savourer les vraies saveurs de la Sicile dans une atmosphère chaleureuse et accueillante.",
                priceRange: "€20-35 par personne",
                cuisine: "Sicilienne Traditionnelle, Spécialités Locales",
                image: "images/attractions/placeholder.jpg",
                referent: "Contactez B&B",
                address: "Palerme, Sicile",
                website: "osteriamangiaebevi.it",
                type: "Dîner"
            },
            {
                name: "Osteria Mercede",
                description: "Une établissement de cuisine typique sicilienne qui offre une expérience culinaria autentique avec ses plats typiques, tels que la linguine aux fruits de mer, le poisson grillé, le cocktail de crevettes et les antipasti crudos. Le menu change quotidiennement pour offrir des options fraîches, et ils offrent une grande terrasse pour un déjeuner en plein air. Situé près du Teatro Massimo, c'est parfait pour un déjeuner avant le théâtre ou pour une soirée mémorable.",
                priceRange: "€25-40 par personne",
                cuisine: "Sicilienne, Poisson",
                image: "images/attractions/placeholder.jpg",
                instagram: "@osteria_mercede_palermo",
                address: "Via Sammartino, n 1, Palermo, Sicily",
                type: "Cena"
            },
            {
                name: "Corona Trattoria",
                description: "Une établissement familiale qui sert certains des meilleurs plats de cuisine siciliana de Palermo. L'ambiance élégante mais informelle et le service attentif rendent ce restaurant un point d'incontre idéal pour les locaux et les touristes. Le propriétaire est fier d'utiliser des aliments frais directement des producteurs pour créer des plats traditionnels avec une touche moderne. Les plats recommandés incluent Caponata di Melanzane, Spaghetti ai Gamberetti et Involtino di Spatola. Ils proposent une grande liste de vins siciliens exclusifs, sélectionnés avec soin pour représenter divers terroirs. Situé dans une petite rue dans la nouvelle partie de la ville, les réservations sont fortement recommandées.",
                priceRange: "€9-23 par personne (€40-50 pour un repas complet)",
                cuisine: "Italienne, Poisson, Options Végétariennes",
                image: "images/attractions/placeholder.jpg",
                address: "Via Guglielmo Marconi, 9, Palermo, Sicily",
                phone: "+39 091 335139",
                website: "coronatrattoria.com",
                instagram: "@coronatrattoria",
                openHours: "Tue-Sat: 12:30PM-3PM, 8PM-11PM (Closed Sun-Mon)",
                type: "Dîner"
            },
            {
                name: "Sardina PastaBar",
                description: "Une osteria tipica siciliana qui se spécialise dans la cuisine italienne et méditerranéenne avec un focus sur les pâtes. Notés pour leurs excellents spaghetti carbonara, les pâtes de sardine et de crevettes. Les desserts incluent gelato, tiramisu et parfait. La barre offre vins de haute qualité, cordial et sélections de vins blancs, ainsi que de grandes tasses de café. L'atmosphère accueillante rend les visiteurs plus tranquilles, et l'équipe est connue pour son service accueillant et divertissant. Avec une note Google de 4,6 étoiles, ce point économique est populaire parmi les locaux et les touristes. Ils offrent une grande terrasse en plein air et acceptent les cartes de crédit.",
                priceRange: "€15-30 a persona",
                cuisine: "Italienne, Méditerranéenne, Sans Gluten",
                image: "images/attractions/placeholder.jpg",
                referent: "Rita",
                address: "Via dei Cassari, 41/43, Palermo, Sicily",
                phone: "+39 389 189 3380",
                website: "sardinapastabar.plateform.app",
                instagram: "@sardinapastabar",
                openHours: "Tue-Thu: 7PM-11PM, Fri-Sat: 12:30PM-2:30PM & 7PM-11PM, Sun: 1PM-4PM",
                type: "Cena"
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
                description: "Une osteria dynamique qui combine des éléments de galería de arte, cocktail bar et restaurante, avec une cuisine créative utilisant des ingrédients locaux.",
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
                description: "Ristorante et bar à vin avec plus de 700 étiquettes de vin, che offre cucina palermitana et excelentes cócteles.",
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
                description: "Pizzería con un enfoque artesanal en la panadería y la mixología, située nel cuore del centro storico.",
                priceRange: "€20-30 par personne",
                cuisine: "Pizza, Artisanal",
                image: "images/attractions/placeholder.jpg",
                referent: "Luca o Marcello",
                address: "Via Giovanni Meli, 35, 90133 Palermo PA",
                type: "Cena"
            },
            {
                name: "Quid gusto siciliano",
                description: "Un popolare ristorante vicino a Palazzo Steri che offre autentica cucina italiana. Noto per i suoi spaghetti alle vongole, pizza napoletana e pesce spada perfettamente cucinati. I dessert includono semifreddo, tiramisù e gelato. Il ristorante offre deliziosi margarita, vino della casa e cordiale, insieme a ottimo caffè e limonata. Con un punteggio di 4.3 su Google, il ristorante è elogiato per il suo personale competente, servizio eccellente, prezzi accessibili e un'atmosfera gradevole.",
                priceRange: "€13-41 a persona",
                cuisine: "Pizza, Italiana, Opzioni Vegetariane",
                image: "images/attractions/placeholder.jpg",
                referent: "Serena",
                address: "Piazza Marina, 52, Palermo, Sicilia",
                phone: "+39 091 729 6996",
                website: "facebook.com",
                instagram: "@quidgustosiciliano",
                openHours: "Tutti i giorni 12:00-15:00, 19:00-23:00",
                type: "Cena"
            },
            {
                name: "Scjabaca",
                description: "Situato vicino alla Fontana del Genio, questo ristorante offre cucina italiana e mediterranea con un punteggio di 4.7 su Google. Le specialità includono polpo alla griglia, ravioli e tonno alla griglia, insieme a deliziosi dessert come parfait, panna cotta e crumble. Il ristorante è noto per la sua diversificata carta dei vini, ottimo caffè, personale gentile, servizio veloce e prezzi ragionevoli. L'atmosfera tranquilla e il bel arredamento rendono l'esperienza culinaria piacevole.",
                priceRange: "€20-61 a persona",
                cuisine: "Mediterranea, Italiana, Opzioni Vegetariane",
                image: "images/attractions/placeholder.jpg",
                referent: "Valeria",
                address: "Vicolo S. Carlo, 42, Palermo, Sicilia",
                phone: "+39 091 507 6739",
                website: "ristorantescjabaca.it",
                instagram: "@scjabaca",
                openHours: "Lun-Mar, Gio-Ven: 19:00-23:00; Sab-Dom: 12:00-15:00, 19:00-23:00; Mer: Chiuso",
                type: "Cena"
            },
            {
                name: "Osteria dei Vespri",
                description: "Un ristorante selezionato dalla Guida Michelin vicino alla Fontana del Genio, che offre raffinata cucina italiana con un focus sui frutti di mare. I piatti notevoli includono antipasto, pancia di maiale e tonno scottato, con deliziose torte alla frutta, biscotti e parfait per dessert. Il ristorante serve buon chardonnay, cordiale e fino, insieme a squisito ristretto e limonata. Apprezzato per il personale attraente, servizio spettacolare e prezzi democratici, questo ristorante presenta interni graziosi e un'atmosfera affascinante. Ha ricevuto 2 simboli di coltello e forchetta neri da Michelin, indicando un comfort ottimale.",
                priceRange: "€35-150 a persona",
                cuisine: "Italiana, Frutti di Mare, Bar di Vini",
                image: "images/attractions/placeholder.jpg",
                referent: "Andrea",
                address: "Piazza Croce dei Vespri, 6, Palermo, Sicilia",
                phone: "+39 091 617 1631",
                website: "osteriadeivespri.it",
                instagram: "@osteria_dei_vespri",
                openHours: "Lun-Sab: 12:30-14:45, 19:30-22:45; Dom: Chiuso",
                type: "Cena"
            },
            {
                name: "Le Cattive",
                description: "Situato vicino a Porta Felice, questo ristorante offre cucine italiana e mediterranea. Le specialità includono rana pescatrice, aglio e risotto, con deliziosi biscotti, cannoli e tiramisù per dessert. Il ristorante è noto per il suo buon vino, negroni, cordiale e ottimo caffè. Con una valutazione di 4.5 su Google, i visitatori elogiano la splendida vista, il personale disponibile, il servizio professionale, i prezzi democratici, l'atmosfera tranquilla e l'arredamento raffinato.",
                priceRange: "€40-70 a persona",
                cuisine: "Italiana, Mediterranea, Frutti di Mare",
                image: "images/attractions/placeholder.jpg",
                referent: "Andrea",
                address: "Piazza Santo Spirito, 1, Palermo, Sicilia",
                phone: "+39 091 619 5635",
                website: "lecattivepalazzobutera.it",
                instagram: "@lecattivepalazzobutera",
                openHours: "Mar-Dom: 10:00-19:00; Lun: Chiuso",
                type: "Pranzo"
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
                description: "Scopri i siti UNESCO du patrimonio Árabe-Normando de la UNESCO en Palermo, tra cui il Palazzo Reale con la Cappella Palatina, la Cattedrale, San Giovanni degli Eremiti, San Cataldo e Santa Maria dell'Ammiraglio.",
                duration: "3,5 heures",
                price: "€45-€100 par personne",
                image: "images/attractions/placeholder.jpg",
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
                name: "Osteria Mangia e Bevi",
                description: "Una osteria siciliana tradicional que encarna la auténtica cocina local. 'La cucina che parla siciliano' (La cocina que habla siciliano) - su lema refleja su compromiso de servir platos sicilianos tradicionales preparados con ingredientes locales y recetas transmitidas a través del tiempo. El restaurante ofrece una experiencia culinaria íntima donde los huéspedes pueden disfrutar de los verdaderos sabores de Sicilia en una atmósfera cálida y acogedora.",
                priceRange: "€20-35 por persona",
                cuisine: "Siciliana Tradicional, Especialidades Locales",
                image: "images/attractions/placeholder.jpg",
                referent: "Contacta B&B",
                address: "Palermo, Sicilia",
                website: "osteriamangiaebevi.it",
                type: "Cena"
            },
            {
                name: "Osteria Mercede",
                description: "Un establecimiento de comida tipica siciliana que ofrece una experiencia culinaria autentica con sus platos tipicos, como la linguine con los frutos de mar, el pescado a la plancha, el cóctel de gambas y los antipasti crudos. El menú cambia diariamente para ofrecer opciones frescas, y ofrecen una terraza al aire libre para un almuerzo al fresco. Situado cerca del Teatro Massimo, es perfecto para una cena antes del teatro o para una noche memorable. Incluye un menú de platos especiales que cambian cada día.",
                priceRange: "€25-40 por persona",
                cuisine: "Siciliana, Marisco",
                image: "images/attractions/placeholder.jpg",
                instagram: "@osteria_mercede_palermo",
                address: "Via Sammartino, n 1, Palermo, Sicily",
                type: "Cena"
            },
            {
                name: "Corona Trattoria",
                description: "Un establecimiento familiar que sirve algunos de los mejores platos de cocina siciliana en Palermo. El ambiente elegante pero informal y el servicio atento lo convierten en un punto de encuentro ideal tanto para los locales como para los turistas. El propietario se enorgullece de usar alimentos frescos directamente de productores para crear platos tradicionales con un toque moderno. Platos recomendados incluyen Caponata de Melanzane, Spaghetti ai Gamberetti y Involtino di Spatola. Ofrecen una lista extensa de vinos sicilianos exclusivos, seleccionados cuidadosamente para representar diversos terroirs. Están situados en una calle tranquila en la nueva parte de la ciudad, y las reservas son altamente recomendadas.",
                priceRange: "€9-23 por persona (€40-50 para plato completo)",
                cuisine: "Italiana, Marisco, Opciones Vegetarianas",
                image: "images/attractions/placeholder.jpg",
                address: "Via Guglielmo Marconi, 9, Palermo, Sicily",
                phone: "+39 091 335139",
                website: "coronatrattoria.com",
                instagram: "@coronatrattoria",
                openHours: "Tue-Sat: 12:30PM-3PM, 8PM-11PM (Closed Sun-Mon)",
                type: "Cena"
            },
            {
                name: "Sardina PastaBar",
                description: "Un restaurante tipico siciliano que se especializa en la cocina italiana y mediterranea con un enfoque en los platos de pasta. Notable por sus excelentes spaghetti carbonara, las pastas de sardina y gambas. Los postres deliciosos incluyen gelato, tiramisu y parfait. La barra ofrece vinos de alta calidad, cordial y selecciones de vinos blancos, junto con grandes tazas de café. La atmosfera acogedora hace que los visitantes se sientan relajados, y el personal es conocido por su servicio amable y divertido. Con una calificación de 4.6 estrellas en Google, este lugar económico es popular entre los locales y los turistas. Ofrece una terraza al aire libre y acepta tarjetas de crédito.",
                priceRange: "€15-30 por persona",
                cuisine: "Italiana, Mediterránea, Sin Gluten",
                image: "images/attractions/placeholder.jpg",
                referent: "Rita",
                address: "Via dei Cassari, 41/43, Palermo, Sicily",
                phone: "+39 389 189 3380",
                website: "sardinapastabar.plateform.app",
                instagram: "@sardinapastabar",
                openHours: "Tue-Thu: 7PM-11PM, Fri-Sat: 12:30PM-2:30PM & 7PM-11PM, Sun: 1PM-4PM",
                type: "Cena"
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
            },
            {
                name: "Quid gusto siciliano",
                description: "Un popular restaurante cerca del Palazzo Steri que ofrece auténtica cocina italiana. Conocido por sus espaguetis con almejas, pizza napolitana y pez espada perfectamente cocinados. Los postres incluyen semifreddo, tiramisú y gelato. El restaurante ofrece deliciosas margaritas, vino de la casa y cordial, junto con excelente café y limonada. Con una puntuación de 4.3 en Google, el restaurante es elogiado por su personal competente, servicio excelente, precios asequibles y ambiente agradable.",
                priceRange: "€13-41 por persona",
                cuisine: "Pizza, Italiana, Opziones Vegetarianes",
                image: "images/attractions/placeholder.jpg",
                referent: "Serena",
                address: "Piazza Marina, 52, Palermo, Sicilia",
                phone: "+39 091 729 6996",
                website: "facebook.com",
                instagram: "@quidgustosiciliano",
                openHours: "Daily 12PM-3PM, 7PM-11PM",
                type: "Cena"
            },
            {
                name: "Scjabaca",
                description: "Ubicado cerca de la Fontana del Genio, este restaurante ofrece cocina italiana y mediterránea con una puntuación de 4.7 en Google. Las especialidades incluyen pulpo a la parrilla, raviolis y atún a la parrilla, junto con deliciosos postres como parfait, panna cotta y crumble. El restaurante es conocido por su diversa carta de vinos, delicioso café, personal amable, servicio rápido y precios razonables. El ambiente tranquilo y la bella decoración hacen que la experiencia culinaria sea agradable.",
                priceRange: "€20-61 por persona",
                cuisine: "Mediterránea, Italiana, Opciones Vegetarianas",
                image: "images/attractions/placeholder.jpg",
                referent: "Valeria",
                address: "Vicolo S. Carlo, 42, Palermo, Sicilia",
                phone: "+39 091 507 6739",
                website: "ristorantescjabaca.it",
                instagram: "@scjabaca",
                openHours: "Lun-Mar, Jue-Vie: 19:00-23:00; Sáb-Dom: 12:00-15:00, 19:00-23:00; Mié: Cerrado",
                type: "Cena"
            },
            {
                name: "Osteria dei Vespri",
                description: "Un restaurante seleccionado por la guía Michelin cerca de la Fontana del Genio, que ofrece refinada cocina italiana con énfasis en los mariscos. Los platos destacados incluyen antipasto, panceta de cerdo y atún sellado, con deliciosos pasteles de frutas, galletas y parfait para el postre. El restaurante sirve buen chardonnay, cordial y jerez fino, además de delicioso ristretto y limonada. Elogiado por su personal atractivo, servicio espectacular y precios democráticos, este restaurante presenta una decoración encantadora y un ambiente agradable. Ha recibido 2 símbolos de tenedor y cuchillo negros de Michelin, lo que indica un confort óptimo.",
                priceRange: "€35-150 por persona",
                cuisine: "Italiana, Mariscos, Bares de Vinos",
                image: "images/attractions/placeholder.jpg",
                referent: "Andrea",
                address: "Piazza Croce dei Vespri, 6, Palermo, Sicilia",
                phone: "+39 091 617 1631",
                website: "osteriadeivespri.it",
                instagram: "@osteria_dei_vespri",
                openHours: "Lun-Sáb: 12:30-14:45, 19:30-22:45; Dom: Cerrado",
                type: "Cena"
            },
            {
                name: "Le Cattive",
                description: "Ubicado cerca de Porta Felice, este restaurante ofrece cocina italiana y mediterránea. Las especialidades incluyen rana pescatrice, aglio y risotto, con deliziosas galletas, cannoli y tiramisú para el postre. El restaurante es conocido por su buen vino, negroni, cordial y excelente café. Con una puntuación de 4.5 en Google, los visitantes elogian la gran vista, el personal atento, el servicio profesional, los precios democraticos, el ambiente tranquilo y la decoración elegante.",
                priceRange: "€40-70 por persona",
                cuisine: "Italiana, Mediterránea, Frutti di Mare",
                image: "images/attractions/placeholder.jpg",
                referent: "Andrea",
                address: "Piazza Santo Spirito, 1, Palermo, Sicilia",
                phone: "+39 091 619 5635",
                website: "lecattivepalazzobutera.it",
                instagram: "@lecattivepalazzobutera",
                openHours: "Mar-Dom: 10:00-19:00; Lun: Cerrado",
                type: "Almuerzo"
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
            { name: "Galería Regional de Sicile", image: "images/attractions/galleria_sicilia.jpg" }
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