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
 * The legacy restaurantsData arrays in translations.js will be removed.
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
 *   - image: Restaurant image URL (from CSV when available)
 *   - address, phone, website, instagram, etc. (optional)
 * 
 * BENEFITS OF THIS STRUCTURE:
 * - Edit once, changes reflect in all languages
 * - Centralized data management
 * - No duplication of language-agnostic data
 * - Easy to maintain and update
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
                description: "Situato nel Mercato del Capo, offre il tradizionale street food palermitano. Conosciuto per la sua gentilezza e competenza."
            },
            fr: {
                name: "Dainotti's",
                description: "Situé dans le Mercato del Capo, offrant la street food traditionnelle de Palerme. Connu pour sa gentillesse et son expertise."
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
    },
    {
        id: "osteria-mangia-e-bevi",
        translations: {
            en: {
                name: "Osteria Mangia e Bevi",
                description: "A traditional Sicilian osteria that embodies authentic local cuisine. 'La cucina che parla siciliano' (The cuisine that speaks Sicilian) - their motto reflects their commitment to serving traditional Sicilian dishes prepared with local ingredients and time-honored recipes. The restaurant offers an intimate dining experience where guests can enjoy the true flavors of Sicily in a warm and welcoming atmosphere."
            },
            it: {
                name: "Osteria Mangia e Bevi",
                description: "Un'osteria siciliana tradizionale che incarna la cucina locale autentica. 'La cucina che parla siciliano' - il loro motto riflette l'impegno a servire piatti siciliani tradizionali preparati con ingredienti locali e ricette tramandate nel tempo. Il ristorante offre un'esperienza culinaria intima dove gli ospiti possono gustare i veri sapori della Sicilia in un'atmosfera calda e accogliente."
            },
            fr: {
                name: "Osteria Mangia e Bevi",
                description: "Une osteria sicilienne traditionnelle qui incarne la cuisine locale authentique. 'La cucina che parla siciliano' (La cuisine qui parle sicilien) - leur devise reflète l'engagement à servir des plats siciliens traditionnels préparés avec des ingrédients locaux et des recettes transmises au fil du temps. Le restaurant offre une expérience culinaire intime où les invités peuvent savourer les vraies saveurs de la Sicile dans une atmosphère chaleureuse et accueillante."
            },
            es: {
                name: "Osteria Mangia e Bevi",
                description: "Una osteria siciliana tradicional que encarna la auténtica cocina local. 'La cucina che parla siciliano' (La cocina que habla siciliano) - su lema refleja su compromiso de servir platos sicilianos tradicionales preparados con ingredientes locales y recetas transmitidas a través del tiempo. El restaurante ofrece una experiencia culinaria íntima donde los huéspedes pueden disfrutar de los verdaderos sabores de Sicilia en una atmósfera cálida y acogedora."
            }
        },
        priceRange: "€20-35 per person",
        cuisine: "Traditional Sicilian, Local Specialties",
        image: "https://media-cdn.tripadvisor.com/media/photo-w/05/f7/d6/85/osteria-mangia-e-bevi.jpg",
        referent: "Contact B&B",
        address: "Palermo, Sicily",
        website: "osteriamangiaebevi.it",
        type: "Dinner"
    },
    {
        id: "osteria-mercede",
        translations: {
            en: {
                name: "Osteria Mercede",
                description: "A seafood establishment that offers fine dining with a focus on fish and seafood dishes. The ambiance is cozy and intimate, with attentive service and friendly staff. The interior design is reminiscent of a traditional fishermen's boat, adding to the authenticity. The menu features local specialties such as linguine with seafood, grilled blue fish, shrimp cocktail, and mixed raw fish appetizers. Their daily changing specials board ensures fresh options, and they offer outdoor seating for al fresco dining. Located near Teatro Massimo, it's perfect for a pre-theater dinner or a memorable evening out."
            },
            it: {
                name: "Osteria Mercede",
                description: "Un'istituzione di cucina tipica siciliana che offre una esperienza culinaria autentica con i suoi piatti tipici, come la linguine con i frutti di mare, il pesce grigliato, il cocktail di gamberi e gli antipasti crudi misti. Il menu cambia quotidianamente per offrire opzioni fresche, e offrono un'ampia terrazza all'aperto per un pranzo al fresco. Situato vicino al Teatro Massimo, è ideale per un pranzo prima del teatro o per una serata memorabile."
            },
            fr: {
                name: "Osteria Mercede",
                description: "Une établissement de cuisine typique sicilienne qui offre une expérience culinaria autentique avec ses plats typiques, tels que la linguine aux fruits de mer, le poisson grillé, le cocktail de crevettes et les antipasti crudos. Le menu change quotidiennement pour offrir des options fraîches, et ils offrent une grande terrasse pour un déjeuner en plein air. Situé près du Teatro Massimo, c'est parfait pour un déjeuner avant le théâtre ou pour une soirée mémorable."
            },
            es: {
                name: "Osteria Mercede",
                description: "Un establecimiento de comida tipica siciliana que ofrece una experiencia culinaria autentica con sus platos tipicos, como la linguine con los frutos de mar, el pescado a la plancha, el cóctel de gambas y los antipasti crudos. El menú cambia diariamente para ofrecer opciones frescas, y ofrecen una terraza al aire libre para un almuerzo al fresco. Situado cerca del Teatro Massimo, es perfecto para una cena antes del teatro o para una noche memorable."
            }
        },
        priceRange: "€25-40 per person",
        cuisine: "Seafood, Sicilian",
        image: "https://media-cdn.tripadvisor.com/media/photo-o/07/3e/ca/98/osteria-proseccheria.jpg",
        instagram: "@osteria_mercede_palermo",
        address: "Via Sammartino, n 1, Palermo, Sicily",
        type: "Dinner"
    },
    {
        id: "corona-trattoria",
        translations: {
            en: {
                name: "Corona Trattoria",
                description: "A family-run establishment serving some of the best Sicilian seafood cuisine in Palermo. The elegant yet informal ambiance and impeccable service make it a fine dining spot for locals and tourists alike. The owner takes pride in using fresh farm foods directly from producers to create traditional dishes with a modern twist. Recommended dishes include Caponata di Melanzane, Spaghetti ai Gamberetti, and Involtino di Spatola. They offer an extensive list of exclusively Sicilian wines, carefully selected to represent various terroirs. Located in a quiet street in the new part of the city, reservations are highly recommended."
            },
            it: {
                name: "Corona Trattoria",
                description: "Un'istituzione familiare che offre alcuni dei migliori piatti di cucina siciliana in Palermo. L'atmosfera elegante ma informale e il servizio attento rendono questo ristorante un punto di incontro ideale per i locali e i turisti. Il proprietario è orgoglioso di utilizzare alimenti freschi direttamente dai produttori per creare piatti tradizionali con un tocco moderno. I piatti raccomandati includono Caponata di Melanzane, Spaghetti ai Gamberetti e Involtino di Spatola. Offrono una lista estesa di vini siciliani esclusivi, selezionati con cura per rappresentare vari terroir. Situato in una strada tranquilla nella nuova parte della città, le prenotazioni sono altamente raccomandate."
            },
            fr: {
                name: "Corona Trattoria",
                description: "Une établissement familiale qui sert certains des meilleurs plats de cuisine siciliana de Palermo. L'ambiance élégante mais informelle et le service attentif rendent ce restaurant un point d'incontre idéal pour les locaux et les touristes. Le propriétaire est fier d'utiliser des aliments frais directement des producteurs pour créer des plats traditionnels avec une touche moderne. Les plats recommandés incluent Caponata di Melanzane, Spaghetti ai Gamberetti et Involtino di Spatola. Ils proposent une grande liste de vins siciliens exclusifs, sélectionnés avec soin pour représenter divers terroirs. Situé dans une petite rue dans la nouvelle partie de la ville, les réservations sont fortement recommandées."
            },
            es: {
                name: "Corona Trattoria",
                description: "Un establecimiento familiar que sirve algunos de los mejores platos de cocina siciliana en Palermo. El ambiente elegante pero informal y el servicio atento lo convierten en un punto de encuentro ideal tanto para los locales como para los turistas. El propietario se enorgullece de usar alimentos frescos directamente de productores para crear platos tradicionales con un toque moderno. Platos recomendados incluyen Caponata de Melanzane, Spaghetti ai Gamberetti y Involtino di Spatola. Ofrecen una lista extensa de vinos sicilianos exclusivos, seleccionados cuidadosamente para representar diversos terroirs. Están situados en una calle tranquila en la nueva parte de la ciudad, y las reservas son altamente recomendadas."
            }
        },
        priceRange: "€9-23 per person (€40-50 for full course)",
        cuisine: "Italian, Seafood, Vegetarian Options",
        image: "https://media-cdn.tripadvisor.com/media/photo-w/2a/c6/d4/9d/caption.jpg",
        address: "Via Guglielmo Marconi, 9, Palermo, Sicily",
        phone: "+39 091 335139",
        website: "coronatrattoria.com",
        instagram: "@coronatrattoria",
        openHours: "Tue-Sat: 12:30PM-3PM, 8PM-11PM (Closed Sun-Mon)",
        type: "Dinner"
    },
    {
        id: "sardina-pastabar",
        translations: {
            en: {
                name: "Sardina PastaBar",
                description: "A charming restaurant specializing in Italian and Mediterranean cuisines with a focus on pasta dishes. Known for their excellent spaghetti carbonara, sardine and prawn dishes. Delicious desserts include gelato, tiramisu, and parfait. The bar offers fine wine, cordial, and white wine selections, along with great coffee. The cozy atmosphere makes visitors feel relaxed, and the staff is known for their accommodating and enjoyable service. With a Google rating of 4.6 stars, this affordable spot is popular among locals and tourists alike. Offers outdoor seating and accepts credit cards."
            },
            it: {
                name: "Sardina PastaBar",
                description: "Un ristorante affascinante specializzato in cucina italiana e mediterranea con un focus sui piatti di pasta. Conosciuto per i suoi eccellenti spaghetti carbonara, piatti di sardine e gamberi. I dessert deliziosi includono gelato, tiramisù e parfait. Il bar offre vini pregiati, cordial e selezioni di vini bianchi, insieme a ottimo caffè. L'atmosfera accogliente fa sentire i visitatori rilassati, e il personale è noto per il suo servizio accomodante e piacevole. Con una valutazione Google di 4,6 stelle, questo posto economico è popolare tra i locali e i turisti. Offre posti a sedere all'aperto e accetta carte di credito."
            },
            fr: {
                name: "Sardina PastaBar",
                description: "Un restaurant charmant se spécialisant dans la cuisine italienne et méditerranéenne avec un accent sur les plats de pâtes. Connu pour ses excellents spaghetti carbonara, plats de sardines et de crevettes. Les desserts délicieux incluent gelato, tiramisu et parfait. Le bar offre des vins fins, cordial et sélections de vins blancs, avec un excellent café. L'atmosphère chaleureuse fait sentir les visiteurs détendus, et le personnel est connu pour son service accommodant et agréable. Avec une note Google de 4,6 étoiles, cet endroit abordable est populaire parmi les locaux et les touristes. Propose des sièges extérieurs et accepte les cartes de crédit."
            },
            es: {
                name: "Sardina PastaBar",
                description: "Un restaurante encantador especializado en cocina italiana y mediterránea con un enfoque en platos de pasta. Conocido por sus excelentes spaghetti carbonara, platos de sardinas y gambas. Los postres deliciosos incluyen gelato, tiramisù y parfait. El bar ofrece vinos finos, cordial y selecciones de vinos blancos, junto con excelente café. El ambiente acogedor hace que los visitantes se sientan relajados, y el personal es conocido por su servicio complaciente y agradable. Con una calificación de Google de 4,6 estrellas, este lugar económico es popular entre locales y turistas. Ofrece asientos al aire libre y acepta tarjetas de crédito."
            }
        },
        priceRange: "€15-30 per person",
        cuisine: "Italian, Mediterranean, Gluten-free",
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/1c/09/54/sardina-pasta-bar-interno.jpg",
        referent: "Rita",
        address: "Via dei Cassari, 41/43, Palermo, Sicily",
        phone: "+39 389 189 3380",
        website: "sardinapastabar.plateform.app",
        instagram: "@sardinapastabar",
        openHours: "Tue-Thu: 7PM-11PM, Fri-Sat: 12:30PM-2:30PM & 7PM-11PM, Sun: 1PM-4PM",
        type: "Dinner"
    },
    {
        id: "trattoria-bersagliere",
        translations: {
            en: {
                name: "Trattoria Bersagliere",
                description: "Historic trattoria in the Albergheria neighborhood, famous for pasta with \"glassa\" and a cozy, family-friendly atmosphere."
            },
            it: {
                name: "Trattoria Bersagliere",
                description: "Storica trattoria nel quartiere Albergheria, famosa per la pasta con 'glassa' e un'atmosfera accogliente e familiare."
            },
            fr: {
                name: "Trattoria Bersagliere",
                description: "Trattoria historique dans le quartier Albergheria, célèbre pour ses pâtes avec 'glassa' et son atmosphère chaleureuse et familiale."
            },
            es: {
                name: "Trattoria Bersagliere",
                description: "Trattoria histórica en el barrio de Albergheria, famosa por su pasta con 'glassa' y un ambiente acogedor y familiar."
            }
        },
        priceRange: "€10-20 per person",
        cuisine: "Traditional Sicilian",
        image: "https://media-cdn.tripadvisor.com/media/photo-o/07/b9/9f/e2/trattoria-il-bersagliere.jpg",
        referent: "Lollo",
        address: "Via S. Nicolò All'Albergheria, 38, 90134 Palermo PA",
        type: "Lunch"
    },
    {
        id: "dadalia-osteria",
        translations: {
            en: {
                name: "Dadalia Osteria",
                description: "Typical Sicilian osteria located in the historic Vucciria market. Offers vegetarian dishes and has outdoor seating."
            },
            it: {
                name: "Dadalia Osteria",
                description: "Tipica osteria siciliana situata nel mercato storico della Vucciria. Offre piatti vegetariani e ha posti a sedere all'aperto."
            },
            fr: {
                name: "Dadalia Osteria",
                description: "Osteria sicilienne typique située dans le marché historique de Vucciria. Propose des plats végétariens et dispose d'une terrasse extérieure."
            },
            es: {
                name: "Dadalia Osteria",
                description: "Típica osteria siciliana situada en el histórico mercado de Vucciria. Ofrece platos vegetarianos y tiene asientos al aire libre."
            }
        },
        priceRange: "€10-20 per person",
        cuisine: "Sicilian, Vegetarian Options",
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/13/f0/00/29/photo5jpg.jpg",
        referent: "Pippo or Giovanni",
        address: "Via Maccherronai, 20, 90133 Palermo PA",
        type: "Lunch"
    },
    {
        id: "lacerba-osteria-dinamica",
        translations: {
            en: {
                name: "L'Acerba Osteria Dinamica",
                description: "A dynamic osteria that combines elements of an art gallery, cocktail bar, and restaurant, with creative cuisine using local ingredients."
            },
            it: {
                name: "L'Acerba Osteria Dinamica",
                description: "Un'osteria dinamica che unisce elementi di galleria d'arte, cocktail bar e ristorante, con cucina creativa che utilizza ingredienti locali."
            },
            fr: {
                name: "L'Acerba Osteria Dinamica",
                description: "Une osteria dynamique qui combine des éléments de galerie d'art, cocktail bar et restaurant, avec une cuisine créative utilisant des ingrédients locaux."
            },
            es: {
                name: "L'Acerba Osteria Dinamica",
                description: "Una osteria dinámica que combina elementos de galería de arte, cóctel bar y restaurante, con cocina creativa usando ingredientes locales."
            }
        },
        priceRange: "€20-40 per person",
        cuisine: "Creative Sicilian",
        image: "https://media-cdn.tripadvisor.com/media/photo-o/1a/9f/f9/98/ricciola-di-mare-con.jpg",
        referent: "Gabriele",
        address: "Vicolo Maestro Cristofaro, 10, 90134 Palermo PA",
        type: "Dinner"
    },
    {
        id: "le-angeliche",
        translations: {
            en: {
                name: "Le Angeliche",
                description: "Romantic restaurant with an elegant patio, specializing in seafood, pasta, and Sicilian snacks, with vegan options available."
            },
            it: {
                name: "Le Angeliche",
                description: "Ristorante romantico con un patio elegante, specializzato in frutti di mare, pasta e spuntini siciliani, con opzioni vegane disponibili."
            },
            fr: {
                name: "Le Angeliche",
                description: "Restaurant romantique avec un patio élégant, spécialisé dans les fruits de mer, les pâtes et les collations siciliennes, avec des options véganes disponibles."
            },
            es: {
                name: "Le Angeliche",
                description: "Restaurante romántico con un elegante patio, especializado en mariscos, pasta y aperitivos sicilianos, con opciones veganas disponibles."
            }
        },
        priceRange: "€30-40 per person",
        cuisine: "Seafood, Vegan Options",
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/de/24/01/photo0jpg.jpg",
        referent: "Floriana or Chiara",
        address: "Vicolo Abbadia, 10, 90134 Palermo PA",
        type: "Dinner"
    },
    {
        id: "trattoria-supra-i-mura",
        translations: {
            en: {
                name: "Trattoria Supra i Mura",
                description: "Located in the heart of Palermo, offering a variety of seafood dishes and traditional Sicilian cuisine in a welcoming atmosphere."
            },
            it: {
                name: "Trattoria Supra i Mura",
                description: "Situata nel cuore di Palermo, offre una varietà di piatti di pesce e cucina tradizionale siciliana in un'atmosfera accogliente."
            },
            fr: {
                name: "Trattoria Supra i Mura",
                description: "Situé au cœur de Palerme, offrant une variété de plats de fruits de mer et de cuisine sicilienne traditionnelle dans une atmosphère accueillante."
            },
            es: {
                name: "Trattoria Supra i Mura",
                description: "Ubicado en el corazón de Palermo, ofrece una variedad de platos de mariscos y cocina tradicional siciliana en un ambiente acogedor."
            }
        },
        priceRange: "€20-30 per person",
        cuisine: "Seafood, Traditional Sicilian",
        image: "https://media-cdn.tripadvisor.com/media/photo-w/10/2c/fd/c2/img-20170802-124159-largejpg.jpg",
        referent: "Pietro",
        address: "Piazza Porta Carini, 5, 90134 Palermo PA",
        type: "Dinner"
    },
    {
        id: "enoteca-buttice",
        translations: {
            en: {
                name: "Enoteca Butticè",
                description: "Restaurant and wine bar with over 700 wine labels, offering Palermo cuisine and excellent cocktails."
            },
            it: {
                name: "Enoteca Butticè",
                description: "Ristorante e wine bar con oltre 700 etichette di vino, che offre cucina palermitana ed eccellenti cocktail."
            },
            fr: {
                name: "Enoteca Butticè",
                description: "Restaurant et bar à vin avec plus de 700 étiquettes de vin, offrant cuisine palermitaine et excellents cocktails."
            },
            es: {
                name: "Enoteca Butticè",
                description: "Restaurante y bar de vinos con más de 700 etiquetas de vino, ofreciendo cocina palermitana y excelentes cócteles."
            }
        },
        priceRange: "€20-40 per person",
        cuisine: "Sicilian, Wine Bar",
        image: "images/attractions/placeholder.jpg",
        referent: "Giuseppe",
        address: "Piazza S. Francesco di Paola, 12, 90138 Palermo PA",
        type: "Dinner"
    },
    {
        id: "ferramenta",
        translations: {
            en: {
                name: "Ferramenta",
                description: "Restaurant in the heart of Palermo's historic center, with outdoor seating and vegan options, ideal for a young and welcoming atmosphere."
            },
            it: {
                name: "Ferramenta",
                description: "Ristorante nel cuore del centro storico di Palermo, con posti a sedere all'aperto e opzioni vegane, ideale per un'atmosfera giovane e accogliente."
            },
            fr: {
                name: "Ferramenta",
                description: "Restaurant au cœur du centre historique de Palerme, avec sièges extérieurs et options véganes, idéal pour une atmosphère jeune et accueillante."
            },
            es: {
                name: "Ferramenta",
                description: "Restaurante en el centro histórico de Palermo, con asientos al aire libre y opciones veganas, ideal para un ambiente joven y acogedor."
            }
        },
        priceRange: "€20-30 per person",
        cuisine: "Mediterranean, Vegan Options",
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/03/f3/c5/esterno.jpg",
        referent: "Luca or Marcello",
        address: "Piazza Giovanni Meli, 8, 90133 Palermo PA",
        type: "Dinner"
    },
    {
        id: "forno-santa-maria",
        translations: {
            en: {
                name: "Forno Santa Maria",
                description: "Pizzeria with an artisanal approach to baking and mixology, located in the heart of the historic center."
            },
            it: {
                name: "Forno Santa Maria",
                description: "Pizzeria con un approccio artigianale alla panificazione e alla mixologia, situata nel cuore del centro storico."
            },
            fr: {
                name: "Forno Santa Maria",
                description: "Pizzeria avec une approche artisanale de la boulangerie et de la mixologie, située au cœur du centre historique."
            },
            es: {
                name: "Forno Santa Maria",
                description: "Pizzería con un enfoque artesanal de la panadería y la mixología, ubicada en el corazón del centro histórico."
            }
        },
        priceRange: "€20-30 per person",
        cuisine: "Pizza, Artisanal",
        image: "https://media-cdn.tripadvisor.com/media/photo-w/2c/84/88/d0/caption.jpg",
        referent: "Luca or Marcello",
        address: "Via Giovanni Meli, 35, 90133 Palermo PA",
        type: "Dinner"
    },
    {
        id: "quid-gusto-siciliano",
        translations: {
            en: {
                name: "Quid gusto siciliano",
                description: "A popular restaurant near Palazzo Steri offering authentic Italian cuisine. Known for perfectly cooked spaghetti vongole, Neapolitan pizza and swordfish. Desserts include semifreddo, tiramisu and gelato. The restaurant offers delicious margaritas, house wine, and cordial, along with great coffee and lemonade. With a 4.3 Google rating, the restaurant is praised for its competent staff, terrific service, affordable prices, and pretty ambiance."
            },
            it: {
                name: "Quid gusto siciliano",
                description: "Un ristorante popolare vicino a Palazzo Steri che offre autentica cucina italiana. Conosciuto per gli spaghetti alle vongole perfettamente cotti, pizza napoletana e pesce spada. I dessert includono semifreddo, tiramisù e gelato. Il ristorante offre deliziose margarita, vino della casa e cordial, insieme a ottimo caffè e limonata. Con una valutazione Google di 4,3, il ristorante è apprezzato per il personale competente, il servizio eccellente, i prezzi accessibili e l'ambiente piacevole."
            },
            fr: {
                name: "Quid gusto siciliano",
                description: "Un restaurant populaire près de Palazzo Steri offrant une cuisine italienne authentique. Connu pour ses spaghetti alle vongole parfaitement cuits, pizza napolitaine et espadon. Les desserts incluent semifreddo, tiramisu et gelato. Le restaurant propose de délicieuses margaritas, vin de maison et cordial, ainsi que d'excellent café et limonade. Avec une note Google de 4,3, le restaurant est apprécié pour son personnel compétent, son service excellent, ses prix abordables et son ambiance agréable."
            },
            es: {
                name: "Quid gusto siciliano",
                description: "Un restaurante popular cerca de Palazzo Steri que ofrece auténtica cocina italiana. Conocido por sus spaghetti alle vongole perfectamente cocinados, pizza napolitana y pez espada. Los postres incluyen semifreddo, tiramisù y gelato. El restaurante ofrece deliciosas margaritas, vino de la casa y cordial, junto con excelente café y limonada. Con una calificación de Google de 4,3, el restaurante es elogiado por su personal competente, excelente servicio, precios asequibles y ambiente agradable."
            }
        },
        priceRange: "€13-41 per person",
        cuisine: "Pizza, Italian, Vegetarian Options",
        image: "https://media-cdn.tripadvisor.com/media/photo-w/29/16/65/d9/la-vera-cucina-mediterranea.jpg",
        referent: "Serena",
        address: "Piazza Marina, 52, Palermo, Sicily",
        phone: "+39 091 729 6996",
        website: "facebook.com",
        instagram: "@quidgustosiciliano",
        openHours: "Daily 12PM-3PM, 7PM-11PM",
        type: "Dinner"
    },
    {
        id: "scjabaca",
        translations: {
            en: {
                name: "Scjabaca",
                description: "Located near Fontana del Genio, this restaurant offers Italian and Mediterranean cuisine with a 4.7 Google rating. Specialties include grilled octopus, ravioli, and grilled tuna, along with delightful desserts like parfait, panna cotta, and crumble. The restaurant is known for its diverse wine list, delicious coffee, nice staff, fast service, and reasonable prices. The calm atmosphere and beautiful decor make for an enjoyable dining experience."
            },
            it: {
                name: "Scjabaca",
                description: "Situato vicino alla Fontana del Genio, questo ristorante offre cucina italiana e mediterranea con una valutazione Google di 4,7. Le specialità includono polpo alla griglia, ravioli e tonno grigliato, insieme a deliziosi dessert come parfait, panna cotta e crumble. Il ristorante è noto per la sua lista di vini diversificata, il caffè delizioso, il personale gentile, il servizio veloce e i prezzi ragionevoli. L'atmosfera tranquilla e l'arredamento bello rendono l'esperienza culinaria piacevole."
            },
            fr: {
                name: "Scjabaca",
                description: "Situé près de la Fontana del Genio, ce restaurant propose une cuisine italienne et méditerranéenne avec une note Google de 4,7. Les spécialités incluent poulpe grillé, ravioli et thon grillé, ainsi que de délicieux desserts comme parfait, panna cotta et crumble. Le restaurant est connu pour sa liste de vins diversifiée, son café délicieux, son personnel sympathique, son service rapide et ses prix raisonnables. L'atmosphère calme et la belle décoration font une expérience culinaire agréable."
            },
            es: {
                name: "Scjabaca",
                description: "Ubicado cerca de la Fontana del Genio, este restaurante ofrece cocina italiana y mediterránea con una calificación de Google de 4,7. Las especialidades incluyen pulpo a la parrilla, ravioli y atún a la parrilla, junto con deliciosos postres como parfait, panna cotta y crumble. El restaurante es conocido por su lista de vinos diversa, café delicioso, personal amable, servicio rápido y precios razonables. El ambiente tranquilo y la hermosa decoración hacen una experiencia culinaria agradable."
            }
        },
        priceRange: "€20-61 per person",
        cuisine: "Mediterranean, Italian, Vegetarian Options",
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/13/c9/b2/b5/sala-principale.jpg",
        referent: "Valeria",
        address: "Vicolo S. Carlo, 42, Palermo, Sicily",
        phone: "+39 091 507 6739",
        website: "ristorantescjabaca.it",
        instagram: "@scjabaca",
        openHours: "Mon-Tue, Thu-Fri: 7PM-11PM; Sat-Sun: 12PM-3PM, 7PM-11PM; Wed: Closed",
        type: "Dinner"
    },
    {
        id: "osteria-dei-vespri",
        translations: {
            en: {
                name: "Osteria dei Vespri",
                description: "A Michelin-selected restaurant near Fontana del Genio, offering refined Italian cuisine with a focus on seafood. Notable dishes include antipasto, pork belly, and seared tuna, with delicious fruit cakes, cookies, and parfait for dessert. The restaurant serves good chardonnay, cordial, and fino sherry, along with exquisite ristretto and lemonade. Appreciated for its attractive staff, spectacular service, and democratic prices, this restaurant features cute decor and a charming atmosphere. It has received 2 black knife and fork symbols from Michelin, indicating optimal comfort."
            },
            it: {
                name: "Osteria dei Vespri",
                description: "Un ristorante selezionato da Michelin vicino alla Fontana del Genio, che offre cucina italiana raffinata con un focus sui frutti di mare. I piatti notevoli includono antipasto, pancetta di maiale e tonno scottato, con deliziose torte di frutta, biscotti e parfait per dessert. Il ristorante serve buon chardonnay, cordial e fino sherry, insieme a ristretto squisito e limonata. Apprezzato per il suo staff attraente, servizio spettacolare e prezzi democratici, questo ristorante presenta un arredamento carino e un'atmosfera affascinante. Ha ricevuto 2 simboli di coltello e forchetta neri da Michelin, indicando comfort ottimale."
            },
            fr: {
                name: "Osteria dei Vespri",
                description: "Un restaurant sélectionné par Michelin près de la Fontana del Genio, offrant une cuisine italienne raffinée avec un accent sur les fruits de mer. Les plats notables incluent antipasto, poitrine de porc et thon saisi, avec de délicieuses tartes aux fruits, biscuits et parfait pour le dessert. Le restaurant sert bon chardonnay, cordial et fino sherry, ainsi que ristretto exquis et limonade. Apprécié pour son personnel attrayant, service spectaculaire et prix démocratiques, ce restaurant présente une décoration mignonne et une atmosphère charmante. Il a reçu 2 symboles de couteau et fourchette noirs de Michelin, indiquant un confort optimal."
            },
            es: {
                name: "Osteria dei Vespri",
                description: "Un restaurante seleccionado por Michelin cerca de la Fontana del Genio, que ofrece cocina italiana refinada con un enfoque en mariscos. Los platos notables incluyen antipasto, panceta de cerdo y atún sellado, con deliciosas tartas de frutas, galletas y parfait para postre. El restaurante sirve buen chardonnay, cordial y fino sherry, junto con ristretto exquisito y limonada. Apreciado por su personal atractivo, servicio espectacular y precios democráticos, este restaurante presenta una decoración linda y una atmósfera encantadora. Ha recibido 2 símbolos de cuchillo y tenedor negros de Michelin, indicando comodidad óptima."
            }
        },
        priceRange: "€35-150 per person",
        cuisine: "Italian, Seafood, Wine Bars",
        image: "https://media-cdn.tripadvisor.com/media/photo-o/10/8f/ef/1e/interno-ristorante-versione.jpg",
        referent: "Andrea",
        address: "Piazza Croce dei Vespri, 6, Palermo, Sicily",
        phone: "+39 091 617 1631",
        website: "osteriadeivespri.it",
        instagram: "@osteria_dei_vespri",
        openHours: "Mon-Sat: 12:30PM-2:45PM, 7:30PM-10:45PM; Sun: Closed",
        type: "Dinner"
    },
    {
        id: "le-cattive",
        translations: {
            en: {
                name: "Le Cattive",
                description: "Located near Porta Felice, this restaurant offers Italian and Mediterranean cuisines. Specialties include monkfish, aglio, and risotto, with tasty biscuits, cannoli, and tiramisu for dessert. The restaurant is known for its good wine, negroni, cordial, and great coffee. With a Google rating of 4.5, visitors praise the great view, accommodating staff, professional service, democratic prices, peaceful atmosphere, and fine decor."
            },
            it: {
                name: "Le Cattive",
                description: "Situato vicino a Porta Felice, questo ristorante offre cucina italiana e mediterranea. Le specialità includono rana pescatrice, aglio e risotto, con deliziosi biscotti, cannoli e tiramisù per dessert. Il ristorante è noto per il suo buon vino, negroni, cordial e ottimo caffè. Con una valutazione Google di 4,5, i visitatori elogiano la vista splendida, il personale accomodante, il servizio professionale, i prezzi democratici, l'atmosfera tranquilla e l'arredamento raffinato."
            },
            fr: {
                name: "Le Cattive",
                description: "Situé près de Porta Felice, ce restaurant propose une cuisine italienne et méditerranéenne. Les spécialités incluent lotte, ail et risotto, avec de délicieux biscuits, cannoli et tiramisu pour le dessert. Le restaurant est connu pour son bon vin, negroni, cordial et excellent café. Avec une note Google de 4,5, les visiteurs louent la vue magnifique, le personnel accommodant, le service professionnel, les prix démocratiques, l'atmosphère paisible et la décoration raffinée."
            },
            es: {
                name: "Le Cattive",
                description: "Ubicado cerca de Porta Felice, este restaurante ofrece cocina italiana y mediterránea. Las especialidades incluyen rape, ajo y risotto, con deliciosas galletas, cannoli y tiramisú para postre. El restaurante es conocido por su buen vino, negroni, cordial y excelente café. Con una calificación de Google de 4,5, los visitantes elogian la vista magnífica, el personal complaciente, el servicio profesional, los precios democráticos, la atmósfera tranquila y la decoración refinada."
            }
        },
        priceRange: "€40-70 per person",
        cuisine: "Italian, Mediterranean, Seafood",
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/24/6d/33/3f/dehors.jpg",
        referent: "Andrea",
        address: "Piazza Santo Spirito, 1, Palermo, Sicily",
        phone: "+39 091 619 5635",
        website: "lecattivepalazzobutera.it",
        instagram: "@lecattivepalazzobutera",
        openHours: "Tue-Sun: 10AM-7PM; Mon: Closed",
        type: "Lunch"
    },
    {
        id: "u-babbio",
        translations: {
            en: {
                name: "U Babbio",
                description: "Church of the Holy Cross can be on your route by default, the clients' recommendation is to visit this restaurant. U Babbio is famous for serving Italian and Mediterranean cuisines. Many people visit this place to taste perfectly cooked busiate, sardine and antipasto. Delicious prosecco gets positive reviews. This spot has good coffee among its drinks. The convenient location of this restaurant makes it easy to reach even in rush hours. The staff is said to be knowledgeable here. The professional service displays a high level of quality. With a Google rating of 4.5, this restaurant offers fair prices for quality meals in a lovely atmosphere."
            },
            it: {
                name: "U Babbio",
                description: "La Chiesa della Santa Croce può essere sulla vostra rotta per impostazione predefinita, la raccomandazione dei clienti è di visitare questo ristorante. U Babbio è famoso per servire cucina italiana e mediterranea. Molte persone visitano questo posto per assaggiare busiate perfettamente cotte, sardine e antipasto. Il prosecco delizioso riceve recensioni positive. Questo posto ha un buon caffè tra le sue bevande. La posizione comoda di questo ristorante lo rende facile da raggiungere anche nelle ore di punta. Si dice che il personale sia esperto qui. Il servizio professionale mostra un alto livello di qualità. Con una valutazione Google di 4,5, questo ristorante offre prezzi giusti per pasti di qualità in un'atmosfera incantevole."
            },
            fr: {
                name: "U Babbio",
                description: "L'Église de la Sainte Croix peut être sur votre itinéraire par défaut, la recommandation des clients est de visiter ce restaurant. U Babbio est célèbre pour servir des cuisines italiennes et méditerranéennes. Beaucoup de gens visitent cet endroit pour goûter des busiate parfaitement cuites, sardines et antipasto. Le prosecco délicieux reçoit des avis positifs. Cet endroit a un bon café parmi ses boissons. L'emplacement pratique de ce restaurant le rend facile à atteindre même aux heures de pointe. Le personnel est dit compétent ici. Le service professionnel affiche un haut niveau de qualité. Avec une note Google de 4,5, ce restaurant offre des prix justes pour des repas de qualité dans une atmosphère charmante."
            },
            es: {
                name: "U Babbio",
                description: "La Iglesia de la Santa Cruz puede estar en su ruta por defecto, la recomendación de los clientes es visitar este restaurante. U Babbio es famoso por servir cocina italiana y mediterránea. Muchas personas visitan este lugar para probar busiate perfectamente cocinadas, sardinas y antipasto. El prosecco delicioso recibe críticas positivas. Este lugar tiene un buen café entre sus bebidas. La ubicación conveniente de este restaurante lo hace fácil de alcanzar incluso en horas pico. Se dice que el personal es experto aquí. El servicio profesional muestra un alto nivel de calidad. Con una calificación de Google de 4,5, este restaurante ofrece precios justos por comidas de calidad en una atmósfera encantadora."
            }
        },
        priceRange: "€16-36 per person",
        cuisine: "Italian, Mediterranean, Healthy food",
        image: "https://media-cdn.tripadvisor.com/media/photo-o/14/30/24/63/market.jpg",
        referent: "Fiamma",
        address: "Via Principe Scordia, 104, Palermo, Sicily, Italy",
        phone: "+39 091 910 1627",
        instagram: "@ubabbio",
        openHours: "Sun: 9AM-5PM; Mon, Wed-Fri: 6:30PM-11PM; Sat: 12PM-11PM; Tue: Closed",
        type: "Dinner"
    }
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
    },
    {
        id: "osteria-dei-vespri-michelin",
        translations: {
            en: {
                name: "Osteria dei Vespri",
                description: "A Michelin-selected restaurant near Fontana del Genio, offering refined Italian cuisine with a focus on seafood. Notable dishes include antipasto, pork belly, and seared tuna, with delicious fruit cakes, cookies, and parfait for dessert. The restaurant serves good chardonnay, cordial, and fino sherry, along with exquisite ristretto and lemonade. Appreciated for its attractive staff, spectacular service, and democratic prices, this restaurant features cute decor and a charming atmosphere. It has received 2 black knife and fork symbols from Michelin, indicating optimal comfort."
            },
            it: {
                name: "Osteria dei Vespri",
                description: "Un ristorante selezionato da Michelin vicino alla Fontana del Genio, che offre cucina italiana raffinata con un focus sui frutti di mare. I piatti notevoli includono antipasto, pancetta di maiale e tonno scottato, con deliziose torte di frutta, biscotti e parfait per dessert. Il ristorante serve buon chardonnay, cordial e fino sherry, insieme a ristretto squisito e limonata. Apprezzato per il suo staff attraente, servizio spettacolare e prezzi democratici, questo ristorante presenta un arredamento carino e un'atmosfera affascinante. Ha ricevuto 2 simboli di coltello e forchetta neri da Michelin, indicando comfort ottimale."
            },
            fr: {
                name: "Osteria dei Vespri",
                description: "Un restaurant sélectionné par Michelin près de la Fontana del Genio, offrant une cuisine italienne raffinée avec un accent sur les fruits de mer. Les plats notables incluent antipasto, poitrine de porc et thon saisi, avec de délicieuses tartes aux fruits, biscuits et parfait pour le dessert. Le restaurant sert bon chardonnay, cordial et fino sherry, ainsi que ristretto exquis et limonade. Apprécié pour son personnel attrayant, service spectaculaire et prix démocratiques, ce restaurant présente une décoration mignonne et une atmosphère charmante. Il a reçu 2 symboles de couteau et fourchette noirs de Michelin, indiquant un confort optimal."
            },
            es: {
                name: "Osteria dei Vespri",
                description: "Un restaurante seleccionado por Michelin cerca de la Fontana del Genio, que ofrece cocina italiana refinada con un enfoque en mariscos. Los platos notables incluyen antipasto, panceta de cerdo y atún sellado, con deliciosas tartas de frutas, galletas y parfait para postre. El restaurante sirve buen chardonnay, cordial y fino sherry, junto con ristretto exquisito y limonada. Apreciado por su personal atractivo, servicio espectacular y precios democráticos, este restaurante presenta una decoración linda y una atmósfera encantadora. Ha recibido 2 símbolos de cuchillo y tenedor negros de Michelin, indicando comodidad óptima."
            }
        },
        priceRange: "€35-150 per person",
        cuisine: "Italian, Seafood, Wine Bars",
        image: "https://media-cdn.tripadvisor.com/media/photo-o/10/8f/ef/1e/interno-ristorante-versione.jpg",
        referent: "Andrea",
        address: "Piazza Croce dei Vespri, 6, Palermo, Sicily",
        phone: "+39 091 617 1631",
        website: "osteriadeivespri.it",
        instagram: "@osteria_dei_vespri",
        openHours: "Mon-Sat: 12:30PM-2:45PM, 7:30PM-10:45PM; Sun: Closed",
        michelinStars: "Michelin Selected",
        type: "Michelin"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { restaurantsDatabase, michelinRestaurantsDatabase };
}
