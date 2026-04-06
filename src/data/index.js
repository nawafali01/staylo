import ahad from "../assets/userDashboardMessage/ahad.jpg";
import fahad from "../assets/userDashboardMessage/fahad.jpg";
import rohan from "../assets/userDashboardMessage/rohan.jpg";
import sami from "../assets/userDashboardMessage/sami.jpg";
import checkIcon from '../assets/svg/aboutPage/check.svg?raw';
import phoneIcon from '../assets/svg/aboutPage/phone.svg?raw';
import currencyIcon from '../assets/svg/aboutPage/currency.svg?raw';
import buildingIcon from '../assets/svg/aboutPage/building.svg?raw';
import {
  RectangleStackIcon,
  HomeModernIcon,
  ScaleIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  GlobeAltIcon,
  HomeIcon,
  HeartIcon,
  KeyIcon,
  Squares2X2Icon,
  BookOpenIcon,
  ChatBubbleOvalLeftIcon,
  Cog6ToothIcon,
  InboxIcon,
  SparklesIcon,
  ArrowsPointingOutIcon,
  WifiIcon,
   TruckIcon,
  FireIcon,
  SunIcon,
} from '@heroicons/react/24/outline';

export const Properties = [
  {
    id: 1,
    title: "Sunset Valley Estates",
    location: "Beverly Hills, CA",
    price: 3200,
    rating: 4.9,
    beds: 3,
    baths: 2.5,
    sqft: 2400,
    featured: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    status: "Available Now",
    reviewCount: 124,
    billsIncluded: false,
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80"
    ],
    totalPhotos: 12,
    bedType: "Queen size beds",
    bathroomType: "Includes ensuite",
    areaType: "Living area",
    description: [
      "Experience unparalleled luxury in this stunning contemporary estate located in the heart of Beverly Hills. Sunset Valley Estates offers a perfect blend of modern architecture and warm, inviting spaces.",
      "The gourmet kitchen is equipped with top-of-the-line appliances, perfect for hosting or quiet family dinners. Outside, you'll find a private oasis with a heated pool and breathtaking canyon views."
    ],
    amenities: [
      { label: "Fast WiFi", icon: "wifi" },
      { label: "Private Pool", icon: "sparkles" },
      { label: "Home Gym", icon: "fire" },
      { label: "Free Parking", icon: "truck" },
      { label: "Kitchen", icon: "home" },
      { label: "Air Conditioning", icon: "sun" }
    ],
    totalAmenities: 24,
    hostName: "Jane Doe",
    hostImage: "https://i.pravatar.cc/60?img=47",
    hostJoined: "March 2021",
    isSuperhost: true,
    securityDeposit: 1000,
    platformFee: 0,
    isVerified: true,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7!2d-118.4004!3d34.0736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBeverly+Hills+CA!5e0!3m2!1sen!2sus!4v1"
  },

  {
    id: 2,
    title: "Pacific Breeze Condo",
    location: "Malibu, CA",
    price: 4500,
    rating: 4.8,
    beds: 2,
    baths: 2,
    sqft: 1800,
    featured: true,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    status: "Available Now",
    reviewCount: 98,
    billsIncluded: true,
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80"
    ],
    totalPhotos: 18,
    bedType: "King size beds",
    bathroomType: "Ocean view bathroom",
    areaType: "Total living space",
    description: [
      "Wake up to breathtaking ocean views every morning in this stunning Malibu condo. Floor-to-ceiling windows frame the Pacific perfectly, making every moment feel like a vacation.",
      "Steps from the beach, this fully furnished unit includes premium appliances, a private balcony, and access to a rooftop pool with panoramic coastal views."
    ],
    amenities: [
      { label: "Fast WiFi", icon: "wifi" },
      { label: "Rooftop Pool", icon: "sparkles" },
      { label: "Beach Access", icon: "sun" },
      { label: "Valet Parking", icon: "truck" },
      { label: "Kitchen", icon: "home" },
      { label: "Air Conditioning", icon: "sun" }
    ],
    totalAmenities: 20,
    hostName: "Carlos Rivera",
    hostImage: "https://i.pravatar.cc/60?img=8",
    hostJoined: "July 2018",
    isSuperhost: true,
    securityDeposit: 2000,
    platformFee: 0,
    isVerified: true,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7!2d-118.7798!3d34.0259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMalibu+CA!5e0!3m2!1sen!2sus!4v1"
  },

  {
    id: 3,
    title: "Willow Creek House",
    location: "Pasadena, CA",
    price: 1850,
    rating: 4.5,
    beds: 2,
    baths: 1,
    sqft: 1250,
    featured: false,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    status: "Available Now",
    reviewCount: 67,
    billsIncluded: true,
    gallery: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80"
    ],
    totalPhotos: 8,
    bedType: "Single beds",
    bathroomType: "Shared bathroom",
    areaType: "Living area",
    description: [
      "A charming creek-side house nestled in the quiet streets of Pasadena. Perfect for small families or couples looking for a peaceful retreat away from the city buzz.",
      "Enjoy the lush garden views and easy access to local cafes, parks, and shopping centers just minutes away. Bills are fully included in the rent."
    ],
    amenities: [
      { label: "Fast WiFi", icon: "wifi" },
      { label: "Garden View", icon: "sun" },
      { label: "Free Parking", icon: "truck" },
      { label: "Kitchen", icon: "home" },
      { label: "Air Conditioning", icon: "sun" },
      { label: "Washer", icon: "sparkles" }
    ],
    totalAmenities: 15,
    hostName: "Mark Stevens",
    hostImage: "https://i.pravatar.cc/60?img=12",
    hostJoined: "June 2019",
    isSuperhost: false,
    securityDeposit: 800,
    platformFee: 0,
    isVerified: true,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7!2d-118.1445!3d34.1478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPasadena+CA!5e0!3m2!1sen!2sus!4v1"
  },

  {
    id: 4,
    title: "Modern Oasis Villa",
    location: "Irvine, CA",
    price: 2400,
    rating: 4.7,
    beds: 3,
    baths: 2.5,
    sqft: 1980,
    featured: false,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    status: "Available Now",
    reviewCount: 95,
    billsIncluded: false,
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80"
    ],
    totalPhotos: 10,
    bedType: "King size beds",
    bathroomType: "Includes ensuite",
    areaType: "Living area",
    description: [
      "A modern villa designed for comfort and elegance in the heart of Irvine. This property offers a luxurious lifestyle with state-of-the-art facilities and impeccable interior design.",
      "The private pool and beautifully landscaped garden make it the perfect escape. Close to top-rated schools, malls, and business districts."
    ],
    amenities: [
      { label: "Fast WiFi", icon: "wifi" },
      { label: "Private Pool", icon: "sparkles" },
      { label: "Free Parking", icon: "truck" },
      { label: "Kitchen", icon: "home" },
      { label: "Air Conditioning", icon: "sun" },
      { label: "Home Gym", icon: "fire" }
    ],
    totalAmenities: 18,
    hostName: "Sarah Connor",
    hostImage: "https://i.pravatar.cc/60?img=25",
    hostJoined: "January 2020",
    isSuperhost: true,
    securityDeposit: 1200,
    platformFee: 0,
    isVerified: true,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7!2d-117.8265!3d33.6846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIrvine+CA!5e0!3m2!1sen!2sus!4v1"
  },

  {
    id: 5,
    title: "Brick Road Studio",
    location: "Santa Monica, CA",
    price: 1500,
    rating: 4.3,
    beds: 1,
    baths: 1,
    sqft: 850,
    featured: false,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
    status: "Available Now",
    reviewCount: 43,
    billsIncluded: false,
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80"
    ],
    totalPhotos: 6,
    bedType: "Double bed",
    bathroomType: "Private bathroom",
    areaType: "Studio space",
    description: [
      "A cozy and stylish studio apartment just 5 minutes walk from Santa Monica Beach. Perfect for solo professionals or couples who love coastal living.",
      "Recently renovated with modern finishes, this compact studio maximizes every inch of space with smart storage and open plan design."
    ],
    amenities: [
      { label: "Fast WiFi", icon: "wifi" },
      { label: "Beach Access", icon: "sun" },
      { label: "Street Parking", icon: "truck" },
      { label: "Kitchen", icon: "home" },
      { label: "Air Conditioning", icon: "sun" },
      { label: "Laundry", icon: "sparkles" }
    ],
    totalAmenities: 12,
    hostName: "Emma Wilson",
    hostImage: "https://i.pravatar.cc/60?img=32",
    hostJoined: "April 2022",
    isSuperhost: false,
    securityDeposit: 600,
    platformFee: 0,
    isVerified: true,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7!2d-118.4912!3d34.0195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSanta+Monica+CA!5e0!3m2!1sen!2sus!4v1"
  },

  {
    id: 6,
    title: "Canyon View Modern",
    location: "Sherman Oaks, CA",
    price: 3900,
    rating: 4.9,
    beds: 4,
    baths: 3.5,
    sqft: 2800,
    featured: true,
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800",
    status: "Available Now",
    reviewCount: 112,
    billsIncluded: false,
    gallery: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80"
    ],
    totalPhotos: 22,
    bedType: "King & Queen beds",
    bathroomType: "Ensuite + shared",
    areaType: "Total floor area",
    description: [
      "Perched above Sherman Oaks with sweeping canyon views, this architectural masterpiece blends indoor and outdoor living seamlessly. Every room has been designed to capture natural light.",
      "Features include a chef's kitchen, home theater, wine cellar, and an infinity pool overlooking the valley. Perfect for large families or professionals who love to entertain."
    ],
    amenities: [
      { label: "Fast WiFi", icon: "wifi" },
      { label: "Infinity Pool", icon: "sparkles" },
      { label: "Home Theater", icon: "fire" },
      { label: "3 Car Garage", icon: "truck" },
      { label: "Chef Kitchen", icon: "home" },
      { label: "Air Conditioning", icon: "sun" }
    ],
    totalAmenities: 28,
    hostName: "David Park",
    hostImage: "https://i.pravatar.cc/60?img=53",
    hostJoined: "February 2017",
    isSuperhost: true,
    securityDeposit: 2500,
    platformFee: 0,
    isVerified: true,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7!2d-118.4487!3d34.1514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSherman+Oaks+CA!5e0!3m2!1sen!2sus!4v1"
  },

  {
    id: 7,
    title: "Beverly Hills Bungalow",
    location: "Beverly Hills, CA",
    price: 2750,
    rating: 4.6,
    beds: 2,
    baths: 2,
    sqft: 1600,
    featured: false,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    status: "Available Now",
    reviewCount: 78,
    billsIncluded: false,
    gallery: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80"
    ],
    totalPhotos: 14,
    bedType: "Queen size beds",
    bathroomType: "Private bathrooms",
    areaType: "Living area",
    description: [
      "A classic Beverly Hills bungalow with timeless charm and modern upgrades. Tree-lined streets, manicured gardens, and a warm interior make this a truly special home.",
      "Walking distance to Rodeo Drive, fine dining, and boutique shopping. Ideal for professionals or couples looking for upscale yet intimate living."
    ],
    amenities: [
      { label: "Fast WiFi", icon: "wifi" },
      { label: "Private Garden", icon: "sun" },
      { label: "Free Parking", icon: "truck" },
      { label: "Kitchen", icon: "home" },
      { label: "Fireplace", icon: "fire" },
      { label: "Air Conditioning", icon: "sun" }
    ],
    totalAmenities: 16,
    hostName: "Olivia Hart",
    hostImage: "https://i.pravatar.cc/60?img=44",
    hostJoined: "September 2019",
    isSuperhost: false,
    securityDeposit: 1500,
    platformFee: 0,
    isVerified: true,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7!2d-118.4004!3d34.0736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBeverly+Hills+CA!5e0!3m2!1sen!2sus!4v1"
  },

  {
    id: 8,
    title: "Downtown Loft",
    location: "Los Angeles, CA",
    price: 2100,
    rating: 4.4,
    beds: 1,
    baths: 1,
    sqft: 950,
    featured: false,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    status: "Available Now",
    reviewCount: 55,
    billsIncluded: false,
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80"
    ],
    totalPhotos: 9,
    bedType: "Queen size bed",
    bathroomType: "Modern bathroom",
    areaType: "Open plan loft",
    description: [
      "An ultra-modern industrial loft in the heart of Downtown LA. Exposed brick walls, concrete floors, and 14-foot ceilings create a unique urban living experience.",
      "Located steps from world-class restaurants, art galleries, and nightlife. Perfect for creatives and young professionals who thrive in an energetic city environment."
    ],
    amenities: [
      { label: "Fast WiFi", icon: "wifi" },
      { label: "Rooftop Access", icon: "sun" },
      { label: "Paid Parking", icon: "truck" },
      { label: "Kitchen", icon: "home" },
      { label: "Air Conditioning", icon: "sun" },
      { label: "Concierge", icon: "sparkles" }
    ],
    totalAmenities: 14,
    hostName: "James Lee",
    hostImage: "https://i.pravatar.cc/60?img=60",
    hostJoined: "November 2020",
    isSuperhost: false,
    securityDeposit: 900,
    platformFee: 0,
    isVerified: true,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7!2d-118.2437!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLos+Angeles+CA!5e0!3m2!1sen!2sus!4v1"
  },

  {
    id: 9,
    title: "Hillside Retreat",
    location: "Hollywood Hills, CA",
    price: 5200,
    rating: 4.9,
    beds: 4,
    baths: 4,
    sqft: 3800,
    featured: true,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800",
    status: "Available Now",
    reviewCount: 136,
    billsIncluded: false,
    gallery: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80"
    ],
    totalPhotos: 30,
    bedType: "King size beds",
    bathroomType: "Luxury ensuites",
    areaType: "Total estate area",
    description: [
      "A celebrity-style retreat perched high in the Hollywood Hills with iconic views of the LA skyline and the famous Hollywood sign. Complete privacy with 24/7 security.",
      "Features an infinity edge pool, outdoor kitchen, home cinema, and spa. This is the pinnacle of Hollywood luxury living — designed for those who accept nothing but the best."
    ],
    amenities: [
      { label: "Fast WiFi", icon: "wifi" },
      { label: "Infinity Pool", icon: "sparkles" },
      { label: "Home Cinema", icon: "fire" },
      { label: "4 Car Garage", icon: "truck" },
      { label: "Outdoor Kitchen", icon: "home" },
      { label: "Spa & Sauna", icon: "sun" }
    ],
    totalAmenities: 32,
    hostName: "Rachel Kim",
    hostImage: "https://i.pravatar.cc/60?img=38",
    hostJoined: "May 2016",
    isSuperhost: true,
    securityDeposit: 3000,
    platformFee: 0,
    isVerified: true,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7!2d-118.3287!3d34.1341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHollywood+Hills+CA!5e0!3m2!1sen!2sus!4v1"
  },

  {
    id: 10,
    title: "Coastal Cottage",
    location: "Santa Barbara, CA",
    price: 1900,
    rating: 4.5,
    beds: 2,
    baths: 1,
    sqft: 1100,
    featured: false,
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800",
    status: "Available Now",
    reviewCount: 61,
    billsIncluded: true,
    gallery: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80"
    ],
    totalPhotos: 11,
    bedType: "Twin beds",
    bathroomType: "Shared bathroom",
    areaType: "Cottage space",
    description: [
      "A picture-perfect coastal cottage just two blocks from Santa Barbara's famous Butterfly Beach. White-washed walls, terracotta tiles, and a lush patio garden create a Mediterranean feel.",
      "Bills are included and the cottage comes fully furnished. Ideal for remote workers or retirees seeking a peaceful, sunny lifestyle by the sea."
    ],
    amenities: [
      { label: "Fast WiFi", icon: "wifi" },
      { label: "Patio Garden", icon: "sun" },
      { label: "Free Parking", icon: "truck" },
      { label: "Kitchen", icon: "home" },
      { label: "Air Conditioning", icon: "sun" },
      { label: "BBQ Area", icon: "fire" }
    ],
    totalAmenities: 13,
    hostName: "Nina Patel",
    hostImage: "https://i.pravatar.cc/60?img=20",
    hostJoined: "August 2021",
    isSuperhost: false,
    securityDeposit: 700,
    platformFee: 0,
    isVerified: true,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7!2d-119.6982!3d34.4208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSanta+Barbara+CA!5e0!3m2!1sen!2sus!4v1"
  }
]

