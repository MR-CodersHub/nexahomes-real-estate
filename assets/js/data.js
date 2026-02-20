const properties = [
    {
        id: 1,
        title: "The Belvedere Penthouse",
        price: "$18,500,000",
        location: "5th Avenue, New York",
        city: "New York",
        beds: 5,
        baths: 6,
        sqft: 6200,
        type: "Penthouse",
        status: "Active Listing",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Tribeca Industrial Loft",
        price: "$8,200,000",
        location: "Greenwich St, New York",
        city: "New York",
        beds: 3,
        baths: 3,
        sqft: 3400,
        type: "Loft",
        status: "Exclusive",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "The Central Park Collection",
        price: "$14,800,000",
        location: "Central Park South, NY",
        city: "New York",
        beds: 4,
        baths: 4,
        sqft: 4100,
        type: "Condominium",
        status: "Active Listing",
        image: "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "The Heritage Manor",
        price: "$45,000,000",
        location: "Bel Air, Los Angeles",
        city: "Los Angeles",
        beds: 9,
        baths: 12,
        sqft: 18500,
        type: "Mansion",
        status: "Private Treaty",
        image: "https://images.unsplash.com/photo-1600596542815-27b88e31e971?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        title: "Skyline Vista Modern",
        price: "$12,400,000",
        location: "Hollywood Hills, LA",
        city: "Los Angeles",
        beds: 6,
        baths: 7,
        sqft: 7200,
        type: "Architectural",
        status: "Active Listing",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        title: "The Azure Glass House",
        price: "$28,900,000",
        location: "Pacific Coast Hwy, Malibu",
        city: "Malibu",
        beds: 5,
        baths: 6,
        sqft: 5800,
        type: "Estate",
        status: "Off-Market",
        image: "https://images.unsplash.com/photo-1511844486005-b8f355b85e5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        title: "Siren’s Cove Villa",
        price: "$19,500,000",
        location: "Carbon Beach, Malibu",
        city: "Malibu",
        beds: 6,
        baths: 8,
        sqft: 7400,
        type: "Beachfront",
        status: "Active Listing",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        title: "Star Island Sanctuary",
        price: "$52,000,000",
        location: "Star Island, Miami",
        city: "Miami",
        beds: 10,
        baths: 14,
        sqft: 22000,
        type: "Island Estate",
        status: "By Appointment",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        title: "The Continuum Sky-Home",
        price: "$9,500,000",
        location: "South Beach, Miami",
        city: "Miami",
        beds: 4,
        baths: 5,
        sqft: 3800,
        type: "Penthouse",
        status: "Exclusive",
        image: "https://images.unsplash.com/photo-1512918766775-d263237b4b76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 10,
        title: "The Silverthorne Lodge",
        price: "$22,000,000",
        location: "Red Mountain, Aspen",
        city: "Aspen",
        beds: 7,
        baths: 9,
        sqft: 9500,
        type: "Ski Chalet",
        status: "Private Treaty",
        image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 11,
        title: "The Lakefront Spire",
        price: "$7,800,000",
        location: "Magnificent Mile, Chicago",
        city: "Chicago",
        beds: 4,
        baths: 4,
        sqft: 4200,
        type: "Sky Residence",
        status: "Active Listing",
        image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 12,
        title: "The Obsidian Pavilion",
        price: "$15,900,000",
        location: "Hollywood Hills, Los Angeles",
        city: "Los Angeles",
        beds: 5,
        baths: 7,
        sqft: 8100,
        type: "Architectural",
        status: "New Listing",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 13,
        title: "Viale dei Cipressi Estate",
        price: "$34,000,000",
        location: "Coral Gables, Miami",
        city: "Miami",
        beds: 8,
        baths: 10,
        sqft: 14500,
        type: "Mediterranean Villa",
        status: "Exclusive",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 14,
        title: "The Marquee Residence",
        price: "$11,200,000",
        location: "Greene St, New York",
        city: "New York",
        beds: 3,
        baths: 4,
        sqft: 4600,
        type: "Convertible Loft",
        status: "Active Listing",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 15,
        title: "Windswept Ridge",
        price: "$21,400,000",
        location: "Point Dume, Malibu",
        city: "Malibu",
        beds: 6,
        baths: 7,
        sqft: 9200,
        type: "Estate",
        status: "Private Treaty",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 16,
        title: "The Gilded Age Mansion",
        price: "$6,500,000",
        location: "Astor St, Chicago",
        city: "Chicago",
        beds: 6,
        baths: 5,
        sqft: 7800,
        type: "Historic Manor",
        status: "Rare Offering",
        image: "https://images.unsplash.com/photo-1600210491892-43d3393845bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 17,
        title: "Summit Watch Cabin",
        price: "$16,800,000",
        location: "Snowmass, Aspen",
        city: "Aspen",
        beds: 5,
        baths: 6,
        sqft: 6800,
        type: "Mountain Legacy",
        status: "Active Listing",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 18,
        title: "The Glass Atrium",
        price: "$9,900,000",
        location: "West 10th St, New York",
        city: "New York",
        beds: 4,
        baths: 4,
        sqft: 5200,
        type: "Townhouse",
        status: "Off-Market",
        image: "https://images.unsplash.com/photo-1512914890251-2ef5bb1e594c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 19,
        title: "Midnight Canyon Retreat",
        price: "$13,500,000",
        location: "Pacific Palisades, Los Angeles",
        city: "Los Angeles",
        beds: 6,
        baths: 8,
        sqft: 8900,
        type: "Modernist",
        status: "Exclusive",
        image: "https://images.unsplash.com/photo-1628592102751-ba83b0314276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 20,
        title: "Aqua Marina Estates",
        price: "$27,800,000",
        location: "Key Biscayne, Miami",
        city: "Miami",
        beds: 9,
        baths: 11,
        sqft: 16400,
        type: "Waterfront Estate",
        status: "Active Listing",
        image: "https://images.unsplash.com/photo-1512915922686-57c11db9b6f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 21,
        title: "The Zenith Penthouse",
        price: "$8,900,000",
        location: "The Loop, Chicago",
        city: "Chicago",
        beds: 5,
        baths: 6,
        sqft: 5400,
        type: "Duplex Penthouse",
        status: "By Appointment",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 22,
        title: "Solaris Beach House",
        price: "$18,200,000",
        location: "Broad Beach Road, Malibu",
        city: "Malibu",
        beds: 4,
        baths: 5,
        sqft: 6100,
        type: "Beachfront",
        status: "New Listing",
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 23,
        title: "The Icicle Manor",
        price: "$31,500,000",
        location: "Starwood Dr, Aspen",
        city: "Aspen",
        beds: 9,
        baths: 12,
        sqft: 19800,
        type: "Mountain Estate",
        status: "Private Treaty",
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 24,
        title: "The Belvedere Annex",
        price: "$6,200,000",
        location: "Madison Ave, New York",
        city: "New York",
        beds: 2,
        baths: 2,
        sqft: 2100,
        type: "Residence",
        status: "Active Listing",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 25,
        title: "The Sunset Atrium",
        price: "$14,500,000",
        location: "Bel Air Rd, Los Angeles",
        city: "Los Angeles",
        beds: 5,
        baths: 6,
        sqft: 7900,
        type: "Glass House",
        status: "New Listing",
        image: "https://images.unsplash.com/photo-1628592102751-ba83b0314276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 26,
        title: "Coral Reef Manor",
        price: "$22,800,000",
        location: "Coconut Grove, Miami",
        city: "Miami",
        beds: 7,
        baths: 9,
        sqft: 11200,
        type: "Coastal Estate",
        status: "Exclusive",
        image: "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 27,
        title: "The Surfside Sanctuary",
        price: "$16,400,000",
        location: "Malibu Colony Rd, Malibu",
        city: "Malibu",
        beds: 4,
        baths: 4,
        sqft: 4800,
        type: "Beachfront",
        status: "Active Listing",
        image: "https://images.unsplash.com/photo-1510627945351-5675f0a2f1bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 28,
        title: "Frost Peak Lodge",
        price: "$24,500,000",
        location: "Ridge Rd, Aspen",
        city: "Aspen",
        beds: 8,
        baths: 10,
        sqft: 13400,
        type: "Alpine Estate",
        status: "Rare Offering",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 29,
        title: "The Windy City Sky-Loft",
        price: "$5,900,000",
        location: "River North, Chicago",
        city: "Chicago",
        beds: 3,
        baths: 3,
        sqft: 3900,
        type: "Penthouse",
        status: "Active Listing",
        image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const cityData = {
    "New York": {
        title: "New York City",
        description: "The global epicenter of commerce and culture. Our New York portfolio features architectural icons where legacy meets the sky, offering unparalleled access to the world's most sophisticated urban lifestyle.",
        images: [
            "https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
            "https://images.unsplash.com/photo-1546436836-07a91091f160?ixlib=rb-4.0.3&auto=format&fit=crop&w=800"
        ],
        highlights: [
            { icon: "fa-city", title: "Skyline Mastery", desc: "Penthouse residences with command views of Gotham." },
            { icon: "fa-gem", title: "Cultural Rarity", desc: "Proximity to the world's finest galleries and ateliers." },
            { icon: "fa-chart-line", title: "Legacy Equity", desc: "Consistently the most stable high-value asset class." }
        ]
    },
    "Los Angeles": {
        title: "Los Angeles",
        description: "Where cinematic splendor meets architectural innovation. From the gated enclaves of Bel Air to the modernist gems in the hills, experience the pinnacle of West Coast grandeur and discrete luxury.",
        images: [
            "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800"
        ],
        highlights: [
            { icon: "fa-star", title: "Elite Enclaves", desc: "Private estates in the most prestigious ZIP codes." },
            { icon: "fa-sun", title: "Indoor-Outdoor", desc: "Seamless architecture designed for the golden hour." },
            { icon: "fa-mountain", title: "Canyon Privacy", desc: "Unrivaled seclusion amidst the Santa Monica mountains." }
        ]
    },
    "Miami": {
        title: "Miami",
        description: "The capital of tropical modernism. Discover waterfront sanctuaries and glass towers that redefine coastal living, blending vibrant international energy with the absolute finest in leisure and design.",
        images: [
            "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
            "https://images.unsplash.com/photo-1514214246283-ef1e12db1120?ixlib=rb-4.0.3&auto=format&fit=crop&w=800"
        ],
        highlights: [
            { icon: "fa-water", title: "Bespoke Docks", desc: "Direct deep-water access for the yachting enthusiast." },
            { icon: "fa-palette", title: "Art District", desc: "Proximity to Art Basel and high-design districts." },
            { icon: "fa-umbrella-beach", title: "Island Prestige", desc: "Exclusive mansion-only islands with 24/7 security." }
        ]
    },
    "Malibu": {
        title: "Malibu",
        description: "California’s ultimate shoreline. A 21-mile stretch of pristine coast featuring beachfront masterpieces and hilltop estates where the Pacific Ocean is your most prominent neighbor.",
        images: [
            "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1520601962383-7c09349e599e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
            "https://images.unsplash.com/photo-1560965008-8a8b86dcf245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800"
        ],
        highlights: [
            { icon: "fa-water", title: "Private Sands", desc: "Direct access to the world's most exclusive beaches." },
            { icon: "fa-leaf", title: "Coastal Reserve", desc: "Estates bordering untouched natural preserves." },
            { icon: "fa-wine-glass", title: "Nobu Vicinity", desc: "Proximity to Malibu’s world-famous dining scene." }
        ]
    },
    "Aspen": {
        title: "Aspen",
        description: "The pinnacle of alpine refinement. From ski-in/ski-out architectural marvels to historic mountain compounds, Aspen offers a year-round retreat for those seeking nature and high-design in equal measure.",
        images: [
            "https://images.unsplash.com/photo-1517154421773-0529f2963810?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1519780004456-62df860a4f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
            "https://images.unsplash.com/photo-1548671719-755dd3f6eb73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800"
        ],
        highlights: [
            { icon: "fa-snowflake", title: "Ski Mastery", desc: "Estates with direct portal access to the slopes." },
            { icon: "fa-fire", title: "Alpine Luxe", desc: "Home spas, wine cellars, and obsidian firepits." },
            { icon: "fa-users", title: "Social Hub", desc: "A world-stage for finance and entertainment leaders." }
        ]
    },
    "Chicago": {
        title: "Chicago",
        description: "The birthplace of modern architecture. Experience sky-high luxury along the Magnificent Mile and historic elegance in the Gold Coast, where the Great Lake meets a world-class skyline.",
        images: [
            "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
            "https://images.unsplash.com/photo-1496588136313-750ca53c94df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800"
        ],
        highlights: [
            { icon: "fa-building", title: "Sky Residences", desc: "Full-floor units in iconic modernist skyscrapers." },
            { icon: "fa-water", title: "Lakeside Living", desc: "Panoramic vistas across the shore of Lake Michigan." },
            { icon: "fa-utensils", title: "Michelin Proximity", desc: "Steps from the nation's premier dining corridor." }
        ]
    }
};

const blogPosts = [
    {
        id: 1,
        title: "Global Luxury Outlook 2026",
        date: "March 15, 2026",
        category: "Real Estate",
        excerpt: "Analysis of the shifting trends in high-net-worth migration and property demand in the world's most stable markets.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Designing for Vertical Living",
        date: "February 28, 2026",
        category: "Architecture",
        excerpt: "How modern skyscrapers are redefining the concept of a 'Penthouse' experience with shared ultra-luxe amenities.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "The Rise of Smart Luxury",
        date: "January 10, 2026",
        category: "Investment",
        excerpt: "Integrating sustainable technology into the world's most expensive homes without compromising on opulence.",
        image: "https://images.unsplash.com/photo-1554232456-8727aae0cfa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];
