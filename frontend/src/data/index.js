import ahad from "../assets/userDashboardMessage/ahad.jpg";
import fahad from "../assets/userDashboardMessage/fahad.jpg";
import rohan from "../assets/userDashboardMessage/rohan.jpg";
import sami from "../assets/userDashboardMessage/sami.jpg";
import { CheckIcon, PhoneIcon, CurrencyIcon, BuildingIcon } from '../assets/svg';
import {
  RectangleStackIcon,
  HomeModernIcon,
  ScaleIcon,
  EnvelopeIcon,
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
  UserIcon,
  BuildingOfficeIcon,
  CubeIcon,
  ClipboardDocumentListIcon,
  ChatBubbleLeftIcon,
  BellIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
  RectangleGroupIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  BuildingOffice2Icon,
  BuildingLibraryIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';

export const aboutFeatureIconList = {
  CheckIcon,
  PhoneIcon,
  CurrencyIcon,
  BuildingIcon
};

export const aboutFeatures = [
  {
    icon: "CheckIcon",
    title: "Vetted Design",
    description: "Every property undergoes a rigorous 50-point inspection focused on design, comfort, and structural integrity."
  },
  {
    icon: "PhoneIcon",
    title: "White-Glove Service",
    description: "Dedicated concierges available 24/7 to handle everything from maintenance requests to local recommendations."
  },
  {
    icon: "CurrencyIcon",
    title: "Transparent Pricing",
    description: "No hidden fees or unexpected charges. What you see is exactly what you pay for your premium stay."
  },
  {
    icon: "BuildingIcon",
    title: "Bespoke Spaces",
    description: "Access to exclusive architectural masterpieces that aren't listed on generic rental platforms."
  }
];

export const properties = [
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
      "Features an infinity edge pool, outdoor kitchen, home cinema, and spa. This is the pinnacle of Hollywood luxury living â€” designed for those who accept nothing but the best."
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
];

export const navLinks = [
  { label: "Home", to: "/home" },
  { label: "About", to: "/about" },
  { label: "Properties", to: "/properties" },
  { label: "Contact", to: "/contact" }
];

export const locations = ["New York, USA", "London, UK", "Dubai, UAE", "Lahore, Pakistan"];
export const priceRanges = ["1000 - 3000", "3000 - 5000", "5000 - 10000", "10000+"];
export const propertyTypeNames = ["Modern Apartment", "Luxury Villa", "Studio Flat", "Office Space"];

export const sidebarLinks = [
  { label: "Dashboard", icon: RectangleGroupIcon, path: "/user/dashboard" },
  { label: "Bookings", icon: CalendarIcon, path: "/user/bookings" },
  { label: "Saved", icon: HeartIcon, path: "/user/saved" },
  { label: "Messages", icon: ChatBubbleLeftRightIcon, path: "/user/message" },
  { label: "Settings", icon: Cog6ToothIcon, path: "/user/settings" },
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
  BOOKED: "bg-blue-50 text-blue-600 border border-blue-200",
  COMPLETED: "bg-gray-100 text-gray-500 border border-gray-200",
  CANCELLED: "bg-red-50 text-red-500 border border-red-200",
};

export const priceStyles = {
  blue: "text-blue-600",
  black: "text-gray-900",
  red: "text-red-500",
};

export const detailPropertySummaryAmenities = [
  { icon: RectangleStackIcon, valueKey: 'beds', label: 'Bedrooms' },
  { icon: HomeModernIcon, valueKey: 'baths', label: 'Baths' },
  { icon: ScaleIcon, valueKey: 'sqft', label: 'sqft' },
];



export const homeProperties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    price: "$2500",
    status: "Available",
    location: "Gulberg, Lahore",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80",
    stats: [
      { label: "3 Bed", icon: "InboxIcon" },
      { label: "2 Bath", icon: "SparklesIcon" },
      { label: "1200 sqft", icon: "ArrowsPointingOutIcon" },
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
      { label: "2 Bed", icon: "InboxIcon" },
      { label: "2 Bath", icon: "SparklesIcon" },
      { label: "950 sqft", icon: "ArrowsPointingOutIcon" },
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
      { label: "4 Bed", icon: "InboxIcon" },
      { label: "4 Bath", icon: "SparklesIcon" },
      { label: "2500 sqft", icon: "ArrowsPointingOutIcon" },
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
  truck: TruckIcon,
  fire: FireIcon,
  sun: SunIcon,
};

export const signUpStats = [
  { value: "15k+", label: "Active Properties" },
  { value: "98%", label: "Success Rate" },
  { value: "50M+", label: "Trusted Users" },
];

export const calendarDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const calendarDates = [
  null, null,
  1, 2, 3, 4, 5, 6,
  7, 8, 9, 10, 11, 12, 13,
  14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31,
];

export const bookingCheckIn = 5;
export const bookingCheckOut = 10;

export const serviceFee = 450;
export const occupancyTax = 120;

export const occupantOptions = ["1 Adult", "2 Adults", "Family"];

export const bedroomOptions = ["Any", "+1", "+2", "+3", "+4"];

export const propertyFilterTypes = [
  "House",
  "Apartment",
  "Condo",
  "TownHouse",
];







export const teamMembers = [
  { name: "Elena Vance", role: "Chief Curator", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Julian Thorne", role: "Head of Architecture", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Sarah Jenkins", role: "Director of Operations", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Marcus Reed", role: "Tech Lead", img: "https://randomuser.me/api/portraits/men/75.jpg" },
];






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



export const contactHero = {
  title: "Get in Touch",
  description: "Whether you're a property owner looking for premium management or a tenant seeking your next home, our team is here to provide editorial-level service.",
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
    fullMessage: "Hello Alex, the faucet in Unit 4B started leaking quite heavily this morning. Could you please arrange maintenance as soon as possible? It's affecting the kitchen usage and I want to avoid water damage. Thank you.",
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
    fullMessage: "I received the renewal notice for the downtown loft. I had a few questions regarding the updated terms, rent schedule, and whether any repairs are planned before my lease begins. Please let me know when we can discuss these.",
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
    fullMessage: "Thanks for the update on the guest parking rules. Everything is clear now, but I wanted to confirm whether guest permits are required on weekends and if there are any new restrictions during holidays.",
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
    fullMessage: "Just confirming that I've sent the payment for November via the portal. Let me know if you need any additional documentation or if there are next steps to finalize the receipt on your end.",
    time: "OCT 22, 2023",
    unread: false,
  },
];

export const defaultUser = {
  fullName: "Name...",
  phone: "+92 .........",
  email: "nawafali@gmail.com",
};

export const defaultNotifications = {
  emailNotif: true,
  smsAlerts: false,
  pushNotif: true,
};

export const defaultPrivacy = {
  profileVisible: true,
};

export const languageOptions = [
  "English (United States)",
  "Urdu (Pakistan)",
  "Arabic",
  "French",
];

export const defaultLanguage = "English (United States)";

export const notificationItems = [
  { key: "emailNotif", icon: EnvelopeIcon, label: "Email notifications" },
  { key: "smsAlerts", icon: ChatBubbleLeftIcon, label: "SMS alerts" },
  { key: "pushNotif", icon: BellIcon, label: "Push notifications" },
];
export const twoFactor = {
  title: "Two-Factor Authentication",
  description:
    "Add an extra layer of security to your account by requiring more than just a password to log in.",
  buttonText: "Enable Now",
};

export const identityBadge = {
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
// admin data


export const recentActivity = [
  { id: 1, userName: "Jane Doe", userImage: "https://randomuser.me/api/portraits/women/44.jpg", action: "requested a booking for", target: "Azure Penthouse", time: "2 hours ago", status: "PENDING" },
  { id: 2, userName: "Marcus Chen", userImage: "https://randomuser.me/api/portraits/men/32.jpg", action: "added a new property", target: "'Sunset Villa'", time: "5 hours ago", status: "APPROVED" },
  { id: 3, userName: "Sarah Miller", userImage: "https://randomuser.me/api/portraits/women/68.jpg", action: "verified her identity documents", target: "", time: "Yesterday", status: "APPROVED" },
  { id: 4, userName: "Robert Fox", userImage: "https://randomuser.me/api/portraits/men/75.jpg", action: "reported a maintenance issue at", target: "Oakwood Loft", time: "Yesterday", status: "HIGH" },
];

export const adminPriorityProperties = [
  { id: 1, title: "The Nordic Glasshouse", location: "Oslo, Norway", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800", tag: "MANAGED", status: "Occupied" },
  { id: 2, title: "Sahara Oasis Lodge", location: "Marrakesh, Morocco", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800", tag: "REVIEW NEEDED", status: "Pending Review" },
];

export const adminRecentUsers = [
  { id: 1, name: "Emily Lawson", email: "emily.l@arch.com", initials: "EL", role: "Property Owner", status: "Verified" },
  { id: 2, name: "Tobias Klein", email: "tobias.k@web.de", initials: "TK", role: "Renter", status: "Onboarding" },
];

export const adminSidebarLinks = [
  { label: "Dashboard", icon: Squares2X2Icon, path: "/admin/dashboard" },
  { label: "Properties", icon: HomeIcon, path: "/admin/property" },
  { label: "Bookings", icon: CalendarIcon, path: "/admin/bookings" },
  { label: "Users", icon: UserIcon, path: "/admin/users" },
  { label: "Reports", icon: ChartBarIcon, path: "/admin/reports" },
  { label: "Messages", icon: ChatBubbleLeftRightIcon, path: "/admin/message" },
];
export const userStatistics = [
  { title: "TOTAL USERS", value: "1,284", trend: "12% this month", trendUp: true, icon: "↗", color: "text-green-600" },
  { title: "PROPERTY OWNERS", value: "156", trend: "Stable growth", trendUp: false, icon: "—", color: "text-gray-500" },
  { title: "ACTIVE NOW", value: "42", trend: "Live monitoring", trendUp: true, icon: "◈", color: "text-blue-600" },
  { title: "PENDING VERIFICATION", value: "8", trend: "Action required", trendUp: false, icon: "!", color: "text-orange-600" },
];

export const usersList = [
  { id: 1, name: "Julianne Moore", email: "j.moore@studioarch.com", avatar: "https://randomuser.me/api/portraits/women/44.jpg", role: "Owner", status: "Active" },
  { id: 2, name: "Marcus Thorne", email: "m.thorne@vanguard.io", avatar: "https://randomuser.me/api/portraits/men/32.jpg", role: "User", status: "Inactive" },
  { id: 3, name: "Elena Rossi", email: "elena.r@estatemanage.com", avatar: "https://randomuser.me/api/portraits/women/68.jpg", role: "Owner", status: "Active" },
  { id: 4, name: "David Chen", email: "d.chen@luxeliving.com", avatar: "https://randomuser.me/api/portraits/men/75.jpg", role: "User", status: "Active" },
];

export const propertiesData = [
  { id: 1, title: "Modernist Retreat", location: "Oslo, Norway", price: "3,200", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800", status: "APPROVED", hostName: "Jane Doe", hostImage: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 2, title: "Concrete Haven", location: "Berlin, Germany", price: "2,850", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800", status: "PENDING", hostName: "Unknown", hostImage: "" },
  { id: 3, title: "Glass Sanctuary", location: "Stockholm, Sweden", price: "4,500", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800", status: "APPROVED", hostName: "John Doe", hostImage: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 4, title: "Nordic Loft", location: "Helsinki, Finland", price: "1,950", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800", status: "REJECTED", hostName: "Unknown", hostImage: "" },
];

export const statsPropertyData = [
  { id: 1, label: "PORTFOLIO GROWTH", value: "+24.8%", subtitle: "this quarter", variant: "primary", icon: "TrendingUp" },
  { id: 2, label: "TOTAL LISTINGS", value: "142", subtitle: "", variant: "default" },
  { id: 3, label: "OCCUPANCY RATE", value: "94%", subtitle: "", variant: "default" }
];

export const bookingsData = {
  stats: {
    totalRevenue: "124500.00",
    revenueChange: "12.5",
    totalBookings: "842",
    totalLocations: "24",
    activeBookings: "38"
  },
  bookings: [
    { id: 1, property: { image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800", name: "Azure Heights Villa", location: "Malibu, CA" }, guest: { name: "Eleanor Shellstrop", email: "eleanor.s@example.com", avatar: "https://randomuser.me/api/portraits/women/44.jpg" }, bookingDates: { checkIn: "Oct 12", checkOut: "Oct 18, 2023", nights: "6 Nights" }, payment: "PAID", status: "Booked" },
    { id: 2, property: { image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800", name: "The Glass Penthouse", location: "New York, NY" }, guest: { name: "Jason Doe", email: "jason.d@webmail.com", avatar: "https://randomuser.me/api/portraits/men/32.jpg" }, bookingDates: { checkIn: "Nov 05", checkOut: "Nov 10, 2023", nights: "5 Nights" }, payment: "PARTIALLY PAID", status: "Booked" },
    { id: 3, property: { image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800", name: "Seaside Retreat", location: "Miami, FL" }, guest: { name: "Chidi Peterson", email: "chidi.p@domain.com", avatar: "https://randomuser.me/api/portraits/men/75.jpg" }, bookingDates: { checkIn: "Sep 20", checkOut: "Sep 25, 2023", nights: "5 Nights" }, payment: "PAID", status: "Completed" },
    { id: 4, property: { image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800", name: "Pine Forest Cabin", location: "Aspen, CO" }, guest: { name: "Tahani Hadid", email: "tahani.h@luxury.com", avatar: "https://randomuser.me/api/portraits/women/68.jpg" }, bookingDates: { checkIn: "Dec 22", checkOut: "Dec 30, 2023", nights: "8 Nights" }, payment: "UNPAID", status: "Cancelled" },
  ]
};

export const bookingFilterTabs = ["All", "Booked", "Completed", "Cancelled"];
export const tableHeaders = ["PROPERTY", "GUEST", "BOOKING DATES", "PAYMENT", "STATUS", "ACTION"];

export const filterTabs = [
  { id: "all", label: "All Units" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" }
];

export const userData = {
  userName: "Alex Rivers",
  userRole: "Property Admin",
  userImage: "https://randomuser.me/api/portraits/men/32.jpg",
  searchPlaceholder: "Search users, roles, or status..."
};


export const reportStats = [
  {
    id: 1,
    label: "TOTAL REVENUE",
    value: "$428,500",
    badge: "+12.5%",
    badgeType: "up",
    subtitle: "vs $380,800 last quarter",
    highlighted: false,
  },
  {
    id: 2,
    label: "TOTAL BOOKINGS",
    value: "1,284",
    badge: "+8.2%",
    badgeType: "up",
    subtitle: "New leases this month",
    highlighted: false,
  },
  {
    id: 3,
    label: "ACTIVE USERS",
    value: "8,420",
    badge: "Stable",
    badgeType: "stable",
    subtitle: "Active tenant portal users",
    highlighted: false,
  },
  {
    id: 4,
    label: "GROWTH RATE",
    value: "24.8%",
    badge: "↗",
    badgeType: "highlight",
    subtitle: "YoY Portfolio expansion",
    highlighted: true,
  },
];

export const monthlyRevenueData = [
  { month: "JAN", value: 28000, active: false },
  { month: "FEB", value: 22000, active: false },
  { month: "MAR", value: 31000, active: false },
  { month: "APR", value: 38000, active: true },
  { month: "MAY", value: 25000, active: false },
  { month: "JUN", value: 30000, active: false },
  { month: "JUL", value: 35000, active: false },
  { month: "AUG", value: 52000, active: true },
  { month: "SEP", value: 29000, active: false },
  { month: "OCT", value: 27000, active: false },
  { month: "NOV", value: 33000, active: false },
  { month: "DEC", value: 26000, active: false },
];

export const revenueChartTabs = ["Monthly", "Quarterly"];

export const revenueOverviewChartConfig = {
  width: 560,
  height: 200,
  padding: 40,
};

export const portfolioHealthMetrics = [
  { label: "Occupancy Rate", value: 94, color: "bg-blue-600", textColor: "text-blue-600" },
  { label: "Maintenance Efficiency", value: 88, color: "bg-orange-500", textColor: "text-orange-500" },
];

export const portfolioUserGrowth = {
  label: "User Growth",
  value: "+18%",
  textColor: "text-green-600",
  sparklinePoints: "0,60 30,50 60,45 90,55 120,38 150,30 180,25 210,35 240,20",
};

export const aiInsightsData = {
  heading: "AI Insights",
  body: "Based on current trends, your portfolio is expected to hit",
  highlight: "$500k ARR",
  body2: "by next month. We recommend reviewing vacancy rates in the",
  location: "Downtown District",
  body3: "as turnover is slightly higher than market average.",
  topPerformerLabel: "TOP PERFORMER",
  topPerformerName: "Lumina Suites",
  topPerformerStat: "98% Retention Rate",
  topPerformerImage:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
};

export const badgeStyles = {
  up: "bg-green-100 text-green-700",
  stable: "bg-orange-100 text-orange-600",
  highlight: "text-white text-lg font-bold",
};

export const urgencyStyles = {
  critical: "bg-red-100 text-red-600",
  warning: "bg-yellow-100 text-yellow-700",
  normal: "bg-gray-100 text-gray-600",
};

export const upcomingRenewals = [
  {
    id: 1,
    name: "Sarah Jenkins",
    unit: "Apartment 4B",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    daysLeft: 3,
    urgency: "critical",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    unit: "Loft 12",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    daysLeft: 12,
    urgency: "warning",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    unit: "Studio 201",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    daysLeft: 15,
    urgency: "normal",
  },
];

export const reportNavTitle = "Reports & Analytics";
export const reportSearchPlaceholder = "Search analytics...";

export const bedRoomOptions = [
  { value: '1', label: '1 Bedroom' },
  { value: '2', label: '2 Bedrooms' },
  { value: '3', label: '3 Bedrooms' },
  { value: '4', label: '4 Bedrooms' },
  { value: '5', label: '5+ Bedrooms' }
];

export const bathRoomOptions = [
  { value: '1', label: '1 Bathroom' },
  { value: '2', label: '2 Bathrooms' },
  { value: '3', label: '3 Bathrooms' },
  { value: '4', label: '4 Bathrooms' },
  { value: '5', label: '5+ Bathrooms' }
];

export const initialFormData = {
  title: '',
  monthlyRent: '',
  location: '',
  bedrooms: '3',
  bathrooms: '2',
  description: ''
};

// OwnerDashboar Content

export const ownerSidebarLinks = [
  { label: "Dashboard", icon: Squares2X2Icon, path: "/owner/dashboard" },
  { label: "Properties", icon: BuildingOffice2Icon, path: "/owner/properties" },
  { label: "Bookings", icon: CalendarIcon, path: "/owner/bookings" },
  { label: "Earnings", icon: ChartBarIcon, path: "/owner/earning" },
  { label: "Profile", icon: UsersIcon, path: "/owner/profile" },
  { label: "Messages", icon: ChatBubbleLeftRightIcon, path: "/owner/message" },
];
export const ownerDashboardStats = {
  totalUsers: {
    count: 1240,
    label: "TOTAL USERS",
    changePercent: "+12%",
    color: "#E3F2FD"
  },
  totalProperties: {
    count: 450,
    label: "TOTAL PROPERTIES",
    changePercent: "+5.4%",
    color: "#E8F5E9"
  },
  totalBookings: {
    count: 820,
    label: "TOTAL BOOKINGS",
    changePercent: "+22%",
    color: "#F3E5F5"
  },
  pendingApprovals: {
    count: 15,
    label: "PENDING APPROVALS",
    tag: "High Priority",
    color: "#FFF3E0"
  }
};

export const recentActivities = [
  {
    id: 1,
    user: "Jane Doe",
    action: "requested a booking for Azure Penthouse",
    time: "2 hours ago",
    status: "PENDING",
    statusColor: "#FFF3E0"
  },
  {
    id: 2,
    user: "Marcus Chen",
    action: "added a new property 'Sunset Villa'",
    time: "5 hours ago",
    status: "APPROVED",
    statusColor: "#E3F2FD"
  },
  {
    id: 3,
    user: "Sarah Miller",
    action: "verified her identity documents",
    time: "Yesterday",
    status: "APPROVED",
    statusColor: "#E3F2FD"
  },
  {
    id: 4,
    user: "Robert Fox",
    action: "reported a maintenance issue at Oakwood Loft",
    time: "Yesterday",
    status: "HIGH",
    statusColor: "#FFEBEE"
  }
];

export const ownerPriorityProperties = [
  {
    id: 1,
    name: "The Nordic Glasshouse",
    location: "Oslo, Norway",
    image: "nordic-glasshouse.jpg",
    status: "MANAGED",
    statusLabel: "Occupied",
    statusColor: "#2196F3"
  },
  {
    id: 2,
    name: "Sahara Oasis Lodge",
    location: "Marrakesh, Morocco",
    image: "sahara-oasis.jpg",
    status: "REVIEW NEEDED",
    statusLabel: "Pending Review",
    statusColor: "#FF9800"
  }
];

export const ownerRecentUsers = [
  {
    id: 1,
    name: "Emily Lawson",
    email: "emily.l@arch.com",
    initials: "EL",
    role: "Property Owner",
    status: "Verified",
    statusColor: "#E3F2FD"
  },
  {
    id: 2,
    name: "Tobias Klein",
    email: "tobias.k@web.de",
    initials: "TK",
    role: "Renter",
    status: "Onboarding",
    statusColor: "#F5F5F5"
  }
];

export const colors = {
  primary: "#1976D2",
  secondary: "#424242",
  success: "#4CAF50",
  warning: "#FF9800",
  error: "#F44336",
  info: "#2196F3",

  backgrounds: {
    users: "#E3F2FD",
    properties: "#E8F5E9",
    bookings: "#F3E5F5",
    approvals: "#FFF3E0"
  },

  status: {
    pending: "#FFF3E0",
    approved: "#E3F2FD",
    high: "#FFEBEE",
    verified: "#E3F2FD",
    onboarding: "#F5F5F5"
  }
};

export const navigationItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "properties", label: "Properties" },
  { id: "users", label: "Users" },
  { id: "bookings", label: "Bookings" },
  { id: "reports", label: "Reports" }
];

export const userInfo = {
  name: "Alexander Wright",
  role: "Premium Management"
};

export const adminDashboardStats = {
  totalUsers: {
    count: 1240,
    label: "TOTAL USERS",
    changePercent: "+12%",
    color: "#E3F2FD", // Light Blue
    icon: UsersIcon
  },
  totalProperties: {
    count: 450,
    label: "TOTAL PROPERTIES",
    changePercent: "+5.4%",
    color: "#E8F5E9", // Light Green
    icon: HomeIcon
  },
  totalBookings: {
    count: 820,
    label: "TOTAL BOOKINGS",
    changePercent: "+22%",
    color: "#F3E5F5", // Light Purple
    icon: CalendarIcon
  },
  pendingApprovals: {
    count: 15,
    label: "PENDING APPROVALS",
    tag: "High Priority",
    color: "#FFF3E0",
    icon: ClipboardDocumentCheckIcon
  }
};

//propertycomponent page


export const filterOptions = [
  { id: 'all', label: 'All' },
  { id: 'available', label: 'Available' },
  { id: 'occupied', label: 'Occupied' },
  { id: 'under-review', label: 'Under Review' },
];


export const propertyStatus = {
  available: 'available',
  occupied: 'occupied',
  underReview: 'under_review',
  vacant: 'vacant',
};

export const ownerPropertiesData = [
  {
    id: 1,
    name: 'The Azure Heights Villa',
    location: 'Malibu, USA',
    rating: 4.9,
    beds: 4,
    baths: 3,
    sqft: 3200,
    price: 12500,
    status: propertyStatus.available,
    statusLabel: 'Vacant',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop',
    occupancyStatus: propertyStatus.available,
  },
  {
    id: 2,
    name: 'Skyline Loft',
    location: 'New York, USA',
    rating: 4.7,
    beds: 2,
    baths: 2,
    sqft: 1850,
    price: 8200,
    status: propertyStatus.occupied,
    statusLabel: 'Currently Occupied',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop',
    occupancyStatus: propertyStatus.occupied,
  },
  {
    id: 3,
    name: 'Cotswold Cottage',
    location: 'Oxford, UK',
    rating: 4.8,
    beds: 3,
    baths: 2,
    sqft: 2100,
    price: 4500,
    status: propertyStatus.underReview,
    statusLabel: 'Vacant',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
    occupancyStatus: propertyStatus.vacant,
  },
  {
    id: 4,
    name: 'Emerald Bay Estate',
    location: 'Lake Tahoe, USA',
    rating: 5.0,
    beds: 6,
    baths: 5,
    sqft: 5800,
    price: 18900,
    status: propertyStatus.available,
    statusLabel: 'Vacant',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
    occupancyStatus: propertyStatus.available,
  },
  {
    id: 5,
    name: 'The Greenwich Flat',
    location: 'London, UK',
    rating: 4.6,
    beds: 1,
    baths: 1,
    sqft: 950,
    price: 3200,
    status: propertyStatus.occupied,
    statusLabel: 'Currently Occupied',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
    occupancyStatus: propertyStatus.occupied,
  },
  {
    id: 6,
    name: 'Nexus Business Hub',
    location: 'Berlin, Germany',
    rating: 4.9,
    beds: null,
    baths: null,
    rooms: 12,
    capacity: 40,
    sqft: 4500,
    price: 24000,
    status: propertyStatus.underReview,
    statusLabel: 'Vacant',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    occupancyStatus: propertyStatus.vacant,
    isCommercial: true,
  },
];


export const sortOptions = [
  { id: 'newest', label: 'Newest' },
  { id: 'oldest', label: 'Oldest' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'rating', label: 'Highest Rated' },
];


export const propertyTypeOptions = [
  { id: 'all', label: 'All' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'luxury', label: 'Luxury' },
];

// Bookings constant data
export const bookingStatsData = [
  {
    id: 'total',
    label: 'TOTAL BOOKINGS',
    value: 47,
    subtext: '↗12%',
    color: 'blue'
  },
  {
    id: 'pending',
    label: 'PENDING',
    value: 7,
    subtext: 'Action required soon',
    color: 'orange'
  },
  {
    id: 'confirmed',
    label: 'CONFIRMED',
    value: 23,
    subtext: 'Currently active',
    color: 'blue'
  },
  {
    id: 'completed',
    label: 'COMPLETED',
    value: 15,
    subtext: 'Historical records',
    color: 'teal'
  }
];

export const ownerBookingsData = [
  {
    id: '#BK-9281',
    tenant: {
      name: 'Elena Vance',
      email: 'elena.v@curate.com',
      phone: '+1 (555) 012-3456',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    property: {
      name: 'The Glass Pavilion',
      address: '1280 Metropolitan Ave, Downtown District'
    },
    dates: 'Oct 12 - Oct 18',
    amount: '$12,400',
    status: 'CONFIRMED',
    specialRequest: 'We will be arriving late in the evening around 9 PM. Is there a possibility for a self check-in or late key pick up? Also, we require extra pillows if available.'
  },
  {
    id: '#BK-9275',
    tenant: {
      name: 'Julian S. Aris',
      email: 'j.aris@varepair.io',
      phone: '+1 (555) 987-6543',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    property: {
      name: 'Stone Hollow Residence',
      address: '452 Canyon Road, Hillside Heights'
    },
    dates: 'Oct 15 - Oct 22',
    amount: '$8,900',
    status: 'PENDING',
    specialRequest: 'Looking for a quiet room if possible.'
  },
  {
    id: '#BK-9268',
    tenant: {
      name: 'Sarah Sterling',
      email: 'sarah.s@global.co',
      phone: '+44 20 7946 0958',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    property: {
      name: 'The Brutalist Loft',
      address: '89 Industrial Way, Tech District'
    },
    dates: 'Oct 01 - Oct 07',
    amount: '$15,200',
    status: 'COMPLETED'
  },
  {
    id: '#BK-9264',
    tenant: {
      name: 'Markus Aurelius',
      email: 'm.aurelius@law.com',
      phone: '+39 06 1234 5678',
      avatar: 'https://i.pravatar.cc/150?img=33'
    },
    property: {
      name: 'Skyline Penthouse',
      address: '777 Cloud View, Pinnacle Plaza'
    },
    dates: 'Oct 20 - Oct 30',
    amount: '$22,000',
    status: 'CONFIRMED'
  },
  {
    id: '#BK-9259',
    tenant: {
      name: 'Leo Chen',
      email: 'leo.chen@tech.cn',
      phone: '+86 21 6123 4567',
      avatar: 'https://i.pravatar.cc/150?img=14'
    },
    property: {
      name: 'Zen Garden Suite',
      address: '12 Bamboo Path, Serenity Gardens'
    },
    dates: 'Oct 05 - Oct 10',
    amount: '$6,800',
    status: 'COMPLETED'
  },
  {
    id: '#BK-9255',
    tenant: {
      name: 'Beatrix Kiddo',
      email: 'b.kiddo@sword.com',
      phone: '+1 (555) 001-KILL',
      avatar: 'https://i.pravatar.cc/150?img=9'
    },
    property: {
      name: 'The Dojo Manor',
      address: '88 Hanzo Street, Okinawa Hills'
    },
    dates: 'Nov 01 - Nov 05',
    amount: '$18,500',
    status: 'PENDING'
  },
  {
    id: '#BK-9250',
    tenant: {
      name: 'Sam Flynn',
      email: 's.flynn@grid.org',
      phone: '+1 (555) 867-5309',
      avatar: 'https://i.pravatar.cc/150?img=11'
    },
    property: {
      name: 'Neon District Apartment',
      address: '101 Cyber Way, Sector 7'
    },
    dates: 'Oct 18 - Oct 25',
    amount: '$9,200',
    status: 'CONFIRMED'
  },
  {
    id: '#BK-9245',
    tenant: {
      name: 'Diane Lockhart',
      email: 'd.lockhart@partners.com',
      phone: '+1 (555) 234-5678',
      avatar: 'https://i.pravatar.cc/150?img=20'
    },
    property: {
      name: 'The Victorian Estate',
      address: '221B Baker Street, Heritage Row'
    },
    dates: 'Dec 10 - Dec 24',
    amount: '$45,000',
    status: 'PENDING'
  }
];

export const bookingFilterOptions = [
  { id: 'all', label: 'All' },
  { id: 'pending', label: 'Pending' },
  { id: 'confirmed', label: 'Confirmed' },
  { id: 'completed', label: 'Completed' },
  { id: 'rejected', label: 'Rejected' }
];

export const socialLogins = [
  {
    name: "Google",
    icon: "https://www.svgrepo.com/show/355037/google.svg",
  },
  {
    name: "Apple",
    icon: "https://www.svgrepo.com/show/303108/apple-black-logo.svg",
  },
];
// ─── Stats Cards Data ───────────────────────────────────────────────────────
export const earningsStats = [
  {
    id: 1,
    label: "Total Earnings",
    value: "PKR 4.2M",
    badge: "ALL TIME",
    badgeColor: "bg-gray-100 text-gray-500",
    valueColor: "text-blue-600",
    icon: "wallet",
  },
  {
    id: 2,
    label: "This Month Revenue",
    value: "PKR 342,000",
    badge: "+23%",
    badgeColor: "bg-green-50 text-green-600",
    valueColor: "text-gray-900",
    icon: "trending-up",
  },
  {
    id: 3,
    label: "Pending Payout",
    value: "PKR 145,000",
    badge: "REQUEST PAYOUT",
    badgeColor: "bg-orange-500 text-white",
    valueColor: "text-orange-500",
    icon: "clock",
    hasAction: true,
  },
  {
    id: 4,
    label: "Next Payout Date",
    value: "Oct 28",
    badge: "In 5 days",
    badgeColor: "bg-blue-50 text-blue-500",
    valueColor: "text-gray-900",
    icon: "calendar",
  },
];

export const revenueChartData = [
  { date: "SEP 25", value: 85000 },
  { date: "OCT 02", value: 120000 },
  { date: "OCT 09", value: 145000 },
  { date: "OCT 16", value: 210000 },
  { date: "CURRENT", value: 342000 },
];

export const chartPeriods = ["7 Days", "1 Month", "6 Months", "1 Year"];

export const propertiesEarnings = [
  {
    id: 1,
    name: "Azure Heights Villa",
    address: "DHA Phase 6, Karachi",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=80&h=60&fit=crop",
    bookings: 24,
    occupancy: 78,
    revenue: "PKR 85,400",
    trend: "up",
  },
  {
    id: 2,
    name: "Skyline Loft 402",
    address: "Gulberg III, Lahore",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=80&h=60&fit=crop",
    bookings: 18,
    occupancy: 55,
    revenue: "PKR 52,100",
    trend: "down",
  },
  {
    id: 3,
    name: "The Heritage Suite",
    address: "Bahria Town, Islamabad",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=80&h=60&fit=crop",
    bookings: 31,
    occupancy: 88,
    revenue: "PKR 112,000",
    trend: "up",
  },
];

export const payoutHistory = [
  {
    id: "#PAY-99281",
    date: "Oct 12, 2023",
    method: "Bank Transfer",
    methodIcon: "bank",
    amount: "PKR 88,200",
    status: "COMPLETED",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    id: "#PAY-99204",
    date: "Sep 28, 2023",
    method: "PayPal",
    methodIcon: "paypal",
    amount: "PKR 124,000",
    status: "PROCESSING",
    statusColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "#PAY-99115",
    date: "Sep 14, 2023",
    method: "JazzCash",
    methodIcon: "jazzcash",
    amount: "PKR 45,000",
    status: "PENDING",
    statusColor: "bg-orange-100 text-orange-700",
  },
];


export const paymentMethods = [
  { id: "bank", label: "Bank" },
  { id: "paypal", label: "PayPal" },
  { id: "jazzcash", label: "JazzCash" },
];


export const weeklyIntensity = [
  { day: "MON", value: 40 },
  { day: "TUE", value: 65 },
  { day: "WED", value: 55 },
  { day: "THU", value: 90 },
  { day: "FRI", value: 72 },
  { day: "SAT", value: 48 },
  { day: "SUN", value: 30 },
];

export const weeklyStats = {
  highestDay: "Thursday",
  dailyAverage: "PKR 12,400",
};

export const pendingAlert = {
  message: "You have a pending payout of PKR 145,000 scheduled for processing.",
};

export const userProfile = {
  fullName: "Julian Marcovici",
  email: "julian.marcovici@estate.com",
  phone: "555-0123-456",
  alternativePhone: "",
  dateOfBirth: "1985-06-15",
  gender: "Male",
  nationality: "United States",
  idPassport: "A12345678",
  role: "Primary Account Owner",
  accountStatus: "Verified Owner",
  avatar: null,
};

export const residentialAddress = {
  addressLine1: "452 High Street, Apartment 4B",
  addressLine2: "",
  city: "Austin",
  state: "Texas",
  country: "United States",
  postalCode: "78701",
};

export const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Non-binary", label: "Non-binary" },
  { value: "Prefer not to say", label: "Prefer not to say" },
];

export const nationalityOptions = [
  { value: "United States", label: "United States" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "Canada", label: "Canada" },
  { value: "Pakistan", label: "Pakistan" },
  { value: "India", label: "India" },
];

export const phoneCountryCodes = [
  { code: "+1", flag: "🇺🇸", country: "US" },
  { code: "+92", flag: "🇵🇰", country: "PK" },
  { code: "+91", flag: "🇮🇳", country: "IN" },
];

export const privacyNotice = {
  text: "Your personal data is encrypted and stored according to our strict privacy policy.",
  buttonLabel: "View Privacy Policy",
  policyUrl: "/privacy-policy",
};

export const unsavedChangesNotice = "You have unsaved changes in your personal information.";

// Sidebar ya Inbox mein dikhne wali chats ki list
export const chatThreads = [
  {
    id: 1,
    name: "Julianne Moore",
    property: "Villa Azure, Unit 402",
    time: "10:42 AM",
    preview: "The kitchen sink is leaking ...",
    avatar: null,
    unread: true,
    active: true,
  },
  {
    id: 2,
    name: "Marcus Vane",
    property: "The Glass House",
    time: "09:15 AM",
    preview: "I've sent the lease renewal ...",
    avatar: null,
    unread: true,
    active: false,
  },
  {
    id: 3,
    name: "David Chen",
    property: "Mountain Retreat",
    time: "Yesterday",
    preview: "Thanks for the quick respons...",
    avatar: null,
    unread: false,
    active: false,
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    property: "Urban Loft 22",
    time: "Aug 22",
    preview: "I'll be out of town next week, ...",
    avatar: null,
    unread: false,
    active: false,
  },
];

// Specific chat ki messages history (ID ke mutabiq)
export const messageHistory = {
  1: [
    {
      id: 1,
      type: "system",
      text: "Maintenance request #482 created for Villa Azure",
      date: "YESTERDAY",
      showDate: true,
    },
    {
      id: 2,
      type: "sent",
      text: "Hi Julianne, I've received your note about the kitchen sink. I'll have our plumber take a look at it tomorrow morning between 9 AM and 11 AM. Does that work for you?",
      time: "16:45",
      showDate: false,
    },
    {
      id: 3,
      type: "received",
      text: "That works perfectly! I'll be home. Also, the faucet in the master bath has been a bit stiff lately if he has time to check that too?",
      time: "17:12",
      showDate: false,
      showDateLabel: "TODAY",
    },
    {
      id: 4,
      type: "received",
      text: "The kitchen sink is leaking again since this morning, much worse than before. Can the plumber come earlier?",
      time: "10:42",
      showDate: false,
    },
  ],
};

// Inbox ko filter karne ke liye tabs
export const inboxFilters = [
  { id: "all", label: "All", badge: null },
  { id: "unread", label: "Unread", badge: 3 },
  { id: "archived", label: "Archived", badge: null },
];

// Woh user jiski chat abhi open hai
export const activeChatPartner = {
  id: 1,
  name: "Julianne Moore",
  property: "Villa Azure, Unit 402",
  bookingUrl: "/bookings/villa-azure",
  propertyUrl: "/properties/villa-azure",
};

// addNewProperty
// ─── STEP CONFIG ────────────────────────────────────────────────────────────
export const steps = [
  { id: 1, key: "basicInfo", label: "BASIC INFO" },
  { id: 2, key: "details", label: "DETAILS" },
  { id: 3, key: "photos", label: "PHOTOS" },
  { id: 4, key: "pricing", label: "PRICING" },
  { id: 5, key: "review", label: "REVIEW" },
];

// ─── STEP BANNERS ────────────────────────────────────────────────────────────
export const stepBanners = {
  1: { type: "info", text: "All new property listings are subject to administrative review within 24 hours." },
  2: { type: "warning", text: "Please ensure all required information is accurate. Property details once submitted may require administrative approval to change." },
  3: { type: "warning", text: "Missing high-resolution photos may lower property visibility by up to 40%. Please ensure all media meets our quality guidelines." },
  4: { type: "warning", text: "Pricing details must be verified by local market regulations before publishing." },
  5: { type: "warning", text: "Please ensure all pricing details are final. Changes after submission may require admin approval." },
};

// ─── BASIC INFO ──────────────────────────────────────────────────────────────
export const propertyTypes = [
  "Residential Apartment", "Commercial Office", "Villa / House",
  "Studio Apartment", "Penthouse", "Warehouse", "Shop / Retail", "Plot / Land",
];

export const listingCategories = ["For Rent", "For Sale"];

export const cities = [
  "Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad",
  "Multan", "Peshawar", "Quetta", "Sialkot", "Gujranwala",
];

export const provinces = [
  "Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan",
  "Islamabad Capital Territory", "Gilgit-Baltistan", "Azad Kashmir",
];

// ─── DETAILS ─────────────────────────────────────────────────────────────────
export const furnishingOptions = [
  { value: "fully", label: "FULLY FURNISHED", icon: "🛋️" },
  { value: "semi", label: "SEMI FURNISHED", icon: "🪑" },
  { value: "unfurn", label: "UNFURNISHED", icon: "🚪" },
];

export const lifestyleAmenities = [
  { key: "wifi", label: "WiFi", icon: "📶" },
  { key: "ac", label: "AC", icon: "❄️" },
  { key: "pool", label: "Pool", icon: "🏊" },
  { key: "gym", label: "Gym", icon: "🏋️" },
  { key: "security", label: "Security", icon: "🔒" },
  { key: "garden", label: "Garden", icon: "🌳" },
  { key: "balcony", label: "Balcony", icon: "🏗️" },
  { key: "heating", label: "Heating", icon: "🔥" },
];

export const infrastructureItems = [
  { key: "gated", label: "Gated Community" },
  { key: "generator", label: "Backup Generator" },
  { key: "water", label: "Water Tank" },
  { key: "solar", label: "Solar Panels" },
  { key: "cctv", label: "CCTV System" },
  { key: "fire", label: "Fire Alarm" },
];

// ─── PRICING ─────────────────────────────────────────────────────────────────
export const currencies = ["USD ($)", "PKR (₨)", "EUR (€)", "GBP (£)", "AED (د.إ)"];

export const periods = ["Per Month", "Per Year", "Per Day", "Per Week"];

export const minRentalPeriods = ["1 Month", "3 Months", "6 Months", "1 Year"];

export const maxRentalPeriods = ["No Limit", "6 Months", "1 Year", "2 Years"];

export const utilities = [
  { key: "electricity", label: "Electricity" },
  { key: "water", label: "Water" },
  { key: "gas", label: "Gas" },
  { key: "internet", label: "Internet" },
  { key: "cableTV", label: "Cable TV" },
];

export const rulesToggles = [
  { key: "petsAllowed", label: "Pets Allowed", desc: "Are domestic animals permitted on premises?" },
  { key: "smokingAllowed", label: "Smoking Allowed", desc: "Is smoking permitted within the building units?" },
  { key: "childrenWelcome", label: "Children Welcome", desc: "Is the property child-friendly and safe for minors?" },
];

// ─── PHOTOS ──────────────────────────────────────────────────────────────────
export const mediaChecklist = [
  { key: "exterior", label: "Main Exterior Shot" },
  { key: "living", label: "Living Spaces" },
  { key: "bedroom", label: "Master Bedroom" },
  { key: "floorplan", label: "Floor Plans" },
  { key: "amenities", label: "Amenities/Common Areas" },
];

export const proTips = [
  'Shoot during "Golden Hour" for soft, warm lighting.',
  "Use wide-angle lenses to capture the scale of rooms.",
  "Declutter spaces to allow tenants to visualize themselves.",
  "Capture unique architectural details like crown molding.",
];


// =====================
// Pricing Page Constants
// =====================

export const pricingHero = {
  heading: "Simple, Transparent",
  headingHighlight: "Pricing.",
  subheading:
    "Scale your real estate portfolio with professional-grade tools designed for the modern architectural mindset. No hidden fees.",
};

export const billingToggle = {
  monthly: "Monthly",
  annually: "Annually",
  saveBadge: "SAVE 20%",
};

export const pricingPlans = [
  {
    id: "free",
    tier: "Entry Tier",
    name: "Free Plan",
    tagline: "Forever Free",
    monthlyPrice: 0,
    annualPrice: 0,
    annualBilled: null,
    saveBadge: null,
    isMostPopular: false,
    features: [
      "1 Property",
      "Basic Dashboard",
      "Tenant Requests",
    ],
    ctaLabel: "GET STARTED",
    ctaVariant: "outline",
  },
  {
    id: "monthly",
    tier: "Standard Tier",
    name: "Monthly Plan",
    tagline: "Scalable Solutions",
    monthlyPrice: 19,
    annualPrice: 19,
    annualBilled: null,
    saveBadge: null,
    isMostPopular: true,
    features: [
      "Up to 10 Properties",
      "Full Dashboard",
      "Tenant Management",
      "Standard Analytics",
    ],
    ctaLabel: "GET STARTED",
    ctaVariant: "solid",
  },
  {
    id: "annual",
    tier: "Professional Tier",
    name: "Annual Plan",
    tagline: null,
    monthlyPrice: 19,
    annualPrice: 15,
    annualBilled: "BILLED $180/YEAR",
    saveBadge: "SAVE 20%",
    isMostPopular: false,
    features: [
      "Unlimited Properties",
      "Advanced Analytics",
      "Priority Support",
      "All Features Included",
    ],
    ctaLabel: "GET STARTED",
    ctaVariant: "outline",
  },
];

export const trustedBrands = ["STRUCT", "URBANIST", "VILLA.IO", "SKYLINE"];

export const trustedLabel = "POWERING ARCHITECTURAL PORTFOLIOS GLOBALLY";
export const footer = {
  copyright: "© 2024 The Digital Estate. All rights reserved.",
  links: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Contact Support", href: "#" },
    { label: "Security", href: "#" },
  ],
};

export const userDashboardStatsData = [
  { value: 12, label: "Total Bookings", badge: "+2 This Week", id: "totalBookings", icon: CalendarIcon },
  { value: 2, label: "Upcoming Stays", id: "upcomingStays", icon: HomeIcon },
  { value: 45, label: "Saved Properties", id: "savedProperties", icon: HeartIcon },
  { value: 8, label: "Favorite Locations", id: "favoriteLocations", icon: MapPinIcon },
];

export const userDashboardSidebarLinksData = [
  { label: "Dashboard", path: "/dashboard", id: "dashboard" },
  { label: "Bookings", path: "/dashboard/bookings", id: "bookings" },
  { label: "Saved", path: "/dashboard/saved", id: "saved" },
  { label: "Messages", path: "/dashboard/messages", id: "messages" },
  { label: "Settings", path: "/dashboard/settings", id: "settings" },
];

export const ownerDashboardStatsData = [
  {
    id: "totalProperties",
    label: "Total Properties",
    count: "24",
    changePercent: "+2 this month",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-600"
  },
  {
    id: "occupied",
    label: "Currently Occupied",
    count: "18",
    changePercent: "+15%",
    bgColor: "bg-blue-50",
    textColor: "text-blue-500",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-500"
  },
  {
    id: "revenue",
    label: "This Month Revenue",
    count: "$14,250",
    changePercent: "+18%",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-500"
  },
  {
    id: "requests",
    label: "Booking Requests",
    count: "7",
    tag: "Needs Action",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    badgeBg: "bg-orange-800",
    badgeText: "text-white"
  }
];

export const propertyPerformanceData = [
  {
    id: 1,
    name: "The Azure Penthouse",
    rating: 4.9,
    bookings: 124,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=100&h=100&fit=crop",
    color: "bg-blue-600"
  },
  {
    id: 2,
    name: "Loft 42 Heritage",
    rating: 4.7,
    bookings: 89,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=100&h=100&fit=crop",
    color: "bg-blue-500"
  },
  {
    id: 3,
    name: "Silverwood Manor",
    rating: 4.5,
    bookings: 42,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=100&h=100&fit=crop",
    color: "bg-blue-400"
  }
];

export const earningsSummaryChartData = [
  { month: 'Sep', height: 40, value: '$24k' },
  { month: 'Oct', height: 70, value: '$42k' },
  { month: 'Nov', height: 60, value: '$36k' },
  { month: 'Dec', height: 80, value: '$54k' },
  { month: 'Jan', height: 75, value: '$50k' },
  { month: 'Feb', height: 100, value: '$68k' },
];

export const payoutData = {
  availableAmount: "$12,450.00",
  totalEarnings: "$84,200.00",
};

export const avatarColors = [
  "bg-rose-400",
  "bg-violet-400",
  "bg-amber-400",
  "bg-teal-400",
  "bg-sky-400",
  "bg-pink-400",
];

export const STRIPE_PUBLIC_KEY = "pk_test_51TOEpnRsBZnMLAV16VcGUZ2qLD8H4OL13WI6w327AboTHyjh3liTc3fO3M9tHdtnYH2GMZJAygEhoBPi2UfRXwbh009ckJxLlQ";

export const stripeCardStyle = {
  style: {
    base: {
      color: "#1f2937",
      fontFamily: "'Inter', sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#9ca3af",
      },
    },
    invalid: {
      color: "#ef4444",
      iconColor: "#ef4444",
    },
  },
};

export const footerSections = [
  {
    title: "Platform",
    links: [
      "Property Search",
      "Lease & Rent",
      "Investment Plans",
      "Market Trends",
      "Calculators",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Our Team",
      "Careers",
      "Press Release",
      "Privacy Policy",
    ],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Support", "Feedback"],
  },
];

export const footerDescription = "Leading the way in modern real estate solutions. We make finding, investing, and managing properties simple, transparent, and efficient for everyone.";

export const mockReservationData = {
  checkIn: "📅 Oct 05, 2024",
  checkOut: "📅 Oct 10, 2024",
  guests: "2 Adults, 1 Child",
  nights: 5,
  paymentMethod: "Credit Card (Ending in 4421)"
};

export const adminStatsOverviewData = [
  { id: 1, title: 'TOTAL USERS', value: '1,240', percentage: '+12%', color: 'bg-blue-500', icon: UserIcon },
  { id: 2, title: 'TOTAL PROPERTIES', value: '450', percentage: '+5.4%', color: 'bg-blue-500', icon: BuildingOfficeIcon },
  { id: 3, title: 'TOTAL BOOKINGS', value: '820', percentage: '+22%', color: 'bg-blue-500', icon: ClipboardDocumentListIcon },
  { id: 4, title: 'PENDING APPROVALS', value: '15', percentage: 'High Priority', color: 'bg-orange-500', icon: CalendarIcon },
];

export const avatarSizeMap = {
  sm: "w-8 h-8 text-[10px]",
  md: "w-11 h-11 text-xs",
  lg: "w-12 h-12 text-sm",
};

export const userAvatarColors = [
  "bg-blue-500", "bg-purple-500", "bg-pink-500",
  "bg-indigo-500", "bg-teal-500", "bg-orange-500"
];

export const profileUnsavedNotice = "You have unsaved changes in your profile settings.";

export const tabsConfig = [
  { id: "all", label: "All" },
  { id: "unread", label: "Unread" },
  { id: "archived", label: "Archived" },
];

export const dateOptions = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
};

export const revenuePeriodOptions = ["1 Week", "1 Month", "3 Months", "Year"];

export const revenueStatsData = [
  { date: "JAN", value: 45 },
  { date: "FEB", value: 52 },
  { date: "MAR", value: 48 },
  { date: "APR", value: 70 },
  { date: "MAY", value: 65 },
  { date: "JUN", value: 85 },
  { date: "JUL", value: 80 },
];

export const methodIcons = {
  bank: BuildingLibraryIcon,
  paypal: CurrencyDollarIcon,
  jazzcash: DevicePhoneMobileIcon,
};

export const payoutTableHeaders = [
  "TRANSACTION ID",
  "DATE",
  "METHOD",
  "AMOUNT",
  "STATUS",
];

export const propertyTableHeaders = [
  "PROPERTY",
  "BOOKINGS",
  "OCCUPANCY",
  "REVENUE",
  "TREND",
];

export const reviewTermsData = {
  title: "I agree to the Terms & Conditions",
  description: "By submitting this listing, you confirm that all information provided is accurate and that you have the legal right to list this property. Your listing will be reviewed within 24–48 hours before going live.",
  warning: "Your property will be submitted for admin review. This typically takes 24-48 hours.",
};

export const reviewPropertyDetailsConfig = [
  { icon: "🛏️", label: "Bedrooms", key: "bedrooms" },
  { icon: "🚿", label: "Bathrooms", key: "bathrooms" },
  { icon: "📐", label: "Total Area", key: "propertySize", suffix: " sqft" },
  { icon: "🛋️", label: "Furnishing", key: "furnishing", format: "furnishing" },
];

export const approvedUsersList = [
  { id: 1, name: "Ahmad Hassan", email: "ahmad.h@example.com", date: "May 15, 2024", status: "Approved" },
  { id: 2, name: "Sara Khan", email: "sara.k@gmail.com", date: "May 18, 2024", status: "Approved" },
  { id: 3, name: "Zainab Ali", email: "z.ali@outlook.com", date: "May 20, 2024", status: "Approved" },
  { id: 4, name: "Omar Farooq", email: "omar.f@tech.co", date: "May 21, 2024", status: "Approved" },
];

export const monthlyReportData = [
  { month: "Jan", value: 4500 },
  { month: "Feb", value: 5200 },
  { month: "Mar", value: 4800 },
  { month: "Apr", value: 7000 },
  { month: "May", value: 6500 },
  { month: "Jun", value: 8500 },
];