export const navLinks = [
  { label: "Home", to: "/home" },
  { label: "About", to: "/about" },
  { label: "Properties", to: "/properties" },
   { label: "Contact", to: "/contact" }
];

export const locations = ["New York, USA", "London, UK", "Dubai, UAE", "Lahore, Pakistan"];
export const priceRanges = ["1000 - 3000", "3000 - 5000", "5000 - 10000", "10000+"];
export const propertyTypes = ["Modern Apartment", "Luxury Villa", "Studio Flat", "Office Space"];

export const sidebarLinks = [
  { label: "Dashboard", icon: "dashboard", path: "/dashboard" },
  { label: "Bookings", icon: "bookings", path: "/bookings" },
  { label: "Saved", icon: "saved", path: "/saved" },
  { label: "Messages", icon: "messages", path: "/messages" },
  { label: "Settings", icon: "settings", path: "/settings" },
];
export const dashboardStats = [
  { icon: "calendar", value: 12, label: "Total Bookings", badge: "+2 This Week" },
  { icon: "home", value: 2, label: "Upcoming Stays" },
  { icon: "heart", value: 45, label: "Saved Properties" },
  { icon: "mappin", value: 8, label: "Favorite Locations" },
];
export const recentBookings = [
  { id: 1, name: "Harbor View Suite", location: "San Francisco, CA", dates: "Oct 12 - Oct 18", status: "BOOKED" },
  { id: 2, name: "The Nordic Loft", location: "Seattle, WA", dates: "Sep 05 - Sep 12", status: "COMPLETED" },
  { id: 3, name: "Canyon Retreat", location: "Aspen, CO", dates: "Aug 20 - Aug 25", status: "CANCELLED" },
];

