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
    title: "Patna to Darbhanga Taxi Service | Book Safe Intercity Cabs",
    metaDescription: "Affordable Patna to Darbhanga taxi service. Pay only one-way. Professional drivers, well-maintained Sedan, SUV, Ertiga with carrier. Book now.",
    heading: "Patna to Darbhanga Taxi",
    distance: "140 Km",
    duration: "3.5 Hours",
    galleryImages: ["/images/bihar-cab-highway.png"],
    features: [
      { title: "On-Time Pickup", desc: "Reliable pick-up from anywhere in Patna." },
      { title: "One-Way Drop Rates", desc: "Pay strictly for your destination drop-off." }
    ],
    faqs: [
      { question: "What is the fare for Patna to Darbhanga one-way drop?", answer: "Our one-way rates are highly competitive. Please call us directly for a customized transparent quote." },
      { question: "Are toll taxes included in the fare?", answer: "State taxes and tolls are usually charged extra based on actual receipts. Call for direct details." }
    ],
    overview: `
      <h2>Premium Patna to Darbhanga Taxi Service - Reliable Highway Travel</h2>
      <p>Are you planning a trip from the capital city to the cultural center of Mithilanchal? Our premium <strong>Patna to Darbhanga taxi service</strong> offers the most reliable, safe, and comfortable outstation travel experience. The road distance between Patna and Darbhanga is approximately 140 kilometers, and it takes around 3.5 to 4 hours via the newly upgraded National Highways, depending on traffic conditions. Whether you are traveling for business meetings, emergency family visits, medical checkups, or wedding events, our dedicated private cabs are at your disposal 24/7.</p>
      
      <h3>Why Choose Our Intercity Taxi Service?</h3>
      <p>We provide a wide array of clean and fully sanitized vehicles tailored to your specific budget and luggage needs. Choose from economical Sedans like Swift Dzire, spacious MUVs like Suzuki Ertiga (available with luggage carriers for heavy airline bags), or luxury multi-utility vehicles like Toyota Innova Crysta. All our cars undergo routine maintenance checks to guarantee a breakdown-free highway experience.</p>
      
      <h3>Key Highlights & Travel Perks:</h3>
      <ul>
        <li><strong>Doorstep Pickup & Drop:</strong> No need to carry heavy luggage to bus terminals. We pick you up directly from your doorstep in Patna and drop you off at your exact destination in Darbhanga.</li>
        <li><strong>Experienced Highway Drivers:</strong> Our drivers are verified professionals who know the regional route safety standards, traffic conditions, and local highway eateries.</li>
        <li><strong>No Hidden Costs:</strong> Transparency is our core value. What we quote on the phone is exactly what you pay.</li>
      </ul>
      <p>Enjoy a stress-free journey with family or colleagues. Contact us today on Call or WhatsApp to lock in your booking for Patna to Darbhanga.</p>
    `
  },
  "patna-to-muzaffarpur-taxi": {
    slug: "patna-to-muzaffarpur-taxi",
    title: "Patna to Muzaffarpur Cab Booking | Safe Express Highway Ride",
    metaDescription: "Reliable Patna to Muzaffarpur taxi services. Affordable rates, clean AC cars, experienced drivers. Perfect for daily commutes or family visits. Book today.",
    heading: "Patna to Muzaffarpur Taxi",
    distance: "75 Km",
    duration: "2 Hours",
    galleryImages: ["/images/banner-img1.jpg"],
    features: [
      { title: "24/7 Availability", desc: "Book a cab at any hour for immediate dispatch." },
      { title: "Experienced Drivers", desc: "Drivers who know the best routes and safety measures." }
    ],
    faqs: [
      { question: "How long does it take to travel from Patna to Muzaffarpur by taxi?", answer: "It takes around 2 hours via the Mahatma Gandhi Setu and NH22 highway corridor." }
    ],
    overview: `
      <h2>Efficient Patna to Muzaffarpur Cab Booking Services</h2>
      <p>Travel comfortably from Patna to the Lychee Kingdom, Muzaffarpur, with our premium taxi services. The distance of 75 kilometers is easily covered in just about 2 hours via the Mahatma Gandhi Setu and NH22. Our service is the perfect choice for corporate professionals, traders, students, and families looking for a fast and private alternative to crowded buses or trains.</p>
      
      <h3>Select from Our Diverse Fleet</h3>
      <p>We cater to all types of groups. For individual travelers or small families, our air-conditioned Sedan cars (Dzire, Etios) offer a smooth and highly economical ride. For larger groups, our Suzuki Ertiga and Toyota Innova Crysta provide ample legroom and boot space to fit your luggage easily. Our vehicles are routinely cleaned and maintained to provide maximum safety.</p>
      
      <h3>Key Benefits of Booking With Us:</h3>
      <ul>
        <li><strong>Express Route Travel:</strong> Avoid delayed schedules. Our drivers take the most optimized highway routes to save you valuable time.</li>
        <li><strong>Safe for Solo & Female Travelers:</strong> Our drivers are background-verified, respectful, and fully trained in safety protocols.</li>
        <li><strong>Affordable Flat Rates:</strong> Enjoy cheap outstation travel rates with transparent billing and no hidden commissions.</li>
      </ul>
      <p>Book your cab today for a pleasant and peaceful commute between Patna and Muzaffarpur. Get in touch with us now via Call or WhatsApp.</p>
    `
  },
  "patna-to-gaya-taxi": {
    slug: "patna-to-gaya-taxi",
    title: "Patna to Gaya Taxi Service | Pilgrim & Business Cab Rentals",
    metaDescription: "Book Patna to Gaya or Bodh Gaya taxi. Safe, clean, and reliable pilgrim cabs. Pay only one-way. Dzire, Ertiga, Innova Crysta. Book on call.",
    heading: "Patna to Gaya Taxi",
    distance: "100 Km",
    duration: "3 Hours",
    galleryImages: ["/images/bodhgaya-mahabodhi.png"],
    features: [
      { title: "Pilgrim Packages", desc: "Includes local sightseeing in Gaya and Bodh Gaya." },
      { title: "Clean AC Fleet", desc: "Fully air-conditioned cars for a peaceful journey." }
    ],
    faqs: [
      { question: "Can I book a one-way cab from Patna to Bodh Gaya?", answer: "Yes, we offer flat one-way drop rates from Patna directly to Bodh Gaya hotels and monasteries." }
    ],
    overview: `
      <h2>Comfortable Patna to Gaya & Bodh Gaya Taxi Services</h2>
      <p>Embark on a spiritual journey or a business trip from <strong>Patna to Gaya</strong> with our specialized outstation taxi services. The distance between Patna and Gaya is around 100 kilometers and takes approximately 3 hours via the Patna-Gaya highway. We regularly cater to international and domestic pilgrims visiting the sacred Mahabodhi Temple in Bodh Gaya and performing rituals in Gaya town.</p>
      
      <h3>Our Specialized Tourist and Pilgrim Services</h3>
      <p>We understand the unique needs of tourists and senior citizens. Our drivers are extremely polite, patient, and knowledgeable about all the major historic and spiritual sites in Gaya and Bodh Gaya. We offer premium vehicles like Toyota Innova Crysta and Suzuki Ertiga that guarantee absolute luxury, smooth suspension, and relaxed seating for senior pilgrims.</p>
      
      <h3>Why Our Cab Services Stand Out:</h3>
      <ul>
        <li><strong>Meet & Greet Pickup:</strong> We pick you up directly from Patna Junction Railway Station or Patna Airport and transfer you smoothly to Gaya.</li>
        <li><strong>Local Sightseeing Add-ons:</strong> Customize your itinerary to cover the Mahabodhi Temple, Vishnupad Temple, Great Buddha Statue, and international monasteries.</li>
        <li><strong>Transparent Fixed Fares:</strong> Honest pricing with absolutely zero extra charges or sudden price adjustments.</li>
      </ul>
      <p>Make your spiritual journey memorable and comfortable. Contact our support team via call or WhatsApp to secure your booking instantly.</p>
    `
  },
  "patna-to-madhubani-taxi": {
    slug: "patna-to-madhubani-taxi",
    title: "Patna to Madhubani Cab Rental | Travel to the Art Capital",
    metaDescription: "Book a taxi from Patna to Madhubani. Clean cars, pocket-friendly one-way drops, expert highway drivers. Dzire, Ertiga, Innova. Call now.",
    heading: "Patna to Madhubani Taxi",
    distance: "175 Km",
    duration: "4.5 Hours",
    galleryImages: ["/images/popular/Traditional Mithila cultural village in Madhubani.png"],
    features: [
      { title: "Mithilanchal Tour", desc: "Explore local painting villages like Jitwarpur and Ranti." },
      { title: "Ertiga with Carrier", desc: "Plenty of room for luggage and purchases." }
    ],
    faqs: [
      { question: "How far is Madhubani from Patna?", answer: "The distance is about 175 Km, taking approximately 4.5 hours via Darbhanga route." }
    ],
    overview: `
      <h2>Patna to Madhubani Taxi Service - Journey to the land of Mithila Art</h2>
      <p>Discover the rich heritage and traditional arts of Mithila with our dedicated <strong>Patna to Madhubani taxi service</strong>. The road trip spans around 175 kilometers and takes approximately 4.5 hours. Travel comfortably through the scenic countryside of North Bihar in our private, fully air-conditioned cabs, avoiding the hassle of crowded public transport.</p>
      
      <h3>Tailored Cabs for Every Travel Plan</h3>
      <p>Whether you are an art collector visiting the famous villages of Jitwarpur and Ranti, returning home for festivals like Chhath Puja, or traveling for business, we have the perfect vehicle for you. We provide compact Sedans for budget-friendly drops, Suzuki Ertiga with top luggage carriers for large family trips, and executive SUVs for business travels. All our drivers are well-acquainted with the highways of North Bihar.</p>
      
      <h3>Top Features of Our Service:</h3>
      <ul>
        <li><strong>Direct Door-to-Door Connectivity:</strong> Travel from your home in Patna directly to your village or hotel in Madhubani without multiple transfers.</li>
        <li><strong>Local Cultural Guides:</strong> Our local drivers can guide you on the best shops to buy authentic Madhubani paintings directly from local artists.</li>
        <li><strong>Affordable & Safe:</strong> Competitive pricing with clean, sanitized vehicles and background-verified drivers.</li>
      </ul>
      <p>Enjoy a peaceful ride to Madhubani. Contact us today on Call or WhatsApp to get your custom price quote and complete your booking.</p>
    `
  },
  "patna-to-samastipur-taxi": {
    slug: "patna-to-samastipur-taxi",
    title: "Patna to Samastipur Taxi Service | Affordable Outstation Cabs",
    metaDescription: "Secure a comfortable Patna to Samastipur cab. One-way and round-trip rentals, flat fares, sanitized vehicles. Choose Dzire, Ertiga, Innova. Book now.",
    heading: "Patna to Samastipur Taxi",
    distance: "95 Km",
    duration: "2.5 Hours",
    galleryImages: ["/images/banner-img2.jpg"],
    features: [
      { title: "Flat Rates", desc: "No dynamic pricing, get fixed rates for your drop." },
      { title: "Sanitized Cabs", desc: "Every car is cleaned and sanitized before pickup." }
    ],
    faqs: [
      { question: "What is the best route from Patna to Samastipur?", answer: "The most common route is via Mahatma Gandhi Setu, Hajipur, and Musrigharari, taking about 2.5 hours." }
    ],
    overview: `
      <h2>Reliable Patna to Samastipur Outstation Cabs</h2>
      <p>Book a private AC taxi from <strong>Patna to Samastipur</strong> and enjoy a stress-free travel experience. The road distance is about 95 kilometers and takes approximately 2.5 hours. Samastipur is an active commercial and agricultural hub in North Bihar, and our cab service provides the fastest connection for merchants, business executives, and visiting families.</p>
      
      <h3>Modern Cars and Punctual Service</h3>
      <p>Punctuality is our guarantee. We understand that your time is valuable. Our drivers arrive at your pickup point in Patna 15 minutes before the scheduled time. We maintain a fleet of modern, air-conditioned cars including Maruti Suzuki Dzire, Toyota Etios, Maruti Ertiga, and Toyota Innova Crysta to ensure your highway ride is smooth and pleasant.</p>
      
      <h3>Why Book Your Samastipur Ride With Us?</h3>
      <ul>
        <li><strong>Flexible Booking Options:</strong> Choose between quick one-way drops or affordable multi-day round-trip packages.</li>
        <li><strong>Clean & Sanitized Interiors:</strong> We adhere to strict hygiene guidelines, keeping all vehicles clean and fresh.</li>
        <li><strong>Clear, Honest Pricing:</strong> Get a transparent breakdown of fares on call, with no hidden highway surcharges.</li>
      </ul>
      <p>Plan your commute with ease. Give us a call or send a message on WhatsApp to reserve your Patna to Samastipur taxi today.</p>
    `
  },
  "darbhanga-to-patna-taxi": {
    slug: "darbhanga-to-patna-taxi",
    title: "Darbhanga to Patna Taxi Service | One-Way & Round Trip Cabs",
    metaDescription: "Book a reliable Darbhanga to Patna cab. Safe, fast, and affordable. Pay only for one-way drop. Sanitized Sedans and Ertigas. Book on call.",
    heading: "Darbhanga to Patna Taxi",
    distance: "140 Km",
    duration: "3.5 Hours",
    galleryImages: ["/images/breadcrumb-bg9.jpg"],
    features: [
      { title: "24x7 Airport Transfers", desc: "Timely drops to Patna Airport for your flights." },
      { title: "Clean AC Cars", desc: "Comfortable cabins with working air conditioning." }
    ],
    faqs: [
      { question: "Can I get a cab from Darbhanga to Patna early in the morning?", answer: "Yes, we operate 24/7. Please pre-book at least 4 hours in advance for early morning pick-ups." }
    ],
    overview: `
      <h2>Darbhanga to Patna Taxi Service - Fast Intercity Cab Booking</h2>
      <p>Need a taxi from <strong>Darbhanga to Patna</strong>? Whether you have a flight to catch at Patna Airport, a train from Patna Junction, or a medical appointment, our dedicated intercity cabs ensure you arrive on time. The travel distance is 140 kilometers, taking roughly 3.5 hours via the highway network.</p>
      
      <h3>Our Professional Drivers and Fleet</h3>
      <p>We employ only certified, local drivers who are highly experienced in highway driving. They know the best transit paths and the safest spots to stop for tea or meals along the road. Our fleet includes economical Sedans like Swift Dzire, large MUVs like Suzuki Ertiga with carrier capacity, and premium SUVs. Every car is equipped with working AC and music systems for a pleasant journey.</p>
      
      <h3>Perks of Our Darbhanga to Patna Cab Service:</h3>
      <ul>
        <li><strong>Timely Airport & Station Drops:</strong> We track traffic delays to ensure you never miss your flights or train connections.</li>
        <li><strong>One-Way Drop Fares:</strong> Why pay for a return trip when you only need to go one way? Pay strictly for the drop distance.</li>
        <li><strong>Hassle-Free Booking:</strong> No advanced websites needed; just call us or text us on WhatsApp to book instantly.</li>
      </ul>
      <p>Reserve your ride from Darbhanga to Patna today. Contact us on call or WhatsApp for the best flat rates.</p>
    `
  },
  "danapur-to-patna-taxi": {
    slug: "danapur-to-patna-taxi",
    title: "Danapur to Patna Cab Booking | Quick Station & Local Transfer",
    metaDescription: "Book a taxi from Danapur to Patna. Flat rates, clean cars, instant pickup. Safe transfers for families and heavy luggage. Call now.",
    heading: "Danapur to Patna Taxi",
    distance: "12 Km",
    duration: "40 Minutes",
    galleryImages: ["/images/destination-details-gallery-img2.jpg"],
    features: [
      { title: "Instant Dispatch", desc: "Cabs dispatched within 15 minutes of booking." },
      { title: "Local Station Pickups", desc: "Direct pickups from Danapur Railway Station exits." }
    ],
    faqs: [
      { question: "What is the fare for Danapur to Patna local drops?", answer: "Local transfer rates are calculated on a flat distance basis. Call us for a cheap, transparent quote." }
    ],
    overview: `
      <h2>Convenient Danapur to Patna Taxi Services</h2>
      <p>Commute hassle-free between Danapur and Patna with our reliable local taxi services. The distance of 12 kilometers takes around 40 minutes depending on local city traffic. Skip the hassle of waiting for auto-rickshaws or walking with heavy luggage. Our clean, air-conditioned cabs will pick you up from your doorstep in Danapur or directly from the Danapur Railway Station and drop you off anywhere in Patna.</p>
      
      <h3>Safe Travels for Families and Heavy Luggage</h3>
      <p>Our local fleet comprises comfortable Sedans and spacious MUVs. If you are arriving by train with heavy luggage, our Suzuki Ertiga with a roof carrier is the perfect choice to fit all your trunks and suitcases safely. All our drivers are courteous, polite, and well-trained in local city routes to avoid heavy traffic congestion points.</p>
      
      <h3>Key Advantages:</h3>
      <ul>
        <li><strong>Direct Station Pickups:</strong> Our driver will coordinate with you via phone to pick you up right at the station exit gate.</li>
        <li><strong>Fixed Local Rates:</strong> No surprise surge pricing like app-based services. Get a flat quote upfront.</li>
        <li><strong>Sanitized Interiors:</strong> Clean and dust-free cabins for a comfortable, healthy local ride.</li>
      </ul>
      <p>Enjoy a comfortable local transfer today. Contact us on Call or WhatsApp to book your Danapur to Patna cab instantly.</p>
    `
  },
  "danapur-to-darbhanga-taxi": {
    slug: "danapur-to-darbhanga-taxi",
    title: "Danapur to Darbhanga Taxi | Direct Station to City Cabs",
    metaDescription: "Book a direct taxi from Danapur to Darbhanga. Reliable outstation service, flat rates, professional drivers. Choose Ertiga or Sedan. Call now.",
    heading: "Danapur to Darbhanga Taxi",
    distance: "150 Km",
    duration: "4 Hours",
    galleryImages: ["/images/destination-details-gallery-img4.jpg"],
    features: [
      { title: "Direct Station Pickups", desc: "Perfect for passengers arriving at Danapur Railway Station." },
      { title: "One-Way Drop Rates", desc: "No return fare charges. Pay strictly for the drop." }
    ],
    faqs: [
      { question: "Can I book a cab from Danapur station to Darbhanga late at night?", answer: "Yes, we operate 24/7. We recommend pre-booking your cab while you are on the train so that the driver is waiting at the exit." }
    ],
    overview: `
      <h2>Direct Danapur Railway Station to Darbhanga Cabs</h2>
      <p>Arriving at Danapur Railway Station and heading straight to Darbhanga? Avoid the stress of traveling to Patna city to find a bus or cab. Our dedicated <strong>Danapur to Darbhanga taxi service</strong> picks you up directly from the Danapur station exit and takes you on a fast, comfortable highway ride to Darbhanga. The road distance is approximately 150 kilometers, taking around 4 hours via the Mahatma Gandhi Setu and NH22.</p>
      
      <h3>Spacious Cars for Long Journeys</h3>
      <p>Long highway trips require comfortable seating. We offer well-maintained, air-conditioned Sedans (Swift Dzire) and spacious family MUVs like Suzuki Ertiga (with sturdy roof carriers for heavy luggage) and Toyota Innova Crysta. Rest assured, your family will travel in complete comfort and safety.</p>
      
      <h3>Why Book Our Danapur to Darbhanga Cabs?</h3>
      <ul>
        <li><strong>Saves Time & Hassle:</strong> Avoid multiple transfers. Get inside a private AC cab right at Danapur station and travel directly to Darbhanga.</li>
        <li><strong>Experienced Highway Drivers:</strong> Safe, disciplined drivers who are experts in navigating the highways of North Bihar.</li>
        <li><strong>Completely Transparent Fares:</strong> Get a clear, all-inclusive quote on call with zero hidden extra fees.</li>
      </ul>
      <p>Make your train-to-car transfer seamless. Contact us on Call or WhatsApp to pre-book your taxi to Darbhanga.</p>
    `
  },
  "patna-to-anywhere-taxi": {
    slug: "patna-to-anywhere-taxi",
    title: "Patna to Anywhere Taxi Service | Custom Outstation Cabs",
    metaDescription: "Book a private taxi from Patna to any village, town, or city in Bihar, Jharkhand, or UP. Affordable flat rates. Clean Sedan, Ertiga, Innova. Call now.",
    heading: "Patna to Anywhere Taxi",
    distance: "Flexible",
    duration: "Flexible",
    galleryImages: ["/images/patna_anywhere.png"],
    features: [
      { title: "Flexible Destinations", desc: "We drop you to any village, block, or district." },
      { title: "Custom Outstation Rates", desc: "Affordable one-way or round-trip custom pricing." }
    ],
    faqs: [
      { question: "Do you drop to remote villages in Bihar?", answer: "Yes, we specialize in rural connectivity. Our drivers know the local roads across all districts of Bihar." }
    ],
    overview: `
      <h2>Patna to Anywhere Taxi Service - Flexible Travel Across Bihar & Beyond</h2>
      <p>Need to travel to a destination that doesn't have direct train or bus connectivity? Our specialized <strong>Patna to Anywhere taxi service</strong> is designed for you. We pick you up from any location in Patna and drive you safely to any village, block, town, or city across Bihar, Jharkhand, or Uttar Pradesh. You set the destination, and we provide a comfortable private cab with a verified driver.</p>
      
      <h3>A Versatile Fleet for Every Journey</h3>
      <p>Since travel distances and terrains vary, we offer a versatile selection of vehicles. For local village roads or rough terrains, our rugged SUVs like Mahindra Bolero or Scorpio are excellent choices. For highway comfort, our Sedan models and Suzuki Ertiga (with or without luggage carrier) offer maximum relaxation. We also arrange Tempo Travellers for large family events like weddings or pilgrimages.</p>
      
      <h3>Why Our Flexible Cab Booking is the Best Choice:</h3>
      <ul>
        <li><strong>Rural & Urban Reach:</strong> No location is too remote for us. We guarantee safe drops to the interior villages of Bihar.</li>
        <li><strong>Transparent Custom Quotes:</strong> Call us with your itinerary and get a flat, honest pricing quote instantly.</li>
        <li><strong>Verified, Courteous Drivers:</strong> Feel safe throughout your trip with our experienced outstation driver partners.</li>
      </ul>
      <p>Plan your custom road trip with absolute peace of mind. Get in touch with us via Call or WhatsApp to book your ride.</p>
    `
  },
  "darbhanga-to-anywhere-taxi": {
    slug: "darbhanga-to-anywhere-taxi",
    title: "Darbhanga to Anywhere Cab Booking | Outstation Cabs North Bihar",
    metaDescription: "Reliable outstation taxi from Darbhanga to anywhere in Bihar, UP, or Jharkhand. Flat one-way rates. Choose Sedan, Ertiga with carrier, SUV. Book now.",
    heading: "Darbhanga to Anywhere Taxi",
    distance: "Flexible",
    duration: "Flexible",
    galleryImages: ["/images/darbhanga_anywhere.png"],
    features: [
      { title: "North Bihar Wide Reach", desc: "Drops to all remote towns and villages from Darbhanga." },
      { title: "All Car Types Available", desc: "Sedans, Ertiga with roof carriers, Scorpio, Innova." }
    ],
    faqs: [
      { question: "Can I book a one-way taxi from Darbhanga to Patna Airport?", answer: "Yes, we regularly offer Darbhanga to Patna Airport transfers at highly competitive one-way flat rates." }
    ],
    overview: `
      <h2>Darbhanga to Anywhere Cab Booking - Outstation Taxi Services</h2>
      <p>Connect with any part of Bihar, Jharkhand, or Uttar Pradesh directly from Darbhanga. Our premium <strong>Darbhanga to Anywhere taxi service</strong> is perfect for travelers, business traders, and families who require a private, direct, and comfortable outstation cab. Whether you want to travel to a neighboring village in Madhubani, a town in Samastipur, or cross state lines, we have got you covered.</p>
      
      <h3>Luggage-friendly and Reliable Vehicles</h3>
      <p>Travel in comfort without worrying about your bags. We specialize in Suzuki Ertiga vehicles equipped with secure top luggage carriers, allowing you to easily carry heavy travel trunks and bags. We also offer economical Sedan cabs for fast city drops and premium SUVs for executive travel. Every vehicle is thoroughly inspected and cleaned prior to pickup.</p>
      
      <h3>Key Advantages of Booking With Us:</h3>
      <ul>
        <li><strong>Complete Destination Flexibility:</strong> We drop you directly to your doorstep, even in remote rural blocks.</li>
        <li><strong>Punctual & Disciplined Drivers:</strong> Our local driver partners arrive on time and take the safest, fastest routes.</li>
        <li><strong>Affordable & Clear Fares:</strong> Honest, transparent billing with no hidden fuel charges or driver allowances.</li>
      </ul>
      <p>Simplify your outstation travel. Get a fast quote by calling us or reaching out via WhatsApp today.</p>
    `
  },
  "muzaffarpur-to-anywhere-taxi": {
    slug: "muzaffarpur-to-anywhere-taxi",
    title: "Muzaffarpur to Anywhere Taxi | Reliable Outstation Cab Booking",
    metaDescription: "Book a private cab from Muzaffarpur to any destination in Bihar. Safe, clean, and cheap taxi services. Choose Dzire, Ertiga, Scorpio, Innova. Call now.",
    heading: "Muzaffarpur to Anywhere Taxi",
    distance: "Flexible",
    duration: "Flexible",
    galleryImages: ["/images/muzaffarpur_anywhere.png"],
    features: [
      { title: "24/7 Cab Dispatch", desc: "Cabs ready for immediate outstation travel." },
      { title: "Verified Highway Drivers", desc: "Experienced drivers who ensure a safe ride." }
    ],
    faqs: [
      { question: "Do you offer round-trip packages from Muzaffarpur?", answer: "Yes, we offer highly affordable multi-day outstation packages for business or family travel from Muzaffarpur." }
    ],
    overview: `
      <h2>Muzaffarpur to Anywhere Taxi Service - Seamless Outstation Travels</h2>
      <p>Travel to any corner of Bihar or neighboring states directly from the Lychee Kingdom. Our <strong>Muzaffarpur to Anywhere taxi service</strong> offers a highly reliable, quick, and comfortable private outstation travel solution. Whether you need a sudden drop to Patna Airport, a visit to historical sites in Rajgir, or want to travel to a remote village in North Bihar, we ensure a smooth, comfortable ride.</p>
      
      <h3>Clean, Air-Conditioned Cars for Your Safety</h3>
      <p>We maintain a high-quality fleet of modern, air-conditioned passenger cars. You can choose from budget-friendly Sedan cabs (Maruti Dzire) for small families, Suzuki Ertiga (with roof carriers for heavy luggage) for family travels, or luxury SUVs like Toyota Innova Crysta. All cars are fully sanitized before departure, ensuring a clean and hygienic environment.</p>
      
      <h3>Why Choose Our Muzaffarpur Outstation Cabs?</h3>
      <ul>
        <li><strong>Express Doorstep Service:</strong> We pick you up from any locality in Muzaffarpur and drop you directly at your destination.</li>
        <li><strong>Courteous Local Drivers:</strong> Our drivers are polite, local professionals who know the regional highway networks thoroughly.</li>
        <li><strong>Fixed, Honest Pricing:</strong> Pay only the price agreed upon during booking. No hidden charges or surprise tolls.</li>
      </ul>
      <p>Book your outstation taxi from Muzaffarpur today. Call us or message us on WhatsApp for instant booking support.</p>
    `
  },
  "patna-airport-to-anywhere-taxi": {
    slug: "patna-airport-to-anywhere-taxi",
    title: "Patna Airport to Anywhere Taxi | Reliable Airport Cabs",
    metaDescription: "Arriving at Patna Airport? Pre-book a private taxi to any destination in Bihar. Clean Sedans, Ertigas with luggage carrier. 24x7. Call now.",
    heading: "Patna Airport to Anywhere Taxi",
    distance: "Flexible",
    duration: "Flexible",
    galleryImages: ["/images/patna_airport.png"],
    features: [
      { title: "Flight Track Pickup", desc: "We track delays to ensure our driver is waiting." },
      { title: "Luggage Carrier Ertiga", desc: "Available Ertiga with roof racks for heavy travel bags." }
    ],
    faqs: [
      { question: "What happens if my flight to Patna is delayed?", answer: "Don't worry. We monitor flight schedules and adjust your cab pickup time automatically at no extra charge." }
    ],
    overview: `
      <h2>Patna Airport to Anywhere Taxi Service - 24/7 Reliable Transfers</h2>
      <p>Arriving at Patna Airport (Jay Prakash Narayan Airport) and need to travel to Darbhanga, Madhubani, Muzaffarpur, Gaya, or any other district in Bihar? Skip the hassle of waiting in long queues for local airport taxis or negotiating with local drivers. Pre-book our <strong>Patna Airport to Anywhere taxi service</strong> for a smooth, stress-free transfer directly from the airport terminal to your doorstep.</p>
      
      <h3>Specialized Fleet for Airport Travellers</h3>
      <p>We understand that airport passengers often carry heavy luggage. That is why we offer Maruti Ertiga vehicles equipped with secure top luggage carriers, perfect for holding heavy airline suitcases without taking up passenger seating space. We also offer premium executive Sedan cars and luxury Toyota Innova Crysta cabs for a comfortable, professional ride.</p>
      
      <h3>Key Advantages of Booking Our Airport Cabs:</h3>
      <ul>
        <li><strong>Meet & Greet Service:</strong> Our driver will wait at the passenger exit area with a placard containing your name, helping you load your bags.</li>
        <li><strong>No Surge Pricing:</strong> Get a transparent, flat price quote on call before your flight lands. No surprise surge charges.</li>
        <li><strong>24/7 Availability:</strong> Whether your flight lands early in the morning or late at night, we guarantee a punctual pickup.</li>
      </ul>
      <p>Make your airport transition smooth and comfortable. Call us or send a message on WhatsApp to reserve your airport cab now.</p>
    `
  },
  "darbhanga-airport-to-anywhere-taxi": {
    slug: "darbhanga-airport-to-anywhere-taxi",
    title: "Darbhanga Airport to Anywhere Taxi | Prompt Outstation Cabs",
    metaDescription: "Pre-book a taxi at Darbhanga Airport. Direct transfers to Madhubani, Saharsa, Samastipur, Muzaffarpur, Patna. Clean Ertiga with carrier. Call now.",
    heading: "Darbhanga Airport to Anywhere Taxi",
    distance: "Flexible",
    duration: "Flexible",
    galleryImages: ["/images/darbhanga_airport.png"],
    features: [
      { title: "Flight Delayed? No Problem", desc: "We track flight timings and adjust pickup times." },
      { title: "Mithilanchal Wide Drops", desc: "Direct transfers to all remote locations in North Bihar." }
    ],
    faqs: [
      { question: "How do I meet the driver at Darbhanga Airport?", answer: "Once you land, our driver will coordinate with you via phone. They will meet you right outside the arrivals gate." }
    ],
    overview: `
      <h2>Darbhanga Airport to Anywhere Taxi Service - North Bihar Transfer Cabs</h2>
      <p>Arriving at Darbhanga Airport and heading to Madhubani, Sitamarhi, Samastipur, Muzaffarpur, Purnea, Saharsa, or Patna? Our reliable <strong>Darbhanga Airport to Anywhere taxi service</strong> is the ultimate travel solution for North Bihar. We provide direct doorstep drops from the airport terminal to any village, block, or city, avoiding the need for exhausting multi-mode travel.</p>
      
      <h3>Luggage Carriers and Spacious Cab Interior</h3>
      <p>Our fleet features clean, well-maintained Maruti Ertiga MUVs with robust top luggage carriers. This is highly recommended for families arriving with multiple airline bags. We also offer budget Sedan cars and premium Toyota Innova Crysta vehicles for executive passengers seeking high-end luxury.</p>
      
      <h3>Why Book Our Darbhanga Airport Cabs?</h3>
      <ul>
        <li><strong>Guaranteed Punctuality:</strong> We track flight arrivals to ensure your private cab is waiting for you when you land.</li>
        <li><strong>Experienced Local Drivers:</strong> Drivers who know the highway networks, safety requirements, and rural routes of North Bihar thoroughly.</li>
        <li><strong>Transparent, All-Inclusive Quotes:</strong> Get a flat rate on call with zero hidden extra fees.</li>
      </ul>
      <p>Ensure a comfortable ride from the airport. Reach out to us via Call or WhatsApp to book your cab instantly.</p>
    `
  },
  "danapur-station-to-anywhere-taxi": {
    slug: "danapur-station-to-anywhere-taxi",
    title: "Danapur Station to Anywhere Taxi | Train Transit Cab Booking",
    metaDescription: "Book a taxi from Danapur Railway Station to anywhere in Bihar. Clean AC cabs, flat rates, professional drivers. Dzire, Ertiga with carrier. Call now.",
    heading: "Danapur Station to Anywhere Taxi",
    distance: "Flexible",
    duration: "Flexible",
    galleryImages: ["/images/danapur_station.png"],
    features: [
      { title: "24x7 Station Pickups", desc: "Prompt pickups for early morning or late-night trains." },
      { title: "Luggage Carrier Ertiga", desc: "Perfect MUVs with roof racks for heavy travel trunks." }
    ],
    faqs: [
      { question: "Can the driver pick me up directly at the station exit?", answer: "Yes, our drivers will park near the exit gate and call you to coordinate a smooth boarding." }
    ],
    overview: `
      <h2>Direct Danapur Railway Station to Anywhere Cabs</h2>
      <p>Arriving at Danapur Railway Station (DNR) and heading to an outstation destination in Bihar? Skip the hassle of local public transit. Our <strong>Danapur Station to Anywhere taxi service</strong> offers direct, private AC cab transfers straight from the station exit to any village, town, or city in Bihar. Pre-book your cab and have a comfortable private car waiting for you as your train pulls in.</p>
      
      <h3>Modern Fleet Tailored for Train Passengers</h3>
      <p>We cater to all group sizes and travel requirements. If you are traveling with family and heavy luggage, our Suzuki Ertiga with a roof luggage carrier is the ideal choice. We also offer comfortable air-conditioned Sedans (Maruti Dzire) for cost-effective drops and premium SUVs for executive travel comfort.</p>
      
      <h3>Top Benefits of Booking With Us:</h3>
      <ul>
        <li><strong>Seamless Train-to-Car Transfer:</strong> No walking or searching. Our driver coordinates via call and picks you up directly from the exit.</li>
        <li><strong>Experienced Outstation Drivers:</strong> Safe, background-verified professionals who know the regional highway networks.</li>
        <li><strong>Clear Fixed Pricing:</strong> No bargaining at the station. Get a flat quote upfront on Call or WhatsApp.</li>
      </ul>
      <p>Travel comfortably from the rail track to the highway. Contact us today on Call or WhatsApp to reserve your cab.</p>
    `
  },
  "patna-station-to-anywhere-taxi": {
    slug: "patna-station-to-anywhere-taxi",
    title: "Patna Junction Station to Anywhere Taxi | Punctual Cabs",
    metaDescription: "Arriving at Patna Junction? Pre-book a private taxi to any destination in Bihar. Clean Sedan, Ertiga with carrier, SUV. 24x7 support. Call now.",
    heading: "Patna Junction to Anywhere Taxi",
    distance: "Flexible",
    duration: "Flexible",
    galleryImages: ["/images/patna_station.png"],
    features: [
      { title: "Platform Coordinate Pickup", desc: "Driver calls to coordinate pickup right at the station exit." },
      { title: "Ertiga with Carrier", desc: "Spacious MUVs to easily load heavy train luggage." }
    ],
    faqs: [
      { question: "What if my train to Patna Junction is delayed?", answer: "We track train status based on your train number and adjust the driver's arrival time accordingly at no extra cost." }
    ],
    overview: `
      <h2>Patna Junction Railway Station to Anywhere Taxi Services</h2>
      <p>Arriving at Patna Junction (PNBE), the busiest railway station in Bihar, and heading straight to an outstation town or village? Skip the platform crowd, local auto-rickshaw negotiations, and local transport hassles. Our professional <strong>Patna Station to Anywhere taxi service</strong> is here to provide you with a smooth, comfortable private transfer directly from the station to your doorstep anywhere in Bihar.</p>
      
      <h3>Luggage-friendly Cabs for Family Travels</h3>
      <p>Train travel often involves carrying multiple heavy bags. We specialize in Suzuki Ertiga MUVs equipped with heavy-duty roof carriers, allowing you to load all your luggage safely without congesting the spacious passenger cabin. For solo travelers or small groups, we offer clean Sedan cars, and for premium travels, the Toyota Innova Crysta is always available.</p>
      
      <h3>Why Pre-Book Your Patna Junction Cab With Us?</h3>
      <ul>
        <li><strong>Punctual Station Coordination:</strong> Our driver will call you as your train approaches Patna and wait right outside the designated exit gate.</li>
        <li><strong>Safe & Sanitized Fleet:</strong> All cars are air-conditioned, clean, and fully sanitized for your safety.</li>
        <li><strong>Transparent, Competitive Fares:</strong> Get a flat quote upfront with zero hidden tolls or driver boarding surcharges.</li>
      </ul>
      <p>Make your train arrival comfortable and stress-free. Call us or reach out via WhatsApp to reserve your private cab today.</p>
    `
  }
};

