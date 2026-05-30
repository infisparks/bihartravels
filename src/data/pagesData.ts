export interface PageDetailData {
  slug: string;
  title: string;
  metaDescription: string;
  heading: string;
  subHeading?: string;
  duration?: string;
  distance?: string;
  overview: string;
  galleryImages: string[];
  features: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  touristPlaces?: { name: string; desc: string; img: string }[];
}

export const routesData: Record<string, PageDetailData> = {
  "patna-to-darbhanga-taxi": {
    slug: "patna-to-darbhanga-taxi",
    title: "Patna to Darbhanga Taxi Service | Affordable One-Way & Round-Trip Cabs",
    metaDescription: "Reliable Patna to Darbhanga taxi service. Choose from Sedan (Dzire, Etios), Ertiga (with/without carrier), SUV (Bolero, Scorpio), Innova Crysta, and Tempo Traveller. Book 24x7.",
    heading: "Patna to Darbhanga Taxi Service",
    duration: "3.5 Hours",
    distance: "140 Km",
    overview: "Connecting the capital city of Patna to the cultural hub of Darbhanga (Mithilanchal) is a journey of smooth highways, rich history, and agricultural beauty. Our premium taxi service offers a direct, hassle-free ride via NH 27. Whether you are traveling for business, family events, or tourism, our professional drivers ensure a comfortable and safe journey.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img1.jpg", "/images/destination-details-gallery-img2.jpg"],
    features: [
      { title: "NH 27 Highway Route", desc: "Enjoy a smooth drive through well-maintained national highways." },
      { title: "Experienced Drivers", desc: "Our drivers are well-trained and familiar with the Patna-Darbhanga corridor." },
      { title: "Flexible Stops", desc: "Stop at popular eateries or historical spots along the route." }
    ],
    touristPlaces: [
      { name: "Darbhanga Raj Fort", desc: "A majestic historical fort built by the Maharaja of Darbhanga, showcasing grand architecture.", img: "/images/destination-dt-location-img1.jpg" },
      { name: "Shyama Mai Temple", desc: "Located within the fort complex, this temple is famous for its serene environment and spiritual significance.", img: "/images/destination-dt-location-img2.jpg" },
      { name: "Chandradhari Museum", desc: "Houses a rare collection of antiquities, ivory carvings, royal artifacts, and manuscripts.", img: "/images/destination-dt-location-img3.jpg" }
    ],
    faqs: [
      { question: "What is the travel time from Patna to Darbhanga?", answer: "It takes approximately 3.5 hours to cover the distance of 140 km via the new highway route." },
      { question: "Can I book a one-way taxi from Patna to Darbhanga?", answer: "Yes, we specialize in dedicated one-way taxi services with drop-off directly at your location." },
      { question: "Which cars are available for booking?", answer: "We offer Sedan (Dzire, Etios), Ertiga (with or without luggage carrier), SUV (Scorpio, Bolero), Innova Crysta, and Tempo Travellers." }
    ]
  },
  "patna-to-muzaffarpur-taxi": {
    slug: "patna-to-muzaffarpur-taxi",
    title: "Patna to Muzaffarpur Taxi Service | Comfortable Cabs in Bihar",
    metaDescription: "Need a cab from Patna to Muzaffarpur? Book Sedan, SUV, Ertiga (with/without carrier), or Innova. Direct pickup, clean cars, no hidden charges. Call for best rates.",
    heading: "Patna to Muzaffarpur Taxi Service",
    duration: "2 Hours",
    distance: "75 Km",
    overview: "Travel from Patna to Muzaffarpur, the 'Litchi Kingdom' of India, with our premier taxi service. Perfect for business travelers, retail merchants, and families. The route is highly active, and we offer round-the-clock availability with absolute comfort.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img3.jpg", "/images/destination-details-gallery-img4.jpg"],
    features: [
      { title: "Fast Express Route", desc: "Reach Muzaffarpur in just under 2 hours via the Gandhi Setu and JP Setu connectivities." },
      { title: "Clean Air Conditioning", desc: "All our vehicles are fully air-conditioned and cleaned after every ride." },
      { title: "Corporate Discounts", desc: "Special pricing packages for regular corporate commuters." }
    ],
    touristPlaces: [
      { name: "Garib Nath Temple", desc: "One of the most famous shrines of Lord Shiva in Bihar, drawing huge crowds during Shravan.", img: "/images/destination-dt-location-img4.jpg" },
      { name: "Litchi Gardens", desc: "Explore the expansive orchards of Shahi Litchi that Muzaffarpur is globally famous for.", img: "/images/destination-dt-location-img5.jpg" }
    ],
    faqs: [
      { question: "What is the best route to travel to Muzaffarpur from Patna?", answer: "The highway via Hajipur is the standard and fastest route, taking about 2 hours under normal traffic conditions." },
      { question: "Are toll taxes included in the fare?", answer: "We provide complete clarity on toll taxes when you call to get your final quote." }
    ]
  },
  "patna-to-gaya-taxi": {
    slug: "patna-to-gaya-taxi",
    title: "Patna to Gaya Taxi Cabs | Reliable One-Way & Round Trip Cab Service",
    metaDescription: "Safe and comfortable Patna to Gaya taxi services. Book premium Sedan, SUV, Ertiga with carrier, and Innova. Clean cars, transparent pricing. 24x7 service.",
    heading: "Patna to Gaya Taxi Service",
    duration: "3 Hours",
    distance: "100 Km",
    overview: "Embark on a spiritual journey from Patna to Gaya, one of the most sacred pilgrimage destinations in India. Our dedicated taxi service guarantees a serene, peaceful ride, allowing you to focus on your spiritual goals without worrying about road safety.",
    galleryImages: ["/images/bodhgaya-mahabodhi.png", "/images/bihar-cab-highway.png", "/images/destination-details-gallery-img5.jpg"],
    features: [
      { title: "Pilgrim Friendly Support", desc: "Drivers trained to assist elderly passengers and guide tourists to temple entry points." },
      { title: "Flexible Itinerary", desc: "Easily extend your trip to include Bodh Gaya and Rajgir sightseeing." },
      { title: "Safe Night Travels", desc: "Secure GPS-tracked vehicles for safe highway driving at night." }
    ],
    touristPlaces: [
      { name: "Vishnupad Temple", desc: "An ancient temple dedicated to Lord Vishnu, located on the banks of the Falgu River.", img: "/images/destination-dt-location-img6.jpg" },
      { name: "Mangla Gauri Temple", desc: "One of the historic Shakti Peethas, situated on a hillock in Gaya.", img: "/images/destination-dt-location-img7.jpg" }
    ],
    faqs: [
      { question: "Can I do a same-day return trip to Gaya from Patna?", answer: "Yes, you can book a round-trip cab that picks you up early in the morning and drops you back by evening." },
      { question: "Is the road safe for family travel?", answer: "Absolutely. The four-lane highway connectivity makes the drive exceptionally safe and comfortable." }
    ]
  },
  "patna-to-madhubani-taxi": {
    slug: "patna-to-madhubani-taxi",
    title: "Patna to Madhubani Taxi Service | Mithila Tourism Cabs",
    metaDescription: "Book a Patna to Madhubani cab at best rates. Enjoy Mithila painting tours. Select from Ertiga (with/without carrier), Dzire, Innova, and SUVs. Ask for price today.",
    heading: "Patna to Madhubani Taxi Service",
    duration: "4.5 Hours",
    distance: "175 Km",
    overview: "Travel from Patna to Madhubani, the birthplace of the world-famous Mithila/Madhubani painting style. Dive deep into the heart of traditional art, lakes, and ancient shrines. Our premium fleet makes this long drive relaxed and highly enjoyable.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img1.jpg", "/images/destination-details-gallery-img2.jpg"],
    features: [
      { title: "Mithilanchal Corridor Connect", desc: "Quick and safe transport through the northern plains of Bihar." },
      { title: "Carrier Vehicles Available", desc: "Ertiga and Tempo Travellers with carriers for bulky art collections or family luggage." }
    ],
    touristPlaces: [
      { name: "Madhubani Art Village (Jitwarpur)", desc: "Interact directly with National Award-winning artists in their traditional studios.", img: "/images/destination-dt-location-img3.jpg" },
      { name: "Kapileshwar Asthan", desc: "A revered Shiva temple hosting traditional festivals and religious gatherings.", img: "/images/destination-dt-location-img4.jpg" }
    ],
    faqs: [
      { question: "What is the distance from Patna to Madhubani?", answer: "The distance is approximately 175 km, taking around 4.5 hours of driving time." }
    ]
  },
  "patna-to-samastipur-taxi": {
    slug: "patna-to-samastipur-taxi",
    title: "Patna to Samastipur Taxi Service | Direct One-Way Cab Rental",
    metaDescription: "Reliable Patna to Samastipur taxi. Clean cars, timely pickups, professional drivers. Choose Ertiga (with/without carrier), Sedans, and SUVs. Book now.",
    heading: "Patna to Samastipur Taxi Service",
    duration: "2.5 Hours",
    distance: "95 Km",
    overview: "Connecting Patna with the agricultural and railway hub of Samastipur. Ideal for commuters, traders, and government officials seeking a comfortable, reliable, and prompt travel alternative to crowded trains.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img3.jpg", "/images/destination-details-gallery-img4.jpg"],
    features: [
      { title: "24/7 Availability", desc: "Urgent or scheduled booking options whenever you need to travel." },
      { title: "Clean Air Conditioning", desc: "Ride through dusty highways in pristine dust-proof comfort." }
    ],
    touristPlaces: [
      { name: "Pusa Agricultural University", desc: "A prestigious historical research institution with a beautiful green campus.", img: "/images/destination-dt-location-img1.jpg" }
    ],
    faqs: [
      { question: "Can I book a one-way drop to Samastipur?", answer: "Yes, we provide dedicated one-way cab drops directly to your doorstep in Samastipur." }
    ]
  },
  "darbhanga-to-patna-taxi": {
    slug: "darbhanga-to-patna-taxi",
    title: "Darbhanga to Patna Taxi Service | One-Way & Round-Trip Cabs",
    metaDescription: "Book a reliable Darbhanga to Patna cab. 24x7 service for airport drops, hospital visits, and business travel. Choose Ertiga (with/without carrier), Dzire, SUV.",
    heading: "Darbhanga to Patna Taxi Service",
    duration: "3.5 Hours",
    distance: "140 Km",
    overview: "Need to travel from Darbhanga to the capital city of Patna? Avoid crowded trains and bus delays. Our professional cabs pick you up from any part of Darbhanga and drop you safely at Patna Airport, Patna Junction, AIIMS, or any other destination in Patna.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img5.jpg", "/images/destination-details-gallery-img1.jpg"],
    features: [
      { title: "Airport & Station Pickups", desc: "Punctual pickups to ensure you never miss a flight or train from Patna." },
      { title: "Safe Family Rides", desc: "Highly vetted drivers ensuring peace of mind for women and families." }
    ],
    touristPlaces: [
      { name: "Golghar, Patna", desc: "A massive granary showcasing ancient British engineering, offering panoramic city views.", img: "/images/destination-dt-location-img2.jpg" },
      { name: "Patna Museum", desc: "Explore ancient relics, Mauryan sculptures, and historical artifacts from the region.", img: "/images/destination-dt-location-img3.jpg" }
    ],
    faqs: [
      { question: "Can you drop directly to Patna Airport (PAT)?", answer: "Yes, our drivers specialize in airport drops and monitor flight timings to make sure you arrive on schedule." }
    ]
  },
  "danapur-to-patna-taxi": {
    slug: "danapur-to-patna-taxi",
    title: "Danapur to Patna Taxi Cabs | Quick Local City Transfer",
    metaDescription: "Reliable city cabs between Danapur and Patna. Affordable local rides. Choose Sedan, Ertiga, or SUV. Book on call instantly.",
    heading: "Danapur to Patna Taxi Service",
    duration: "45 Minutes",
    distance: "12 Km",
    overview: "Connecting the twin cities of Danapur and Patna. Ideal for local commuters, railway transfers, and daily travels. Enjoy air-conditioned luxury instead of navigating traffic yourself.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img2.jpg", "/images/destination-details-gallery-img3.jpg"],
    features: [
      { title: "Instant Bookings", desc: "Cabs dispatched within minutes of booking." },
      { title: "Clean Air Conditioning", desc: "Escape the heat and dust of city traffic in cool comfort." }
    ],
    touristPlaces: [
      { name: "Danapur Cantonment", desc: "A historic military garrison town dating back to the colonial era.", img: "/images/destination-dt-location-img4.jpg" }
    ],
    faqs: [
      { question: "Do you offer local hourly packages?", answer: "Yes, we offer flexible local rental packages (4hrs/40km or 8hrs/80km) for shopping or city tours." }
    ]
  },
  "danapur-to-darbhanga-taxi": {
    slug: "danapur-to-darbhanga-taxi",
    title: "Danapur to Darbhanga Taxi | Direct Express Cab Booking",
    metaDescription: "Travel directly from Danapur to Darbhanga in comfort. Ertiga (with/without carrier), Sedan, and SUV options. Safe highway journeys.",
    heading: "Danapur to Darbhanga Taxi Service",
    duration: "4 Hours",
    distance: "150 Km",
    overview: "Connecting the major railway junction of Danapur directly with Darbhanga. Avoid multi-step transit and carry your heavy luggage directly from Danapur Station to your home in Darbhanga in a single, comfortable, private car.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img4.jpg", "/images/destination-details-gallery-img5.jpg"],
    features: [
      { title: "Railway Platform Pickups", desc: "Our driver will coordinate with you directly at the station exit gate." },
      { title: "Carrier Option Available", desc: "Book an Ertiga with carrier to fit all your heavy train luggage easily." }
    ],
    touristPlaces: [
      { name: "Darbhanga Raj Palaces", desc: "Grand palace structures demonstrating Mithila's royal legacy.", img: "/images/destination-dt-location-img1.jpg" }
    ],
    faqs: [
      { question: "What is the best vehicle for a family from Danapur to Darbhanga?", answer: "We highly recommend the Maruti Ertiga (available with a carrier) for families with luggage, or Innova Crysta for premium comfort." }
    ]
  }
};