export const savedProperties = [
  { id: 1, name: "The Glass Pavilion", location: "Los Angeles, CA", price: 3200, beds: 2, baths: 2 },
  { id: 2, name: "Skyline Loft", location: "San Diego, CA", price: 2850, beds: 1, baths: 1 },
];
export const bookings = [
  {
    id: 1,
    name: "Seaside Villa",
    location: "Malibu, CA",
    status: "BOOKED",
    checkIn: "Oct 12, 2023",
    checkOut: "Oct 18, 2023",
    price: "$1,250",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80",
  },
  {
    id: 2,
    name: "Urban Nordic Loft",
    location: "Stockholm, SE",
    status: "COMPLETED",
    checkIn: "Aug 05, 2023",
    checkOut: "Aug 10, 2023",
    price: "$890",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80",
  },
  {
    id: 3,
    name: "Mountain Retreat",
    location: "Aspen, CO",
    status: "CANCELLED",
    checkIn: "Dec 20, 2023",
    checkOut: "Dec 27, 2023",
    price: "$1,800",
    image: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?w=400&q=80",
  },
];
export const statusConfig = {
  BOOKED: {
    badge: "bg-blue-50 text-blue-600 border border-blue-200",
    price: "text-blue-600",
    priceLabel: "Total Price",
    grayscale: false,
  },
  COMPLETED: {
    badge: "bg-gray-100 text-gray-500 border border-gray-200",
    price: "text-gray-900",
    priceLabel: "Total Price",
    grayscale: false,
  },
  CANCELLED: {
    badge: "bg-red-50 text-red-500 border border-red-200",
    price: "text-red-500",
    priceLabel: "Refund Amount",
    grayscale: true,
  },
};