export const servicesData: Record<string, PageDetailData> = {
  "one-way-taxi": {
    slug: "one-way-taxi",
    title: "One-Way Taxi Services in Bihar | Safe Door-to-Door Drops",
    metaDescription: "Affordable one-way taxi service across Bihar. Pay only for the distance traveled. Clean Sedan, SUV, Ertiga, Innova. Call for booking.",
    heading: "One-Way Taxi Services",
    overview: `
      <h2>Affordable One-Way Taxi Services in Bihar</h2>
      <p>Why pay for a return trip when you are only traveling one way? Our premium <strong>One-Way Taxi Service</strong> is designed to offer the most economical intercity travel solution across Bihar, Jharkhand, and Uttar Pradesh. You only pay for the distance from your pickup point to your drop destination, saving up to 50% compared to traditional round-trip rentals.</p>
      
      <h3>A Wide Fleet of Clean Cars</h3>
      <p>We maintain a diverse fleet of well-sanitized vehicles to suit all budgets. Choose from fuel-efficient Sedans (Swift Dzire) for solo travels, spacious 6-seater Maruti Ertigas (available with top luggage carriers) for family trips, or luxury Toyota Innova Crystas for corporate travel. All our vehicles are air-conditioned and routinely checked for safety.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li><strong>Door-to-Door Drops:</strong> Direct pickup from your home, hotel, or station and direct drop-off at your destination.</li>
        <li><strong>Completely Transparent Billing:</strong> Pay only for the distance traveled, with all toll taxes explained upfront.</li>
        <li><strong>Verified Professional Drivers:</strong> Safe, courteous drivers with years of highway driving experience.</li>
      </ul>
      <p>Book your one-way cab today and enjoy a hassle-free, cost-effective journey. Get in touch with us via Call or WhatsApp.</p>
    `,
    galleryImages: ["/images/tour-package-img2.jpg"],
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
    overview: `
      <h2>Premium Round-Trip Taxi Services for Holidays & Outstations</h2>
      <p>Plan your weekend getaways, family visits, or multi-day business trips with our convenient <strong>Round-Trip Taxi Services</strong>. With this service, the vehicle and driver remain with you throughout your journey, offering you maximum flexibility to stop, explore, and travel at your own pace. We provide the most competitive rates for intercity outstation round trips in Bihar.</p>
      
      <h3>Comfortable Vehicles for Multi-Day Travel</h3>
      <p>Long highway trips require highly comfortable seating and smooth suspension. We offer premium Sedans, spacious Suzuki Ertiga MUVs, and luxury Toyota Innova Crysta SUVs. Our cars are routinely serviced and sanitized, ensuring a breakdown-free, clean, and healthy environment for your family.</p>
      
      <h3>Why Book Our Round-Trip Cabs?</h3>
      <ul>
        <li><strong>Flexible Sightseeing:</strong> Stop at multiple cities, tourist locations, or local highway eateries whenever you wish.</li>
        <li><strong>Courteous Driver Companions:</strong> Our drivers are polite professionals who are well-versed with regional highway safety and tourist spots.</li>
        <li><strong>All-Inclusive Fares:</strong> Honest, transparent quotes that cover driver allowance, boarding, and fuel costs.</li>
      </ul>
      <p>Enjoy a flexible, comfortable holiday with your loved ones. Contact us via Call or WhatsApp to book your round-trip taxi today.</p>
    `,
    galleryImages: ["/images/destination-img1.jpg"],
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
    overview: `
      <h2>Reliable Intercity Outstation Cab Rentals</h2>
      <p>Travel beyond city limits with our reliable <strong>Outstation Taxi Services</strong>. Whether you are visiting relatives in neighboring districts, heading to Jharkhand or Uttar Pradesh, or exploring historical monuments, our well-maintained fleet is at your service. We offer both one-way drops and round-trip rentals to suit all types of travel plans.</p>
      
      <h3>Versatile Fleet for Diverse Terrains</h3>
      <p>Different outstation routes require different vehicles. For smooth highways, our air-conditioned Sedan cars offer high fuel efficiency and comfort. For rough rural roads, our rugged SUVs like Mahindra Scorpio or Bolero are perfect. For family trips, our Suzuki Ertiga with a roof luggage carrier provides ample space and comfort. We also offer Toyota Innova Crysta for corporate executive travels.</p>
      
      <h3>Top Features:</h3>
      <ul>
        <li><strong>All-India Permit Fleet:</strong> All our outstation vehicles carry valid commercial permits for hassle-free border crossings.</li>
        <li><strong>GPS Safety Tracking:</strong> We track all outstation rides in real-time from our central control room to ensure passenger safety.</li>
        <li><strong>24/7 Customer Support:</strong> Our dedicated helpline is active day and night to assist you during your journey.</li>
      </ul>
      <p>Experience a safe and peaceful outstation journey. Contact us on Call or WhatsApp to book your cab now.</p>
    `,
    galleryImages: ["/images/destination-img2.jpg"],
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
    overview: `
      <h2>Punctual Patna Airport Taxi Services</h2>
      <p>Ensure you never miss a flight. Our dedicated <strong>Patna Airport Taxi Service</strong> offers punctual, reliable pickups from anywhere in Patna and neighboring districts of Bihar. We also provide prompt, instant cab dispatch for incoming passengers at Jay Prakash Narayan Airport (PAT), ensuring a smooth transition from your flight to your car.</p>
      
      <h3>Luggage-Friendly Vehicles for Airport Passengers</h3>
      <p>Airport travel usually involves carrying heavy baggage. We specialize in Suzuki Ertiga MUVs equipped with secure top luggage carriers, allowing you to load all your travel bags easily. For business travelers, we offer premium Sedan cars and luxury Toyota Innova Crysta cabs for a comfortable, quiet, and professional ride.</p>
      
      <h3>Key Advantages:</h3>
      <ul>
        <li><strong>Flight Schedule Monitoring:</strong> We track your flight status to adjust pickup times automatically in case of delays.</li>
        <li><strong>Meet & Greet Service:</strong> Our driver will coordinate with you via phone and wait near the exit gate with a placard for your convenience.</li>
        <li><strong>No Surge Pricing:</strong> Avoid expensive app-based airport surcharges. Get a flat, transparent quote upfront.</li>
      </ul>
      <p>Pre-book your airport transfer today. Reach out to us via Call or WhatsApp for a quick quote.</p>
    `,
    galleryImages: ["/images/breadcrumb-bg3.jpg"],
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
    overview: `
      <h2>Darbhanga Airport Taxi Services - Connect North Bihar</h2>
      <p>Connect smoothly with the fastest-growing airport in North Bihar. Our specialized <strong>Darbhanga Airport Taxi Service</strong> provides direct, reliable transfers from Darbhanga Airport (DBG) to Madhubani, Saharsa, Samastipur, Muzaffarpur, Sitamarhi, or any other town in Mithilanchal. Avoid the hassle of local public transit and travel in a private, air-conditioned cab.</p>
      
      <h3>Luggage Carrier Vehicles for Heavy Bags</h3>
      <p>Arriving from a long flight with heavy baggage? Our Suzuki Ertiga MUVs equipped with secure top luggage carriers are the perfect choice. They comfortably accommodate up to 6 passengers while keeping all bags secured on the roof. We also offer economical Sedan cabs and premium Toyota Innova Crystas.</p>
      
      <h3>Why Choose Our Darbhanga Airport Cabs?</h3>
      <ul>
        <li><strong>Punctuality Guaranteed:</strong> We monitor flight arrivals to ensure your private driver is waiting for you at the terminal when you exit.</li>
        <li><strong>North Bihar Wide Network:</strong> Direct transfers from DBG Airport to all urban and rural blocks in the region.</li>
        <li><strong>Transparent Fixed Pricing:</strong> Clear, honest quotes with zero hidden highway tolls or driver allowances.</li>
      </ul>
      <p>Book your airport transit cab today. Contact our support team via Call or WhatsApp for a fast quote.</p>
    `,
    galleryImages: ["/images/destination-details-gallery-img5.jpg"],
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
    overview: `
      <h2>Safe Gaya Airport Taxi Services for Pilgrims & Tourists</h2>
      <p>Catering to international and domestic pilgrims visiting Gaya and Bodh Gaya. Our professional <strong>Gaya Airport Taxi Service</strong> offers safe, comfortable, and punctual airport transfers from Gaya Airport (GAY) directly to your hotel, monastery, or temple site. Our driver partners are trained in hospitality and safe highway driving.</p>
      
      <h3>Pilgrim-Friendly Fleet and Driver Partners</h3>
      <p>We understand the needs of elderly travelers and international tourists. Our driver partners are polite, local professionals who know all major Bodh Gaya hotels, monasteries, and pilgrimage sites. We maintain a fleet of clean, quiet, and air-conditioned cars, including Sedan models, Suzuki Ertiga, and Toyota Innova Crysta to ensure a peaceful ride.</p>
      
      <h3>Top Features:</h3>
      <ul>
        <li><strong>Airport Meet & Greet:</strong> Our driver will coordinate with you and meet you right outside the arrival terminal exit.</li>
        <li><strong>Pilgrimage Sightseeing:</strong> Customize your cab booking to include local sightseeing at the Mahabodhi Temple, Great Buddha Statue, and historical caves.</li>
        <li><strong>Transparent Pricing:</strong> Competitive flat rates with no hidden fuel charges or driver allowances.</li>
      </ul>
      <p>Make your pilgrimage comfortable and stress-free. Contact us via Call or WhatsApp to pre-book your Gaya Airport cab.</p>
    `,
    galleryImages: ["/images/popular/Tourism photography of Bodh Gaya and Rajgir.png"],
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
    overview: `
      <h2>Punctual Patna Junction Railway Station Taxi Services</h2>
      <p>Arriving at Patna Junction Railway Station (PNBE)? Skip the station exit crowd and avoid negotiating with local auto-rickshaw drivers. Pre-book our private AC taxi to pick you up directly from the station exit and take you comfortably to your destination within Patna or outstations across Bihar. We operate 24/7 to cover all train schedules.</p>
      
      <h3>Spacious and Clean Cabs for Train Passengers</h3>
      <p>Our local station transit fleet comprises clean Sedans and spacious Suzuki Ertiga MUVs. If you are arriving with family and heavy travel trunks, our Suzuki Ertiga with a robust top luggage carrier is the ideal choice. All our vehicles are air-conditioned, clean, and fully sanitized for a healthy ride.</p>
      
      <h3>Why Choose Our Patna Junction Cabs?</h3>
      <ul>
        <li><strong>Direct Coordination:</strong> Our driver will call you as your train approaches Patna and coordinate to pick you up right at the exit gate.</li>
        <li><strong>Fixed Station Fares:</strong> No surge pricing or dynamic fares. Get a flat quote upfront.</li>
        <li><strong>Experienced Local Drivers:</strong> Drivers who know the city routes and traffic conditions to avoid delays.</li>
      </ul>
      <p>Book your station taxi today. Contact us on Call or WhatsApp for a transparent quote.</p>
    `,
    galleryImages: ["/images/destination-img3.jpg"],
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
    overview: `
      <h2>Reliable Rajendra Nagar Terminal Taxi Services</h2>
      <p>Connect easily with major trains departing from or arriving at Rajendra Nagar Terminal (RJPB) in Patna. Our professional <strong>Rajendra Nagar Terminal Taxi Service</strong> provides punctual, comfortable, and air-conditioned private cabs to ensure you never miss your train or get stranded at the station. We serve all arrival and departure times.</p>
      
      <h3>Versatile Vehicles for Group and Business Travel</h3>
      <p>We maintain a modern fleet of Sedans, Suzuki Ertigas (with roof luggage carriers), and premium Toyota Innova Crystas. Whether you are traveling alone on business, with family, or carrying heavy luggage, we have the perfect vehicle to ensure a smooth, comfortable transfer.</p>
      
      <h3>Key Highlights:</h3>
      <ul>
        <li><strong>Punctual Arrival Guarantee:</strong> We ensure our driver arrives at your pickup location 15 minutes before the scheduled time.</li>
        <li><strong>Transparent Fares:</strong> Flat, all-inclusive pricing quotes with zero hidden surcharges.</li>
        <li><strong>Polite and Polite Drivers:</strong> Safe, background-verified professionals who know the city routes thoroughly.</li>
      </ul>
      <p>Make your train transit comfortable and stress-free. Call us or send a message on WhatsApp to reserve your cab today.</p>
    `,
    galleryImages: ["/images/destination-img4.jpg"],
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
    overview: `
      <h2>Danapur Railway Station Taxi Services - Station Transfers</h2>
      <p>Arriving at Danapur Railway Station (DNR) and heading to Patna city, the airport, or any outstation town in Bihar? Our dedicated <strong>Danapur Railway Station Taxi Service</strong> is designed to offer a quick, comfortable, and reliable transfer. Skip the local station crowds and travel in a clean, private, air-conditioned cab.</p>
      
      <h3>Luggage Carrier Ertigas and Sedans</h3>
      <p>Arriving with heavy travel trunks and bags? We offer Maruti Ertiga MUVs equipped with secure top luggage carriers, allowing you to load all your bags easily. For solo travelers or small groups, we offer clean Sedan cars, and for premium outstation travels, the Toyota Innova Crysta is always available.</p>
      
      <h3>Why Choose Our Danapur Station Cabs?</h3>
      <ul>
        <li><strong>Smooth Station Coordination:</strong> Our driver will coordinate with you via phone and wait right outside the exit gate.</li>
        <li><strong>Fixed upfront Pricing:</strong> Flat, transparent quotes with zero hidden extra fees.</li>
        <li><strong>Local and Highway Experts:</strong> Drivers who know both local city traffic routes and outstation highway networks.</li>
      </ul>
      <p>Pre-book your station transfer cab today. Reach out to us via Call or WhatsApp for a quick quote.</p>
    `,
    galleryImages: ["/images/destination-img5.jpg"],
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
    overview: `
      <h2>Bodh Gaya Heritage and Pilgrimage Tour Package</h2>
      <p>Discover Bodh Gaya, the cradle of Buddhism where Prince Siddhartha attained supreme enlightenment under the Bodhi Tree to become Lord Buddha. Our specialized <strong>Bodh Gaya Tour Package</strong> offers a comfortable, private outstation travel solution from Patna. Explore the UNESCO World Heritage Mahabodhi Temple, the towering 80-foot Buddha Statue, and the beautiful monasteries built by international Buddhist communities.</p>
      
      <h3>Comfortable Vehicles for Pilgrims</h3>
      <p>We understand that pilgrimage tours require quiet, comfortable, and smooth travel. We offer well-maintained, air-conditioned Sedans, Suzuki Ertiga MUVs, and premium Toyota Innova Crysta SUVs. Our drivers are polite, local professionals who know all major temple sites and hotels, ensuring a peaceful journey for senior citizens.</p>
      
      <h3>Key Tour Highlights:</h3>
      <ul>
        <li><strong>Mahabodhi Temple Complex:</strong> Detailed visit to the UNESCO Heritage brick temple and the sacred Bodhi Tree.</li>
        <li><strong>International Monasteries:</strong> Explore the Thai, Japanese, Tibetan, Bhutanese, and Chinese monasteries.</li>
        <li><strong>Doorstep transfers:</strong> Direct pickup from Patna Airport, railway station, or home and smooth hotel drops.</li>
      </ul>
      <p>Embark on a spiritual journey. Contact us via Call or WhatsApp to book your Bodh Gaya tour package today.</p>
    `,
    galleryImages: ["/images/destination-details-gallery-img1.jpg"],
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
    overview: `
      <h2>Rajgir Nature and Adventure Tour Package</h2>
      <p>Explore Rajgir, a historic valley surrounded by five green hills, deeply sacred to Hindus, Buddhists, and Jains. Famous for its holy warm mineral springs, the mountain-top Vishwa Shanti Stupa reached by a scenic ropeway, and the historic ruins of Bimbisara Jail. Our specialized <strong>Rajgir Tour Package</strong> offers a comfortable private cab transfer to cover all major sites, including the famous Rajgir Glass Bridge Skywalk inside the Nature Safari.</p>
      
      <h3>Modern Cars for Adventure Travel</h3>
      <p>We provide comfortable, clean, and air-conditioned Sedans, Suzuki Ertigas (with roof luggage carriers), and Toyota Innova Crysta SUVs. Our local drivers are background-verified, courteous, and know all major roads, local dining options, and sightseeing spots in Rajgir.</p>
      
      <h3>Key Tour Highlights:</h3>
      <ul>
        <li><strong>Rajgir Glass Bridge Skywalk:</strong> Experience the thrilling 85-foot long transparent skywalk over a deep valley.</li>
        <li><strong>Vishwa Shanti Stupa:</strong> Scenic ropeway ride to the Peace Pagoda on the Ratnagiri hill.</li>
        <li><strong>Warm Springs (Brahmakund):</strong> Visit the holy hot water springs, sacred for spiritual bathing.</li>
      </ul>
      <p>Plan your adventure today. Contact us on Call or WhatsApp to book your Rajgir tour package.</p>
    `,
    galleryImages: ["/images/popular/Rajgir Glass Skywalk Bridge.png"],
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
    overview: `
      <h2>Nalanda Ancient History Tour Package</h2>
      <p>Step back in time and explore the UNESCO World Heritage ruins of Nalanda University, the ancient world's premier seat of higher learning which flourished from the 5th to the 12th century AD. Our specialized <strong>Nalanda Tour Package</strong> offers a direct, private cab returning to Patna on the same day. Explore the historic ruins, the Nalanda Archaeological Museum, and the Xuanzang Memorial Hall.</p>
      
      <h3>Comfortable Vehicles and Local Guides</h3>
      <p>We provide well-maintained, air-conditioned Sedan cars, Suzuki Ertiga MUVs, and premium Toyota Innova Crysta SUVs. Our drivers are background-verified, polite, and well-acquainted with the highways. We can also help arrange certified archaeological guides upon request.</p>
      
      <h3>Key Tour Highlights:</h3>
      <ul>
        <li><strong>UNESCO University Ruins:</strong> Walk through the ancient lecture halls, classrooms, monasteries, and stupas.</li>
        <li><strong>Archaeological Museum:</strong> Houses sculptures, bronzes, coins, and plaster casts excavated from the ruins.</li>
        <li><strong>Xuanzang Memorial Hall:</strong> Peaceful monument dedicated to the legendary Chinese traveler-scholar.</li>
      </ul>
      <p>Plan your historical exploration. Contact us on Call or WhatsApp to book your Nalanda tour package today.</p>
    `,
    galleryImages: ["/images/popular/Nalanda University ruins.png"],
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
    overview: `
      <h2>Vaishali Buddhist and Jain Heritage Tour Package</h2>
      <p>Explore Vaishali, the capital of the ancient Licchavi republic, believed to be the world's first democratic republic. Vaishali holds immense spiritual significance as the place where Lord Buddha preached his last sermon and Lord Mahavira, the 24th Jain Tirthankara, was born. Our dedicated <strong>Vaishali Tour Package</strong> offers a direct, private same-day return cab from Patna, covering the famous Ashokan Pillar, Abhishek Pushkarini coronation tank, and Vishwa Shanti Stupa.</p>
      
      <h3>Modern Cars for Safe Travels</h3>
      <p>We provide clean, fully air-conditioned Sedan cars, Suzuki Ertiga MUVs, and premium Toyota Innova Crysta SUVs. Our drivers are background-verified, polite, and know all regional highway networks, ensuring a smooth and safe journey.</p>
      
      <h3>Key Tour Highlights:</h3>
      <ul>
        <li><strong>Ashokan Pillar:</strong> A stunning polished sandstone pillar built by Emperor Ashoka, crowned by a single lion.</li>
        <li><strong>Abhishek Pushkarini:</strong> The sacred coronation tank of the ancient Licchavi republic.</li>
        <li><strong>Buddhist Relic Stupa:</strong> The site where Lord Buddha's relics were enshrined.</li>
      </ul>
      <p>Discover the ancient history of democracy. Contact us via Call or WhatsApp to book your Vaishali tour package today.</p>
    `,
    galleryImages: ["/images/popular/Ashoka Pillar and Buddhist heritage.png"],
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
    overview: `
      <h2>Madhubani Mithila Art & Cultural Tour Package</h2>
      <p>Immerse yourself in Mithila's vibrant traditional arts and crafts with our specialized <strong>Madhubani Art Tour Package</strong>. We take you directly from Patna to the legendary art villages of Jitwarpur and Ranti. Meet Padma Shri and National Award-winning Madhubani artists in their courtyard studios, watch them paint using natural dyes, and buy authentic artwork directly from the source.</p>
      
      <h3>Luggage-friendly Vehicles for Artwork</h3>
      <p>Buying paintings and souvenirs? We offer Suzuki Ertiga MUVs equipped with secure top luggage carriers, allowing you to easily carry heavy travel bags and fragile paintings without congesting passenger space. We also offer comfortable Sedan cars and premium Toyota Innova Crystas.</p>
      
      <h3>Key Tour Highlights:</h3>
      <ul>
        <li><strong>Art Village Courtyards:</strong> Walk through villages painted with beautiful traditional mural artwork.</li>
        <li><strong>Meet Award-Winning Artists:</strong> Interact directly with Mithila master artists and understand their stories.</li>
        <li><strong>Authentic Shopping:</strong> Purchase authentic Madhubani paintings directly from the artisans, supporting their livelihood.</li>
      </ul>
      <p>Explore the colors of Mithila. Contact us via Call or WhatsApp to book your Madhubani art tour today.</p>
    `,
    galleryImages: ["/images/destination-img6.jpg"],
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
    overview: `
      <h2>Darbhanga Royal Heritage & Temple Tour Package</h2>
      <p>Unveil the royal legacy of Mithilanchal with our <strong>Darbhanga Heritage Tour Package</strong>. We take you on a direct, comfortable journey from Patna to explore the majestic Raj Fort complex, the ornate palaces designed by French and Italian architects, the serene Shyama Mai temple built on royal cremation grounds, and the historic Ahilya Asthan Ramayana site. Taste authentic Mithila delicacies along the way.</p>
      
      <h3>Spacious Cars for Heritage Tours</h3>
      <p>We provide well-maintained, air-conditioned Sedans, Suzuki Ertiga MUVs, and premium Toyota Innova Crysta SUVs. Our drivers are polite, background-verified, and well-acquainted with the routes, ensuring a safe and comfortable travel experience.</p>
      
      <h3>Key Tour Highlights:</h3>
      <ul>
        <li><strong>Royal Palaces Tour:</strong> Visit the Anand Bagh Palace, Lakshmishwar Vilas Palace, and Nargona Palace.</li>
        <li><strong>Shyama Mai Temple:</strong> A spiritual sanctuary built on the cremation grounds of Darbhanga's Maharajas.</li>
        <li><strong>Mithila Delicacies:</strong> Taste authentic regional foods like fish-curry, makhana kheer, and pan.</li>
      </ul>
      <p>Experience the royal side of Mithila. Contact us via Call or WhatsApp to book your Darbhanga heritage tour today.</p>
    `,
    galleryImages: ["/images/destination-img7.jpg"],
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