export const servicesData: Record<string, PageDetailData> = {
  "one-way-taxi": {
    slug: "one-way-taxi",
    title: "One-Way Taxi Services in Bihar | Safe Door-to-Door Drops",
    metaDescription: "Affordable one-way taxi service across Bihar. Pay only for the distance traveled. Clean Sedan, SUV, Ertiga, Innova. Call for booking.",
    heading: "One-Way Taxi Services",
    overview: "Why pay double when you are traveling only one way? Our One-Way Taxi Service allows you to book a private cab from your origin and pay only for the drop-off distance. Perfect for intercity transfers, urgent visits, or airport connectivity across Bihar.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img1.jpg", "/images/destination-details-gallery-img2.jpg"],
    features: [
      { title: "No Return Fare Charges", desc: "Pay strictly for the distance from point A to point B." },
      { title: "Doorstep Pickup & Drop", desc: "No need to go to bus stands or railway stations; we come directly to you." }
    ],
    faqs: [
      { question: "How is the fare calculated for one-way drops?", answer: "You only pay for the one-way distance traveled, along with standard toll taxes. Call us directly for a transparent quote." }
    ]
  },
  "round-trip-taxi": {
    slug: "round-trip-taxi",
    title: "Round-Trip Taxi Services | Weekend Getaways & Outstations",
    metaDescription: "Book round-trip cabs in Bihar. Perfect for holidays, family visits, and multi-day tours. Premium Sedan, SUV, Ertiga (with/without carrier), Innova.",
    heading: "Round-Trip Taxi Services",
    overview: "Plan your weekend getaways, family visits, or business meetings with our convenient Round-Trip Cab Services. Keep the car and driver with you throughout your travel. We offer the best rates for multi-day trips with professional, courteous drivers.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img3.jpg", "/images/destination-details-gallery-img4.jpg"],
    features: [
      { title: "Driver Boarding Included", desc: "Our round-trip quotes include all driver allowances and accommodation charges." },
      { title: "Flexible Sightseeing", desc: "Stop at multiple cities, tourist locations, or eateries at your own pace." }
    ],
    faqs: [
      { question: "Can I extend my round-trip cab for an extra day?", answer: "Yes, you can coordinate with our 24/7 helpline to extend the rental duration anytime during your journey." }
    ]
  },
  "outstation-taxi": {
    slug: "outstation-taxi",
    title: "Outstation Cab Rental | Intercity Taxi Services in Bihar",
    metaDescription: "Book outstation cabs across Bihar, Jharkhand, and UP. Safe, clean, and reliable. Choose Ertiga, Dzire, Scorpio, Innova. Call for custom package.",
    heading: "Outstation Taxi Services",
    overview: "Explore destinations beyond city limits with our Outstation Cab Rentals. Whether you are visiting relatives in neighboring districts, traveling to Jharkhand or Uttar Pradesh, or exploring historical sites, our reliable intercity fleet is at your service.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img5.jpg", "/images/destination-details-gallery-img1.jpg"],
    features: [
      { title: "All-India Permit Fleet", desc: "All our vehicles carry commercial permits for smooth border crossings." },
      { title: "GPS Safety Tracking", desc: "Every outstation ride is monitored continuously by our central control room." }
    ],
    faqs: [
      { question: "Do you offer outstation drops to Jharkhand and UP?", answer: "Yes, we regularly cater to outstation requests for Ranchi, Jamshedpur, Varanasi, Gorakhpur, and other cities." }
    ]
  },
  "patna-airport-taxi": {
    slug: "patna-airport-taxi",
    title: "Patna Airport Taxi Service | Punctual Airport Cabs",
    metaDescription: "Reliable airport taxi at Patna Airport (PAT). On-time pickup and drop guaranteed. Choose from Sedan, Ertiga, SUV, Innova. Book now.",
    heading: "Patna Airport Taxi Service",
    overview: "Make sure you never miss a flight. Our Patna Airport (Jay Prakash Narayan Airport) taxi service offers punctual pickups from anywhere in Bihar. We also offer instant cab dispatch for incoming passengers with meet-and-greet service at the airport exit.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img2.jpg", "/images/destination-details-gallery-img3.jpg"],
    features: [
      { title: "Flight Schedule Monitoring", desc: "We track your flight status to adjust pick-up times automatically in case of delays." },
      { title: "Pre-Booked Meet & Greet", desc: "Our driver will stand at the exit gate with a placard for your convenience." }
    ],
    faqs: [
      { question: "How do I find my driver at Patna Airport?", answer: "Once your flight lands, you will receive the driver's contact details via WhatsApp. The driver will coordinate to meet you right at the designated passenger pickup area." }
    ]
  },
  "darbhanga-airport-taxi": {
    slug: "darbhanga-airport-taxi",
    title: "Darbhanga Airport Taxi Service | Convenient Airport Transfers",
    metaDescription: "Book a Darbhanga Airport (DBG) taxi. Fast, reliable transfers across North Bihar. Clean cars including Ertiga with carrier. Call for price.",
    heading: "Darbhanga Airport Taxi Service",
    overview: "Fastest growing airport connectivity in North Bihar. Book a reliable Darbhanga Airport taxi to travel to Madhubani, Samastipur, Muzaffarpur, Saharsa, Sitamarhi, or any other town in Mithila. We offer clean, luggage-friendly cars for a smooth transition from your flight.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img4.jpg", "/images/destination-details-gallery-img5.jpg"],
    features: [
      { title: "Luggage Carrier Vehicles", desc: "Maruti Ertiga with roof carrier available to easily hold heavy airline bags." },
      { title: "North Bihar Wide Network", desc: "Direct transfers to all districts in North Bihar from DBG Airport." }
    ],
    faqs: [
      { question: "Do you provide one-way drops to Madhubani from Darbhanga Airport?", answer: "Yes, this is one of our most popular airport transfer routes. One-way drops are available 24/7." }
    ]
  },
  "gaya-airport-taxi": {
    slug: "gaya-airport-taxi",
    title: "Gaya Airport Taxi Service | Safe Pilgrim Airport Cabs",
    metaDescription: "Reliable Gaya Airport (GAY) taxi service. Safe and affordable airport transfers to Bodh Gaya and Gaya town. Book Dzire, Ertiga, Innova.",
    heading: "Gaya Airport Taxi Service",
    overview: "Catering to international and domestic pilgrims visiting Gaya and Bodh Gaya. Our drivers are trained in tourist hospitality and provide a welcoming, comfortable transfer directly to your monastery or hotel.",
    galleryImages: ["/images/bodhgaya-mahabodhi.png", "/images/bihar-cab-highway.png", "/images/destination-details-gallery-img1.jpg"],
    features: [
      { title: "Pilgrim Friendly Drivers", desc: "Courteous, helpful drivers familiar with all Bodh Gaya hotels and temples." },
      { title: "Safe & Quiet Cabs", desc: "Modern, well-maintained silent cabins for a relaxing transition." }
    ],
    faqs: [
      { question: "Is Gaya Airport close to Bodh Gaya?", answer: "Yes, Gaya Airport is just about 7 km away from Bodh Gaya, taking approximately 15-20 minutes by car." }
    ]
  },
  "patna-junction-taxi": {
    slug: "patna-junction-taxi",
    title: "Patna Junction Railway Station Taxi | Quick Cabs",
    metaDescription: "Instant taxi dispatch at Patna Junction (PNBE). Doorstep transfers, clean cars, no hassle. Choose Sedan, Ertiga, SUV, Innova. Call now.",
    heading: "Patna Junction Taxi Service",
    overview: "Arriving at Patna Junction Railway Station? Skip the crowd and local auto-rickshaw hassles. Pre-book our private AC taxi to pick you up directly from Patna Junction and take you comfortably to your destination within Patna or outstations.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img2.jpg", "/images/destination-details-gallery-img3.jpg"],
    features: [
      { title: "Platform Coordinate Pickup", desc: "Our driver will call and coordinate to pick you up right at the station exit gate." },
      { title: "Luggage Assistance", desc: "Help with loading your bags into the car boot or roof carrier." }
    ],
    faqs: [
      { question: "Do you operate at Patna Junction late at night?", answer: "Yes, we operate 24x7. We highly recommend pre-booking for late-night arrivals to ensure a car is waiting for you." }
    ]
  },
  "rajendra-nagar-terminal-taxi": {
    slug: "rajendra-nagar-terminal-taxi",
    title: "Rajendra Nagar Terminal Taxi | Direct Train Connect Cabs",
    metaDescription: "Punctual cabs at Rajendra Nagar Terminal (RJPB), Patna. Safe and reliable city travel. Choose Ertiga, Dzire, Scorpio, Innova. Call for booking.",
    heading: "Rajendra Nagar Terminal Taxi Service",
    overview: "Conveniently connect with major trains departing from or arriving at Rajendra Nagar Terminal in Patna. Enjoy premium, clean, air-conditioned taxis that arrive on time to ensure you never miss your boarding.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img4.jpg", "/images/destination-details-gallery-img5.jpg"],
    features: [
      { title: "Punctuality Guarantee", desc: "We guarantee on-time arrival so you always board your train stress-free." },
      { title: "All Car Types", desc: "From compact Sedans to large passenger SUVs and Tempo Travellers." }
    ],
    faqs: [
      { question: "Is this service available for early morning train arrivals?", answer: "Yes, our drivers operate on rotating shifts to cover all major train schedules, including early morning arrivals." }
    ]
  },
  "danapur-railway-station-taxi": {
    slug: "danapur-railway-station-taxi",
    title: "Danapur Railway Station Taxi | Quick Cabs & Station Transfers",
    metaDescription: "Book a Danapur Railway Station (DNR) taxi. Clean cabs, flat rates, professional drivers. Choose Ertiga with carrier, Sedan, SUV.",
    heading: "Danapur Railway Station Taxi Service",
    overview: "Connecting passengers arriving at Danapur Railway Station with the rest of Patna and neighboring districts. Ensure a safe, smooth, private ride for your family and heavy luggage right from the station exit.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img1.jpg", "/images/destination-details-gallery-img2.jpg"],
    features: [
      { title: "Luggage Carrier Ertiga", desc: "Available Ertiga with roof racks to easily fit heavy travel trunks." },
      { title: "Flat Transparent Fares", desc: "No haggling at station exits; get a fixed transparent quote on call." }
    ],
    faqs: [
      { question: "Do you offer outstation drops from Danapur Station?", answer: "Yes, you can directly book a one-way or round-trip outstation taxi to any district in Bihar straight from Danapur station." }
    ]
  }
};