export const statusStyles = {
  BOOKED:    "bg-blue-50 text-blue-600 border border-blue-200",
  COMPLETED: "bg-gray-100 text-gray-500 border border-gray-200",
  CANCELLED: "bg-red-50 text-red-500 border border-red-200",
};

export const priceStyles = {
  blue:  "text-blue-600",
  black: "text-gray-900",
  red:   "text-red-500",
};

export const detailPropertySummaryAmenities = [
  { icon: RectangleStackIcon, valueKey: 'beds', label: 'Bedrooms' },
  { icon: HomeModernIcon, valueKey: 'baths', label: 'Baths' },
  { icon: ScaleIcon, valueKey: 'sqft', label: 'sqft' },
];

// ─── Footer ───────────────────────────────────────────────────────────────────
export const footerPlatformLinks = [
  "Property Search",
  "Lease & Rent",
  "Investment Plans",
  "Market Trends",
  "Calculators",
];

export const footerCompanyLinks = [
  "About Us",
  "Our Team",
  "Careers",
  "Press Release",
  "Privacy Policy",
];

export const footerSupportLinks = [
  "Help Center",
  "Contact Support",
  "Feedback",
];

export const footerSections = [
  { title: 'Platform', links: footerPlatformLinks },
  { title: 'Company', links: footerCompanyLinks },
  { title: 'Support', links: footerSupportLinks },
];

