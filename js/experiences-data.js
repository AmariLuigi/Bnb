/**
 * ============================================================================
 * CENTRALIZED EXPERIENCES DATABASE
 * ============================================================================
 * 
 * This file contains ALL experiences data in a centralized, language-agnostic
 * structure. Each experience is defined ONCE with translations for all
 * supported languages.
 * 
 * IMPORTANT: This is the ONLY place where experiences data should be defined.
 * 
 * ============================================================================
 * STRUCTURE
 * ============================================================================
 * 
 * Each experience object has:
 * - id: Unique identifier (lowercase, hyphens for spaces)
 * - translations: Object with language codes (en, it, fr, es) containing:
 *   - name: Experience name in that language
 *   - description: Description in that language
 *   - note: Optional notes in that language
 * - Language-agnostic fields (same across all languages):
 *   - duration: Duration information
 *   - price: Pricing information
 *   - image: Experience image URL (placeholder for now)
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
 * Main experiences database
 * All local experiences offered by the B&B and partners
 */
const experiencesDatabase = [
    {
        id: "discovering-palermo-walking-tour",
        translations: {
            en: {
                name: "Discovering Palermo - Architectures, alleys, streets, markets, folklore",
                description: "Walking tour of the historic center to discover the millenary history of Palermo, a unique melting pot in the world for its incredible richness and variety of the most representative testimonies of the peoples and civilizations that have succeeded and overlapped. In the narrow streets of the city, one is overwhelmed by the magnificent cultural stratification that makes this metropolis a seductive and unforgettable place. From the sumptuous Teatro Massimo, to the suggestive Capo Market, up to the Cathedral and the Palazzo dei Normanni with the Palatine Chapel, jewel of the city. Passing by the \"Quattro Canti\" and \"Piazza della Vergogna\" to conclude our visit to Piazza Bellini with the red domes of the Martorana and San Cataldo churches.",
                note: "Any entrances to historic buildings or monuments are not included in the price and this is not expressly indicated"
            },
            it: {
                name: "Scoprire Palermo - Architetture, vicoli, strade, mercati, folklore",
                description: "Tour a piedi del centro storico per scoprire la millenaria storia di Palermo, un melting pot unico al mondo per la sua incredibile ricchezza e varietà delle testimonianze più rappresentative dei popoli e delle civiltà che si sono susseguite e sovrapposte. Nelle strade strette della città si viene sopraffatti dalla magnifica stratificazione culturale che rende questa metropoli un luogo seducente e indimenticabile. Dal sontuoso Teatro Massimo, al suggestivo Mercato del Capo, fino alla Cattedrale e al Palazzo dei Normanni con la Cappella Palatina, gioiello della città. Passando per i \"Quattro Canti\" e \"Piazza della Vergogna\", concludendo la visita a Piazza Bellini con le cupole rosse delle chiese di Martorana e San Cataldo.",
                note: "Gli ingressi a edifici storici o monumenti non sono inclusi nel prezzo e non sono espressamente indicati."
            },
            fr: {
                name: "Découvrir Palerme - Architectures, ruelles, rues, marchés, folklore",
                description: "Visite à pied du centre historique pour découvrir l'histoire millénaire de Palerme, un melting-pot unique au monde pour son incroyable richesse et variété des témoignages les plus représentatifs des peuples et civilisations qui se sont succédé et superposés. Dans les rues étroites de la ville, on est submergé par la magnifique stratification culturelle qui fait de cette métropole un lieu séduisant et inoubliable. Du somptueux Teatro Massimo, au suggestif marché de Capo, jusqu'à la Cathédrale et au Palazzo dei Normanni avec la Chapelle Palatine, joyau de la ville. En passant par les \"Quattro Canti\" et la \"Piazza della Vergogna\" pour conclure notre visite à Piazza Bellini avec les dômes rouges des églises Martorana et San Cataldo.",
                note: "Les entrées aux bâtiments historiques ou monuments ne sont pas incluses dans le prix et ne sont pas expressément indiquées"
            },
            es: {
                name: "Descubrir Palermo - Arquitecturas, callejones, calles, mercados, folklore",
                description: "Recorrido a pie por el centro histórico para descubrir la historia milenaria de Palermo, un crisol único en el mundo por su increíble riqueza y variedad de los testimonios más representativos de los pueblos y civilizaciones que se han sucedido y superpuesto. En las calles estrechas de la ciudad, uno se ve abrumado por la magnífica estratificación cultural que hace de esta metrópolis un lugar seductor e inolvidable. Desde el suntuoso Teatro Massimo, hasta el sugestivo Mercado de Capo, hasta la Catedral y el Palazzo dei Normanni con la Capilla Palatina, joya de la ciudad. Pasando por los \"Quattro Canti\" y la \"Piazza della Vergogna\" para concluir nuestra visita en Piazza Bellini con las cúpulas rojas de las iglesias Martorana y San Cataldo.",
                note: "Las entradas a edificios históricos o monumentos no están incluidas en el precio y esto no está expresamente indicado"
            }
        },
        duration: "3 hours - Departure at 9am or 3pm",
        price: "2/3 pax - €100 per person | 4/5 pax - €50 per person | 6+ pax - €45 per person + headset included",
        image: "images/attractions/placeholder.jpg"
    },
    {
        id: "street-food-aperitif-tour",
        translations: {
            en: {
                name: "An itinerant aperitif between Art Culture History and Street Food",
                description: "An itinerant aperitif along the streets of the historic center of Palermo, one of the most renowned cities for its STREET FOOD, on par if not above rivals such as Bangkok, Mumbai, Istanbul, Seville. A sensory experience for the taste buds of the most daring but also a cultural and historical experience to discover what the nobles ate, through the story of ancient recipes with stops to taste typical foods. Concluding the tour with a good glass of wine, 'a gritta' on the now dry \"balates\" of a Vucciria that has given up market clothes to put on those of the eat-and-drink matron.",
                note: "Tastings are included in the price (panelle, crocche, sfincione, bread with spleen, glass of wine). Minimum 4 participants."
            },
            it: {
                name: "Un aperitivo itinerante tra Arte, Cultura, Storia e Street Food",
                description: "Un aperitivo itinerante lungo le strade del centro storico di Palermo, una delle città più rinomate per il suo STREET FOOD, paragonabile, se non superiore, a rivali come Bangkok, Mumbai, Istanbul, Siviglia. Un'esperienza sensoriale per le papille gustative dei più audaci, ma anche un'esperienza culturale e storica per scoprire cosa mangiavano i nobili, attraverso la narrazione delle antiche ricette con soste per assaporare cibi tipici. Concluderemo il tour con un buon bicchiere di vino, 'a gritta' sui \"balates\" ormai asciutti di una Vucciria che ha abbandonato i vestiti del mercato per indossare quelli della matrona da mangiare e bere.",
                note: "Le degustazioni sono incluse nel prezzo (panelle, crocchè, sfincione, pane con la milza, bicchiere di vino). Minimo 4 partecipanti."
            },
            fr: {
                name: "Un apéritif itinérant entre Art Culture Histoire et Street Food",
                description: "Un apéritif itinérant dans les rues du centre historique de Palerme, l'une des villes les plus renommées pour sa STREET FOOD, au même niveau sinon supérieure à des rivales comme Bangkok, Mumbai, Istanbul, Séville. Une expérience sensorielle pour les papilles gustatives des plus audacieux mais aussi une expérience culturelle et historique pour découvrir ce que mangeaient les nobles, à travers le récit de recettes anciennes avec des arrêts pour goûter des plats typiques. Concluant la visite avec un bon verre de vin, 'a gritta' sur les \"balates\" maintenant sèches d'une Vucciria qui a abandonné les vêtements du marché pour mettre ceux de la matrone mangeuse et buveuse.",
                note: "Les dégustations sont incluses dans le prix (panelle, crocchè, sfincione, pain avec rate, verre de vin). Minimum 4 participants."
            },
            es: {
                name: "Un aperitivo itinerante entre Arte Cultura Historia y Street Food",
                description: "Un aperitivo itinerante por las calles del centro histórico de Palermo, una de las ciudades más reconocidas por su STREET FOOD, al nivel si no superior a rivales como Bangkok, Mumbai, Estambul, Sevilla. Una experiencia sensorial para las papilas gustativas de los más atrevidos pero también una experiencia cultural e histórica para descubrir qué comían los nobles, a través de la historia de recetas antiguas con paradas para degustar comidas típicas. Concluyendo el recorrido con una buena copa de vino, 'a gritta' en las \"balates\" ahora secas de una Vucciria que ha abandonado la ropa del mercado para ponerse la de la matrona comedora y bebedora.",
                note: "Las degustaciones están incluidas en el precio (panelle, crocchè, sfincione, pan con bazo, copa de vino). Mínimo 4 participantes."
            }
        },
        duration: "2 hours - Departure at 5:30pm",
        price: "4 pax - €60 per person | 5+ pax - €50 per person",
        image: "images/attractions/placeholder.jpg"
    },
    {
        id: "arab-norman-itinerary",
        translations: {
            en: {
                name: "The Kingdom of the Sun - Arab-Norman itinerary, between red domes and glittering mosaics",
                description: "\"This island has a magical effect on all who set foot on it, regardless of the religion to which they belong.\" (al-Idrisi). A walking tour between workers and beauty, of the splendid treasures of the Unesco heritage that Palermo jealously guards, to discover the Arab-Norman monuments, an expression of cultural syncretism and the happy coexistence in the Middle Ages between the different ethnic groups: Arab, Norman and Byzantine. From the splendid Royal Palace with the Palatine Chapel with dazzling mosaics, and still the Cathedral where Frederick II and the imperial family rest, the church of San Giovanni degli Eremiti, emblem of the architectural fusion between the Arab and Norman styles, that of San Cataldo with the three small red domes symbol of the city and then Santa Maria dell'Ammiraglio where the beauty of this site is given precisely by the mixture of different styles and religious references.",
                note: "Any entrances to historic buildings or monuments are not included in the price and this is not expressly indicated"
            },
            it: {
                name: "Il Regno del Sole - Itinerario arabo-normanno, tra cupole rosse e mosaici scintillanti",
                description: "\"Quest'isola ha un effetto magico su chiunque vi metta piede, indipendentemente dalla religione a cui appartiene.\" (al-Idrisi). Un tour a piedi tra lavoro e bellezza, dei splendidi tesori del patrimonio Unesco che Palermo custodisce gelosamente, per scoprire i monumenti arabo-normanni, espressione di sincretismo culturale e della felice convivenza nel Medioevo tra i diversi gruppi etnici: arabo, normanno e bizantino. Dallo splendido Palazzo Reale con la Cappella Palatina con i suoi mosaici abbaglianti, alla Cattedrale dove riposano Federico II e la famiglia imperiale, alla chiesa di San Giovanni degli Eremiti, simbolo della fusione architettonica tra stili arabi e normanni, quella di San Cataldo con le tre piccole cupole rosse simbolo della città e infine Santa Maria dell'Ammiraglio, dove la bellezza di questo sito è proprio data dalla fusione di stili e riferimenti religiosi diversi.",
                note: "Gli ingressi a edifici storici o monumenti non sono inclusi nel prezzo e non sono espressamente indicati."
            },
            fr: {
                name: "Le Royaume du Soleil - Itinéraire arabo-normand, entre dômes rouges et mosaïques scintillantes",
                description: "\"Cette île a un effet magique sur tous ceux qui y mettent les pieds, quelle que soit la religion à laquelle ils appartiennent.\" (al-Idrisi). Une visite à pied entre travailleurs et beauté, des splendides trésors du patrimoine de l'Unesco que Palerme garde jalousement, pour découvrir les monuments arabo-normands, expression du syncrétisme culturel et de la coexistence heureuse au Moyen Âge entre les différents groupes ethniques : arabe, normand et byzantin. Du splendide Palais Royal avec la Chapelle Palatine aux mosaïques éblouissantes, et encore la Cathédrale où reposent Frédéric II et la famille impériale, l'église de San Giovanni degli Eremiti, emblème de la fusion architecturale entre les styles arabe et normand, celle de San Cataldo avec les trois petits dômes rouges symbole de la ville et enfin Santa Maria dell'Ammiraglio où la beauté de ce site est donnée précisément par le mélange de styles différents et de références religieuses.",
                note: "Les entrées aux bâtiments historiques ou monuments ne sont pas incluses dans le prix et ne sont pas expressément indiquées"
            },
            es: {
                name: "El Reino del Sol - Itinerario árabe-normando, entre cúpulas rojas y mosaicos brillantes",
                description: "\"Esta isla tiene un efecto mágico en todos los que ponen un pie en ella, independientemente de la religión a la que pertenezcan.\" (al-Idrisi). Un recorrido a pie entre trabajadores y belleza, de los espléndidos tesoros del patrimonio de la Unesco que Palermo guarda celosamente, para descubrir los monumentos árabe-normandos, expresión del sincretismo cultural y de la feliz convivencia en la Edad Media entre los diferentes grupos étnicos: árabe, normando y bizantino. Desde el espléndido Palacio Real con la Capilla Palatina con mosaicos deslumbrantes, y aún la Catedral donde descansan Federico II y la familia imperial, la iglesia de San Giovanni degli Eremiti, emblema de la fusión arquitectónica entre los estilos árabe y normando, la de San Cataldo con las tres pequeñas cúpulas rojas símbolo de la ciudad y luego Santa Maria dell'Ammiraglio donde la belleza de este sitio está dada precisamente por la mezcla de diferentes estilos y referencias religiosas.",
                note: "Las entradas a edificios históricos o monumentos no están incluidas en el precio y esto no está expresamente indicado"
            }
        },
        duration: "3.5 hours - Morning only subject to site opening availability",
        price: "2/3 pax - €100 per person | 4/5 pax - €50 per person | 6+ pax - €45 per person + headset included",
        image: "images/attractions/placeholder.jpg"
    },
    {
        id: "florios-dynasty-walking-tour",
        translations: {
            en: {
                name: "The Florios a dynasty - walking tour",
                description: "A historic journey through life, businesses, successes and loves, which led a family of Calabrian aromatari to become the lords of Palermo and the protagonists of the world of finance and the international jet set in an itinerary full of emotions. From the Loggia district, where the Florios had their headquarters: the house and the first activity to end up at the Massimo theater, a journey narrating the different sectors to which they dedicated themselves: maritime sector, tuna traps, wine, ceramics, etc. A novel life, made of splendor and wealth but not immune to betrayals and painful family events, with deaths and debts that would have caused its collapse. We will trace a profile of the family members from the most famous such as the progenitor Vincenzo Florio, the creator of the myth, up to his sons Ignazio and Vincenzo who together with Donna Franca Florio were the great protagonists of the Sicilian Belle Époque.",
                note: "Any entrances to historic buildings or monuments are not included in the price and this is not expressly indicated"
            },
            it: {
                name: "I Florio, una dinastia - tour a piedi",
                description: "Un viaggio storico attraverso la vita, gli affari, i successi e gli amori, che ha portato una famiglia di aromatari calabresi a diventare i signori di Palermo e protagonisti del mondo della finanza e del jet set internazionale, in un itinerario ricco di emozioni. Dal quartiere della Loggia, dove i Florio avevano la loro sede: la casa e la prima attività, per finire al Teatro Massimo, un percorso che racconta i vari settori a cui si dedicarono: settore marittimo, tonnare, vino, ceramiche, ecc. Una vita da romanzo, fatta di splendore e ricchezza ma non immune a tradimenti ed eventi dolorosi della famiglia, con morti e debiti che ne avrebbero causato il crollo. Ripercorreremo il profilo dei membri della famiglia, dai più famosi come il capostipite Vincenzo Florio, creatore del mito, fino ai suoi figli Ignazio e Vincenzo che insieme a Donna Franca Florio sono stati i grandi protagonisti della Belle Époque siciliana.",
                note: "Gli ingressi a edifici storici o monumenti non sono inclusi nel prezzo e non sono espressamente indicati."
            },
            fr: {
                name: "Les Florio une dynastie - visite à pied",
                description: "Un voyage historique à travers la vie, les affaires, les succès et les amours, qui ont conduit une famille d'aromatari calabrais à devenir les seigneurs de Palerme et les protagonistes du monde de la finance et du jet set international dans un itinéraire plein d'émotions. Du quartier de la Loggia, où les Florio avaient leur siège : la maison et la première activité pour finir au théâtre Massimo, un voyage narrant les différents secteurs auxquels ils se sont consacrés : secteur maritime, thonières, vin, céramiques, etc. Une vie de roman, faite de splendeur et de richesse mais non immune aux trahisons et aux événements familiaux douloureux, avec des morts et des dettes qui auraient causé son effondrement. Nous tracerons un profil des membres de la famille des plus célèbres tels que le progéniteur Vincenzo Florio, le créateur du mythe, jusqu'à ses fils Ignazio et Vincenzo qui avec Donna Franca Florio ont été les grands protagonistes de la Belle Époque sicilienne.",
                note: "Les entrées aux bâtiments historiques ou monuments ne sont pas incluses dans le prix et ne sont pas expressément indiquées"
            },
            es: {
                name: "Los Florio una dinastía - recorrido a pie",
                description: "Un viaje histórico a través de la vida, los negocios, los éxitos y los amores, que llevaron a una familia de aromatari calabreses a convertirse en los señores de Palermo y los protagonistas del mundo de las finanzas y del jet set internacional en un itinerario lleno de emociones. Desde el barrio de la Loggia, donde los Florio tenían su sede: la casa y la primera actividad para terminar en el teatro Massimo, un viaje narrando los diferentes sectores a los que se dedicaron: sector marítimo, almadrabas, vino, cerámicas, etc. Una vida de novela, hecha de esplendor y riqueza pero no inmune a traiciones y eventos familiares dolorosos, con muertes y deudas que habrían causado su colapso. Trazaremos un perfil de los miembros de la familia desde los más famosos como el progenitor Vincenzo Florio, el creador del mito, hasta sus hijos Ignazio y Vincenzo que junto con Donna Franca Florio fueron los grandes protagonistas de la Belle Époque siciliana.",
                note: "Las entradas a edificios históricos o monumentos no están incluidas en el precio y esto no está expresamente indicado"
            }
        },
        duration: "3 hours - 9/10am or 2/3pm",
        price: "2/3 pax - €100 per person | 4/5 pax - €50 per person | 6+ pax - €45 per person + headset included",
        image: "images/attractions/placeholder.jpg"
    },
    {
        id: "florios-belle-epoque-tour",
        translations: {
            en: {
                name: "The Florios a dynasty - The Palermitan Belle Époque of the Florios - with NCC",
                description: "We will take you to discover the places of the Florios and their history. A family that between the 1800s and 1900s was the protagonist of \"HAPPY\" Palermo, when the greatness of the Florios, in the Palermitan Belle Epoque, made Sicily the center of Europe. Our visit will start from the Villino Florio all'Olivuzza, a building immersed in a splendid garden, among modern buildings commissioned by the Florios to the architect Ernesto Basile, passing through Villa Malfitano-Whitaker to end up at the Arenella house with a visit to the Quattro Pizzi designed by architect Carlo Giachery. Telling about this family protagonist of the cultural, artistic and social awakening, which made Palermo the favorite destination of crowned heads, high finance characters, travellers, Italian and foreign artists and writers, fascinated by the aura of worldliness and light-heartedness that characterized the Belle Epoque. The undisputed queen of the period was Donna Franca Florio, courted by D'Annunzio and considered the queen of Palermo.",
                note: "Any entrances to historic buildings or monuments are not included in the price and this is not expressly indicated"
            },
            it: {
                name: "I Florio, una dinastia - La Belle Époque palermitana dei Florio - con NCC",
                description: "Ti porteremo alla scoperta dei luoghi dei Florio e della loro storia. Una famiglia che tra l'800 e il 900 è stata protagonista della \"FELICE\" Palermo, quando la grandezza dei Florio, nella Belle Epoque palermitana, ha reso la Sicilia il centro d'Europa. La nostra visita inizierà dal Villino Florio all'Olivuzza, una costruzione immersa in un splendido giardino, tra edifici moderni commissionati dai Florio all'architetto Ernesto Basile, passando per Villa Malfitano-Whitaker fino ad arrivare alla casa dell'Arenella con una visita ai Quattro Pizzi progettati dall'architetto Carlo Giachery. Racconteremo di questa famiglia protagonista del risveglio culturale, artistico e sociale che ha reso Palermo la meta preferita di teste coronate, personaggi della alta finanza, viaggiatori, artisti e scrittori italiani e stranieri, affascinati dall'aura di mondanità e leggerezza che caratterizzava la Belle Époque. La regina indiscussa di quel periodo fu Donna Franca Florio, corteggiata da D'Annunzio e considerata la regina di Palermo.",
                note: "Gli ingressi a edifici storici o monumenti non sono inclusi nel prezzo e non sono espressamente indicati."
            },
            fr: {
                name: "Les Florio une dynastie - La Belle Époque palermitaine des Florio - avec NCC",
                description: "Nous vous emmènerons découvrir les lieux des Florio et leur histoire. Une famille qui entre les années 1800 et 1900 a été la protagoniste de Palerme \"HEUREUSE\", quand la grandeur des Florio, dans la Belle Époque palermitaine, a fait de la Sicile le centre de l'Europe. Notre visite commencera au Villino Florio all'Olivuzza, un bâtiment immergé dans un splendide jardin, parmi des bâtiments modernes commandés par les Florio à l'architecte Ernesto Basile, en passant par la Villa Malfitano-Whitaker pour finir à la maison d'Arenella avec une visite des Quattro Pizzi conçus par l'architecte Carlo Giachery. Racontant cette famille protagoniste du réveil culturel, artistique et social, qui a fait de Palerme la destination préférée des têtes couronnées, des personnages de la haute finance, des voyageurs, des artistes et écrivains italiens et étrangers, fascinés par l'aura de mondanité et de légèreté qui caractérisait la Belle Époque. La reine incontestée de la période était Donna Franca Florio, courtisée par D'Annunzio et considérée comme la reine de Palerme.",
                note: "Les entrées aux bâtiments historiques ou monuments ne sont pas incluses dans le prix et ne sont pas expressément indiquées"
            },
            es: {
                name: "Los Florio una dinastía - La Belle Époque palermitana de los Florio - con NCC",
                description: "Te llevaremos a descubrir los lugares de los Florio y su historia. Una familia que entre los años 1800 y 1900 fue protagonista de Palermo \"FELIZ\", cuando la grandeza de los Florio, en la Belle Époque palermitana, hizo de Sicilia el centro de Europa. Nuestra visita comenzará desde el Villino Florio all'Olivuzza, un edificio inmerso en un espléndido jardín, entre edificios modernos encargados por los Florio al arquitecto Ernesto Basile, pasando por Villa Malfitano-Whitaker para terminar en la casa de Arenella con una visita a los Quattro Pizzi diseñados por el arquitecto Carlo Giachery. Contando sobre esta familia protagonista del despertar cultural, artístico y social, que hizo de Palermo el destino favorito de cabezas coronadas, personajes de las altas finanzas, viajeros, artistas y escritores italianos y extranjeros, fascinados por el aura de mundanidad y ligereza que caracterizaba la Belle Époque. La reina indiscutible del período fue Donna Franca Florio, cortejada por D'Annunzio y considerada la reina de Palermo.",
                note: "Las entradas a edificios históricos o monumentos no están incluidas en el precio y esto no está expresamente indicado"
            }
        },
        duration: "4 hours - Saturday afternoon and Sunday morning only",
        price: "2/3 pax - €150 per person | 4/5 pax - €125 per person | 5-7 pax - €55 per person",
        image: "images/attractions/placeholder.jpg"
    },
    {
        id: "arab-norman-cathedrals-tour",
        translations: {
            en: {
                name: "Tour of the Arab-Norman Cathedrals by train and NCC",
                description: "For more than half a century, during the Norman domination, the 4 most interesting cathedrals in Palermo and its province were built. Palatine Chapel of the Saints Peter and Paul Apostles of Palermo from 1130, inserted in the remarkable complex of the Norman Palace by Roger II of Sicily. The Church of the Martorana or Santa Maria dell'Ammiraglio in Palermo by work, in 1143, by Giorgio d'Antiochia, admiral of the Gran Conte Ruggero. In 1159, by Roger II of Sicily, the Church of San Leonardo di Cefalù, originally dedicated to San Giorgio. Finally, in 1185 William II, known as the \"good\", had decided to build it in Monreale. A tour that defines the architectural importance of the Normans.",
                note: "Any entrances to historic buildings or monuments are not included in the price and this is not expressly indicated"
            },
            it: {
                name: "Tour delle Cattedrali Arabo-Normanne in treno e NCC",
                description: "Per oltre mezzo secolo, durante il dominio normanno, sono state costruite le 4 cattedrali più interessanti di Palermo e della sua provincia. La Cappella Palatina dei Santi Pietro e Paolo Apostoli di Palermo, del 1130, inserita nel complesso notevole del Palazzo Normanno di Ruggero II di Sicilia. La Chiesa della Martorana o Santa Maria dell'Ammiraglio a Palermo, costruita nel 1143 da Giorgio d'Antiochia, ammiraglio del Gran Conte Ruggero. Nel 1159, Ruggero II di Sicilia, la Chiesa di San Leonardo di Cefalù, originariamente dedicata a San Giorgio. Infine, nel 1185, Guglielmo II, detto il \"buono\", decise di costruirla a Monreale. Un tour che definisce l'importanza architettonica dei Normanni.",
                note: "Gli ingressi a edifici storici o monumenti non sono inclusi nel prezzo e non sono espressamente indicati."
            },
            fr: {
                name: "Tour des Cathédrales arabo-normandes en train et NCC",
                description: "Pendant plus d'un demi-siècle, pendant la domination normande, les 4 cathédrales les plus intéressantes de Palerme et de sa province ont été construites. Chapelle Palatine des Saints Pierre et Paul Apôtres de Palerme de 1130, insérée dans le complexe remarquable du Palais Normand par Roger II de Sicile. L'Église de la Martorana ou Santa Maria dell'Ammiraglio à Palerme par l'œuvre, en 1143, de Giorgio d'Antiochia, amiral du Gran Conte Ruggero. En 1159, par Roger II de Sicile, l'Église de San Leonardo di Cefalù, originellement dédiée à San Giorgio. Enfin, en 1185 Guillaume II, connu comme le \"bon\", avait décidé de la construire à Monreale. Une visite qui définit l'importance architecturale des Normands.",
                note: "Les entrées aux bâtiments historiques ou monuments ne sont pas incluses dans le prix et ne sont pas expressément indiquées"
            },
            es: {
                name: "Tour de las Catedrales árabe-normandas en tren y NCC",
                description: "Durante más de medio siglo, durante la dominación normanda, se construyeron las 4 catedrales más interesantes de Palermo y su provincia. Capilla Palatina de los Santos Pedro y Pablo Apóstoles de Palermo de 1130, insertada en el notable complejo del Palacio Normando por Roger II de Sicilia. La Iglesia de la Martorana o Santa Maria dell'Ammiraglio en Palermo por obra, en 1143, de Giorgio d'Antiochia, almirante del Gran Conte Ruggero. En 1159, por Roger II de Sicilia, la Iglesia de San Leonardo di Cefalù, originalmente dedicada a San Giorgio. Finalmente, en 1185 Guillermo II, conocido como el \"bueno\", había decidido construirla en Monreale. Un recorrido que define la importancia arquitectónica de los normandos.",
                note: "Las entradas a edificios históricos o monumentos no están incluidas en el precio y esto no está expresamente indicado"
            }
        },
        duration: "4-5 hours - Includes train ticket and transfer to Monreale",
        price: "2/3 pax - €140 per person | 4/5 pax - €120 per person | 6+ pax - €100 per person",
        image: "images/attractions/placeholder.jpg"
    },
    {
        id: "cooking-class-chef",
        translations: {
            en: {
                name: "Cooking Class with Our Chef",
                description: "A dive through the streets of the city to discover the folk market of the Capo, among the voices of the merchants and the colors of the fruit and the scents of the spices that characterize it. You will choose with the chef what you want to eat, based on the seasonality and what you like best, you will end up at his house and he will teach you the typical recipes to conclude the lunch comfortably seated at the table, like among old friends.",
                note: "Includes market visit, cooking class, and lunch."
            },
            it: {
                name: "Lezione di cucina con il nostro Chef",
                description: "Un'immersione tra le strade della città per scoprire il mercato popolare del Capo, tra le voci dei mercanti, i colori della frutta e i profumi delle spezie che lo caratterizzano. Sceglierai con lo chef cosa mangiare, in base alla stagionalità e a quello che ti piace di più, per poi arrivare a casa sua e imparare le ricette tipiche per concludere il pranzo comodamente seduti a tavola, come tra vecchi amici.",
                note: "Include visita al mercato, lezione di cucina e pranzo."
            },
            fr: {
                name: "Cours de cuisine avec notre Chef",
                description: "Une plongée dans les rues de la ville pour découvrir le marché populaire de Capo, parmi les voix des marchands et les couleurs des fruits et les parfums des épices qui le caractérisent. Vous choisirez avec le chef ce que vous voulez manger, en fonction de la saisonnalité et de ce que vous aimez le plus, vous finirez chez lui et il vous enseignera les recettes typiques pour conclure le déjeuner confortablement assis à table, comme parmi de vieux amis.",
                note: "Comprend la visite du marché, le cours de cuisine et le déjeuner."
            },
            es: {
                name: "Clase de cocina con nuestro Chef",
                description: "Una inmersión por las calles de la ciudad para descubrir el mercado popular de Capo, entre las voces de los comerciantes y los colores de las frutas y los aromas de las especias que lo caracterizan. Elegirás con el chef lo que quieres comer, según la temporada y lo que más te guste, terminarás en su casa y te enseñará las recetas típicas para concluir el almuerzo cómodamente sentado a la mesa, como entre viejos amigos.",
                note: "Incluye visita al mercado, clase de cocina y almuerzo."
            }
        },
        duration: "3-4 hours",
        price: "€130 per person",
        image: "images/attractions/placeholder.jpg"
    },
    {
        id: "sailing-palermo-coast",
        translations: {
            en: {
                name: "Sailing Along the Scents of Sicily - Palermo Coast Boat Tour",
                description: "Set sail for an unforgettable sailing experience along Palermo's coast. Discover hidden coves, crystal-clear waters, and breathtaking views. Enjoy the Mediterranean breeze as you explore the coastline, with an aperitif included. Dinner on board available on request for a truly magical evening at sea.",
                note: "For groups, the boat departs with a minimum of 4 participants. Aperitif included; dinner on request."
            },
            it: {
                name: "Navigare tra i Profumi della Sicilia - Tour in barca lungo la Costa di Palermo",
                description: "Salpa per un'esperienza di navigazione indimenticabile lungo la costa di Palermo. Scopri calette nascoste, acque cristalline e panorami mozzafiato. Goditi la brezza mediterranea mentre esplori la costa, con aperitivo incluso. Cena a bordo disponibile su richiesta per una serata davvero magica in mare.",
                note: "Per i gruppi, la barca parte con un minimo di 4 partecipanti. Aperitivo incluso; cena su richiesta."
            },
            fr: {
                name: "Navigation le long des Parfums de la Sicile - Tour en bateau sur la Côte de Palerme",
                description: "Embarquez pour une expérience de navigation inoubliable le long de la côte de Palerme. Découvrez des criques cachées, des eaux cristallines et des vues à couper le souffle. Profitez de la brise méditerranéenne en explorant la côte, avec un apéritif inclus. Dîner à bord disponible sur demande pour une soirée vraiment magique en mer.",
                note: "Pour les groupes, le bateau part avec un minimum de 4 participants. Apéritif inclus; dîner sur demande."
            },
            es: {
                name: "Navegando entre los Aromas de Sicilia - Tour en barco por la Costa de Palermo",
                description: "Zarpa para una experiencia de navegación inolvidable a lo largo de la costa de Palermo. Descubre calas escondidas, aguas cristalinas y vistas impresionantes. Disfruta de la brisa mediterránea mientras exploras la costa, con aperitivo incluido. Cena a bordo disponible bajo petición para una velada verdaderamente mágica en el mar.",
                note: "Para grupos, el barco zarpa con un mínimo de 4 participantes. Aperitivo incluido; cena bajo petición."
            }
        },
        duration: "Half day (various options available)",
        price: "Exclusive (2 pax) - €250 per person | 2 pax (non-exclusive) - €200 per person | 4 pax - €150 per person | 5-6 pax - €130 per person | 7-8 pax - €100 per person",
        image: "images/attractions/placeholder.jpg"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { experiencesDatabase };
}