export const packagesData: Record<string, PageDetailData> = {
  "bodh-gaya-tour": {
    slug: "bodh-gaya-tour",
    title: "Bodh Gaya Tour Package | Heritage & Pilgrimage Cab Tour",
    metaDescription: "Explore the land of Buddha's enlightenment. Book Bodh Gaya tour package. Visit Mahabodhi Temple, Great Buddha Statue, Monasteries. Call for best rate.",
    heading: "Bodh Gaya Tour Package",
    duration: "2 Days / 1 Night",
    overview: "Discover Bodh Gaya, the cradle of Buddhism where Prince Siddhartha attained supreme enlightenment to become Lord Buddha. Visit the UNESCO World Heritage Mahabodhi Temple, the towering 80-foot Buddha Statue, and the beautiful monasteries built by international Buddhist communities.",
    galleryImages: ["/images/bodhgaya-mahabodhi.png", "/images/bihar-cab-highway.png", "/images/destination-details-gallery-img5.jpg"],
    features: [
      { title: "UNESCO Heritage Tour", desc: "Detailed tour of the sacred Mahabodhi Temple and the Bodhi Tree." },
      { title: "International Monasteries", desc: "Explore Thai, Japanese, Tibetan, Bhutanese, and Chinese monasteries." },
      { title: "Calm Serene Stays", desc: "Handpicked peaceful hotel options near the main temple complex." }
    ],
    touristPlaces: [
      { name: "Mahabodhi Temple", desc: "The magnificent ancient brick temple marking the spot of Buddha's enlightenment.", img: "/images/bodhgaya-mahabodhi.png" },
      { name: "Great Buddha Statue", desc: "An awe-inspiring 80-foot stone statue of Buddha in dhyana mudra posture.", img: "/images/destination-dt-location-img2.jpg" },
      { name: "Sacred Bodhi Tree", desc: "The holy peepal tree inside the Mahabodhi temple complex, descended from the original tree Buddha sat under.", img: "/images/destination-dt-location-img3.jpg" }
    ],
    faqs: [
      { question: "What is the best time to visit Bodh Gaya?", answer: "The winter season (October to March) is the best time, as the weather is pleasant and many international pilgrims visit." },
      { question: "Is this package suitable for senior citizens?", answer: "Yes, we design this tour with slow pacing, easy transfers, and comfortable premium vehicles like Innova Crysta." }
    ]
  },
  "rajgir-tour": {
    slug: "rajgir-tour",
    title: "Rajgir Tour Package | Glass Bridge & Eco Canopy Cabs",
    metaDescription: "Experience Rajgir's famous Glass Bridge, hot springs, Vishwa Shanti Stupa, and ropeway. Complete tour cab package. Book on call today.",
    heading: "Rajgir Tour Package",
    duration: "2 Days / 1 Night",
    overview: "Explore Rajgir, an ancient valley surrounded by five green hills. Famous for its holy hot springs, the Vishwa Shanti Stupa reached by a scenic ropeway, historic ruins of Bimbisara Jail, and the state-of-the-art Rajgir Glass Bridge Skywalk inside the Nature Safari.",
    galleryImages: ["/images/rajgir-glass-bridge.png", "/images/bihar-cab-highway.png", "/images/destination-details-gallery-img4.jpg"],
    features: [
      { title: "Glass Bridge Booking Support", desc: "Guidance on booking tickets for the famous Rajgir Nature Safari." },
      { title: "Shanti Stupa Ropeway", desc: "Scenic ropeway ride to the mountain-top Peace Pagoda." },
      { title: "Holy Hot Springs", desc: "Visit the Brahmakund warm mineral springs, sacred to Hindus, Buddhists, and Jains." }
    ],
    touristPlaces: [
      { name: "Rajgir Glass Bridge", desc: "Walk on the thrilling 85-foot long transparent skywalk over a deep valley.", img: "/images/rajgir-glass-bridge.png" },
      { name: "Vishwa Shanti Stupa", desc: "A grand white Peace Pagoda atop the Ratnagiri hill, promoting world peace.", img: "/images/destination-dt-location-img4.jpg" },
      { name: "Cyclopean Wall", desc: "An ancient 40-km long stone wall built before the Mauryan era to fortify the city.", img: "/images/destination-dt-location-img5.jpg" }
    ],
    faqs: [
      { question: "Are Glass Bridge tickets included in this package?", answer: "Nature Safari and Glass Bridge tickets must be booked online through the Bihar Government portal. Our team will guide you on how to book them successfully." }
    ]
  },
  "nalanda-tour": {
    slug: "nalanda-tour",
    title: "Nalanda Tour Package | Ruins of the Ancient University Cabs",
    metaDescription: "Visit the UNESCO ruins of Nalanda University, Xuanzang Memorial, and Kundalpur. Learn from expert guides. Cab package available.",
    heading: "Nalanda Tour Package",
    duration: "1 Day (Patna Return)",
    overview: "Walk through the ruins of Nalanda University, the ancient world's premier seat of higher learning which flourished from the 5th to the 12th century AD. Visit the Nalanda Archaeological Museum, Xuanzang Memorial Hall, and the nearby Sun Temple.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img3.jpg", "/images/destination-details-gallery-img1.jpg"],
    features: [
      { title: "Ancient Ruins Guided Walk", desc: "Explore the vast brick red university ruins with licensed archaeological guides." },
      { title: "Xuanzang Memorial", desc: "Visit the peaceful monument dedicated to the legendary Chinese traveler-scholar Xuanzang." }
    ],
    touristPlaces: [
      { name: "Nalanda University Ruins", desc: "A UNESCO site displaying ancient lecture halls, monasteries, and the great Sariputra Stupa.", img: "/images/destination-dt-location-img6.jpg" },
      { name: "Nalanda Archaeological Museum", desc: "Houses bronzes, sculptures, coins, and plaster casts excavated from the ruins.", img: "/images/destination-dt-location-img7.jpg" }
    ],
    faqs: [
      { question: "Can we cover both Nalanda and Rajgir in one day?", answer: "Yes, Nalanda is only about 15 km from Rajgir. A same-day trip from Patna can cover Nalanda ruins and major Rajgir spots comfortably." }
    ]
  },
  "vaishali-tour": {
    slug: "vaishali-tour",
    title: "Vaishali Tour Package | Ashokan Pillar & Buddhist Heritage Cabs",
    metaDescription: "Explore Vaishali, the ancient republic. Visit Ashokan Pillar, Abhishek Pushkarini, Vishwa Shanti Stupa. Secure tourist cabs from Patna.",
    heading: "Vaishali Tour Package",
    duration: "1 Day (Patna Return)",
    overview: "Visit Vaishali, the capital of the ancient Licchavi republic, believed to be the world's first republic. Vaishali is deeply sacred as the place where Lord Buddha preached his last sermon and Lord Mahavira, the 24th Jain Tirthankara, was born. Explore the ancient Ashokan Pillar and the Buddhist Relic Stupa.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img2.jpg", "/images/destination-details-gallery-img5.jpg"],
    features: [
      { title: "First Republic Exploration", desc: "Learn about the ancient Licchavi democracy and parliament system." },
      { title: "Lord Mahavira Birthplace", desc: "Visit Kundalpur/Basokund, highly sacred to the Jain community." }
    ],
    touristPlaces: [
      { name: "Ashokan Pillar", desc: "A monolithic polished sandstone pillar crowned by a single lion, built by Emperor Ashoka.", img: "/images/destination-dt-location-img1.jpg" },
      { name: "Abhishek Pushkarini", desc: "The coronation tank whose water was considered sacred by ancient Licchavi rulers.", img: "/images/destination-dt-location-img2.jpg" }
    ],
    faqs: [
      { question: "How far is Vaishali from Patna?", answer: "Vaishali is approximately 55 km north of Patna, taking around 1.5 to 2 hours of drive via the Mahatma Gandhi Setu." }
    ]
  },
  "madhubani-tour": {
    slug: "madhubani-tour",
    title: "Madhubani Art & Culture Tour | Mithila Painting Craft Village",
    metaDescription: "Tour Madhubani's art villages. Buy authentic paintings directly from national award-winning artisans. Full cab package with guide.",
    heading: "Madhubani Art Tour Package",
    duration: "2 Days / 1 Night",
    overview: "Immerse yourself in Mithila's vibrant arts and crafts. Our Madhubani Art Tour takes you directly to the legendary villages of Jitwarpur and Ranti. Meet Padma Shri and National Award-winning Madhubani painters in their traditional courtyard studios, watch them paint using natural dyes, and buy authentic paintings directly from source.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img1.jpg", "/images/destination-details-gallery-img3.jpg"],
    features: [
      { title: "Art Village Courtyard Tour", desc: "Walk through villages painted with beautiful mural artwork." },
      { title: "Meet Award-Winning Artists", desc: "Interact directly with Mithila masters and understand their painting stories." }
    ],
    touristPlaces: [
      { name: "Jitwarpur Art Village", desc: "The epicenter of Madhubani painting, where almost every household practices this traditional art.", img: "/images/destination-dt-location-img3.jpg" },
      { name: "Ranti Village", desc: "Famous for pioneering female painters who modernized and popularised Mithila art globally.", img: "/images/destination-dt-location-img4.jpg" }
    ],
    faqs: [
      { question: "Can we purchase paintings during the tour?", answer: "Yes, you can buy authentic paintings directly from the artists, supporting their livelihood directly without middlemen." }
    ]
  },
  "darbhanga-heritage-tour": {
    slug: "darbhanga-heritage-tour",
    title: "Darbhanga Heritage Tour Package | Royal Palaces & Temples Cabs",
    metaDescription: "Explore Darbhanga's royal legacy. Visit Raj Fort, Anand Bagh Palace, Ahilya Asthan. Complete city cab package. Book on call.",
    heading: "Darbhanga Heritage Tour Package",
    duration: "2 Days / 1 Night",
    overview: "Unveil the royal legacy of Mithilanchal with our Darbhanga Heritage Tour. Explore the majestic Raj Fort complex, the ornate palaces designed by French and Italian architects, the serene Shyama Mai temple, and the historic Ahilya Asthan where legends from the Ramayana reside.",
    galleryImages: ["/images/bihar-cab-highway.png", "/images/destination-details-gallery-img4.jpg", "/images/destination-details-gallery-img5.jpg"],
    features: [
      { title: "Royal Palaces Tour", desc: "Visit Nargona Palace, Lakshmishwar Vilas Palace, and Anand Bagh Palace." },
      { title: "Mithilanchal Culture & Food", desc: "Taste authentic Mithila delicacies like fish-curry, makhana kheer, and pan." }
    ],
    touristPlaces: [
      { name: "Lakshmishwar Vilas Palace (Anand Bagh)", desc: "A stunning palace displaying intricate woodwork, built by Maharaja Lakshmishwar Singh.", img: "/images/destination-dt-location-img1.jpg" },
      { name: "Shyama Mai Temple Complex", desc: "A spiritual sanctuary built on the cremation grounds of Darbhanga's Maharajas, surrounded by lush gardens.", img: "/images/destination-dt-location-img2.jpg" },
      { name: "Ahilya Asthan", desc: "A sacred Ramayana heritage temple located about 24 km from Darbhanga city.", img: "/images/destination-dt-location-img3.jpg" }
    ],
    faqs: [
      { question: "Is this package inclusive of local guide fees?", answer: "We can arrange certified local historians as guides upon request. Mention your requirement when booking on call." }
    ]
  }
};