// ─── Home Featured Properties (PropertyCards) ─────────────────────────────────
export const homeProperties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    price: "$2500",
    status: "Available",
    location: "Gulberg, Lahore",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80",
    stats: [
      { label: "3 Bed",      icon: "InboxIcon" },
      { label: "2 Bath",     icon: "SparklesIcon" },
      { label: "1200 sqft",  icon: "ArrowsPointingOutIcon" },
    ],
  },
  {
    id: 2,
    title: "Royal Apartment",
    price: "$3500",
    status: "Booked",
    location: "DHA Phase 6, Karachi",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
    stats: [
      { label: "2 Bed",     icon: "InboxIcon" },
      { label: "2 Bath",    icon: "SparklesIcon" },
      { label: "950 sqft",  icon: "ArrowsPointingOutIcon" },
    ],
  },
  {
    id: 3,
    title: "Sunset Penthouse",
    price: "$1500",
    status: "Available",
    location: "E-11, Islamabad",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=500&q=80",
    stats: [
      { label: "4 Bed",      icon: "InboxIcon" },
      { label: "4 Bath",     icon: "SparklesIcon" },
      { label: "2500 sqft",  icon: "ArrowsPointingOutIcon" },
    ],
  },
];

export const propertyCardIconMap = {
  InboxIcon,
  SparklesIcon,
  ArrowsPointingOutIcon,
};

