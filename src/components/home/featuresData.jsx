import { 
 GlobeAltIcon, 
  CalendarIcon, 
  KeyIcon
} from '@heroicons/react/24/outline';

export const featuresData = [
  {
    id: 1,
    icon: <GlobeAltIcon className="w-12 h-12 text-blue-600" />,
    title: "Browser listings",
    desc: "Explore high-quality properties with verified virtual tours and detailed documentation."
  },
  {
    id: 2,
    icon: <CalendarIcon className="w-12 h-12  text-blue-600" />,
    title: "Instant Booking",
    desc:"Secure your favorite spot instantly with our simplified digital contract system."
  },
  {
    id: 3,
    icon: <KeyIcon className="w-12 h-12  text-blue-600" />,
    title: "Move in Ready",
    desc: "Pick up your keys and enjoy your move-in ready, professionally managed home."
  }
];