export const propertyInfoIconMap = {
  wifi: WifiIcon,
  home: HomeIcon,
  sparkles: SparklesIcon,
  truck:  TruckIcon,
  fire: FireIcon,
  sun: SunIcon,
};

// ─── SignUp Panel Stats ────────────────────────────────────────────────────────
export const signUpStats = [
  { value: "15k+", label: "Active Properties" },
  { value: "98%",  label: "Success Rate" },
  { value: "50M+", label: "Trusted Users" },
];

// ─── Booking Calendar ─────────────────────────────────────────────────────────
export const calendarDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const calendarDates = [
  null, null,
  1, 2, 3, 4, 5, 6,
  7, 8, 9, 10, 11, 12, 13,
  14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31,
];

export const bookingCheckIn  = 5;
export const bookingCheckOut = 10;

// ─── Reservation Panel Fees ───────────────────────────────────────────────────
export const serviceFee    = 450;
export const occupancyTax  = 120;

// ─── Booking Card ─────────────────────────────────────────────────────────────
export const occupantOptions = ["1 Adult", "2 Adults", "Family"];

// ─── Property Listing Filter ──────────────────────────────────────────────────
export const bedroomOptions = ["Any", "+1", "+2", "+3", "+4"];

export const propertyFilterTypes = [
  "House",
  "Apartment",
  "Condo",
  "TownHouse",
];

// ─── Features Section (Home) ──────────────────────────────────────────────────
export const featuresData = [
  {
    id: 1,
    icon: "globe",
    title: "Browser listings",
    desc: "Explore high-quality properties with verified virtual tours and detailed documentation.",
  },
  {
    id: 2,
    icon: "calendar",
    title: "Instant Booking",
    desc: "Secure your favorite spot instantly with our simplified digital contract system.",
  },
  {
    id: 3,
    icon: "key",
    title: "Move in Ready",
    desc: "Pick up your keys and enjoy your move-in ready, professionally managed home.",
  },
];

// ─── Social Logins (SignInForm) ──────────────────────────────────────────────
export const socialLogins = [
  { name: "Google", icon: "https://www.svgrepo.com/show/355037/google.svg" },
  { name: "Apple",  icon: "https://www.svgrepo.com/show/303108/apple-black-logo.svg" },
];

// ─── User Roles (SignUpForm) ─────────────────────────────────────────────────
export const userRoles = [
  { id: "tenant", label: "Tenant", icon: "UserIcon" },
  { id: "owner",  label: "Owner",  icon: "BuildingOffice2Icon" },
];

// ─── Team Members (About Page) ───────────────────────────────────────────────
export const teamMembers = [
  { name: "Elena Vance", role: "Chief Curator", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Julian Thorne", role: "Head of Architecture", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Sarah Jenkins", role: "Director of Operations", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Marcus Reed", role: "Tech Lead", img: "https://randomuser.me/api/portraits/men/75.jpg" },
];

// ─── Why Choose Us (About Page) ─────────────────────────────────────────────
export const aboutFeatures = [
  {
    icon: "check",
    title: "Vetted Design",
    desc: "Every property undergoes a rigorous 50-point inspection focused on design, comfort, and structural integrity.",
  },
  {
    icon: "phone",
    title: "White-Glove Service",
    desc: "Dedicated concierges available 24/7 to handle everything from maintenance requests to local recommendations.",
  },
  {
    icon: "currency",
    title: "Transparent Pricing",
    desc: "No hidden fees or unexpected charges. What you see is exactly what you pay for your premium stay.",
  },
  {
    icon: "building",
    title: "Bespoke Spaces",
    desc: "Access to exclusive architectural masterpieces that aren't listed on generic rental platforms.",
  },
];

export const aboutFeatureIcons = {
  check: checkIcon,
  phone: phoneIcon,
  currency: currencyIcon,
  building: buildingIcon,
};

export const featureIconMap = {
  globe: GlobeAltIcon,
  calendar: CalendarIcon,
  key: KeyIcon,
};

export const contactIconMap = {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
};

export const signUpIconMap = {
  UserIcon,
  BuildingOffice2Icon,
};

export const sidebarIconMap = {
  dashboard: Squares2X2Icon,
  bookings: BookOpenIcon,
  saved: HeartIcon,
  messages: ChatBubbleOvalLeftIcon,
  settings: Cog6ToothIcon,
};

export const dashboardStatsCardIconMap = {
  calendar: CalendarIcon,
  home: HomeIcon,
  heart: HeartIcon,
  mappin: MapPinIcon,
};

export const contactFormInitialValues = {
  name: "",
  email: "",
  inquiry: "Property Management",
  message: "",
};

export const contactInquiryOptions = [
  "Property Management",
  "Leasing Inquiry",
  "Tenant Support",
  "Investment Partnership",
  "General Question",
];

// ─── Contact Info ───────────────────────────────────────────────────────────
export const contactDetails = [
  { label: "Email Us", value: "concierge@theledger.com", icon: "EnvelopeIcon" },
  { label: "Call Us",  value: "+1 (555) 234-8890",      icon: "PhoneIcon" },
  { label: "Visit Us", value: "450 Architectural Plaza\nSuite 1200, Manhattan, NY", icon: "MapPinIcon" },
];

export const contactHero = {
  title: "Get in Touch",
  description: "Whether you're a property owner looking for premium management or a tenant seeking your next home, our team is here to provide editorial-level service.",
};

export const contactOffice = {
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
  name: "Our Manhattan Office",
};
export const savedCardProperties = [
  {
    id: 1,
    name: "The Glass Pavilion",
    price: "$8,500",
    location: "Aspen, Colorado",
    beds: 4,
    baths: 3.5,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500"
  },
  {
    id: 2,
    name: "Azure Horizon",
    price: "$12,200",
    location: "Malibu, California",
    beds: 5,
    baths: 4,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500"
  },
  {
    id: 3,
    name: "Skyline Loft",
    price: "$6,900",
    location: "New York City, NY",
    beds: 2,
    baths: 2,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500"
  },
];


export const messages = [
  {
    id: 1,
    name: "Sarah Jenkins",
    initials: "SJ",
    image: ahad,
    subject: "Maintenance Request: Kitchen Faucet",
    preview: "Hello Alex, the faucet in Unit 4B started leaking quite heavily this morning. Co...",
    time: "TODAY, 10:24 AM",
    unread: true,
  },
  {
    id: 2,
    name: "Mark Thompson",
    initials: "MT",
    image: fahad,
    subject: "Question about Lease Renewal",
    preview: "I received the renewal notice for the downtown loft. I had a few questions reg...",
    time: "YESTERDAY, 4:45 PM",
    unread: true,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    initials: "ER",
    image: rohan,
    subject: "Parking Space Availability",
    preview: "Thanks for the update on the guest parking rules. Everything is clear now.",
    time: "OCT 24, 2023",
    unread: false,
  },
  {
    id: 4,
    name: "David Kim",
    initials: "DK",
    image: sami,
    subject: "Rent Payment Confirmation",
    preview: "Just confirming that I've sent the payment for November via the portal. Let me know if you...",
    time: "OCT 22, 2023",
    unread: false,
  },
];

export const DEFAULT_USER = {
  fullName: "Name...",
  phone: "+92 .........",
  email: "nawafali@gmail.com",
};

export const DEFAULT_NOTIFICATIONS = {
  emailNotif: true,
  smsAlerts: false,
  pushNotif: true,
};

export const DEFAULT_PRIVACY = {
  profileVisible: true,
};

export const LANGUAGE_OPTIONS = [
  "English (United States)",
  "Urdu (Pakistan)",
  "Arabic",
  "French",
];

export const DEFAULT_LANGUAGE = "English (United States)";

export const NOTIFICATION_ITEMS = [
  { key: "emailNotif", icon: "✉️", label: "Email notifications" },
  { key: "smsAlerts", icon: "💬", label: "SMS alerts" },
  { key: "pushNotif", icon: "🔔", label: "Push notifications" },
];

export const TWO_FACTOR = {
  title: "Two-Factor Authentication",
  description:
    "Add an extra layer of security to your account by requiring more than just a password to log in.",
  buttonText: "Enable Now",
};

export const IDENTITY_BADGE = {
  title: "Identity Verified",
  description:
    "Your account has been verified as a Premium Tier Agency. This increases trust by 85% among potential renters.",
};

export const settingsData = {
  pageTitle: "Settings",
  pageDesc: "Manage your account preferences and security.",
  accountCardTitle: "Account Settings",
  preferencesCardTitle: "Preferences",
  visibilityTitle: "Profile Visibility",
  visibilityDesc: "Allow others to see your listings",
};




