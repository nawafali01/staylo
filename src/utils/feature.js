import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  contactFormInitialValues,
  defaultUser,
  defaultNotifications,
  defaultPrivacy,
  defaultLanguage,
  properties,
} from "../data/index";

export const getStyle = (date, checkIn, checkOut) => {
  if (!date) return "";
  if (date === checkIn || date === checkOut)
    return "bg-blue-600 text-white rounded-full";
  if (date > checkIn && date < checkOut)
    return "bg-blue-100 text-blue-700 rounded-none";
  return "text-gray-700 hover:bg-gray-100 rounded-full";
};

export const getPropertyById = (properties, id) => {
  return properties.find((p) => p.id === parseInt(id));
};

export const calculateRipplePosition = (event) => {
  const btn = event.currentTarget;
  const rect = btn.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
};

export const formatLineBreaks = (text) => {
  return text.split("\n");
};

export const useHomeHero = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // 'location', 'price', 'property'
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("2000 - 5000");
  const [propertyType, setPropertyType] = useState("Modern Apartment");

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleSelect = (setter) => (val) => {
    setter(val);
    setActiveDropdown(null);
  };

  return {
    activeDropdown,
    setActiveDropdown,
    location,
    setLocation,
    price,
    setPrice,
    propertyType,
    setPropertyType,
    toggleDropdown,
    handleSelect,
  };
};

export const useContactForm = () => {
  const [form, setForm] = useState({ ...contactFormInitialValues });
  const [submitted, setSubmitted] = useState(false);
  const [ripple, setRipple] = useState(null);

  const handleChange = (event) =>
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const handleSubmit = (event) => {
    setRipple(calculateRipplePosition(event));
    setTimeout(() => setRipple(null), 600);
    if (form.name && form.email && form.message) {
      setTimeout(() => setSubmitted(true), 300);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ ...contactFormInitialValues });
  };

  return {
    form,
    submitted,
    ripple,
    handleChange,
    handleSubmit,
    handleReset,
  };
};

export const useUserDashboardSetting = () => {
  const [fullName, setFullName] = useState(defaultUser.fullName);
  const [phone, setPhone] = useState(defaultUser.phone);
  const [email, setEmail] = useState(defaultUser.email);
  const [notifications, setNotifications] = useState(defaultNotifications);
  const [profileVisible, setProfileVisible] = useState(
    defaultPrivacy.profileVisible,
  );
  const [language, setLanguage] = useState(defaultLanguage);

  const handleNotifChange = (key) => (val) => {
    setNotifications((prev) => ({ ...prev, [key]: val }));
  };

  return {
    fullName,
    setFullName,
    phone,
    setPhone,
    email,
    setEmail,
    notifications,
    handleNotifChange,
    profileVisible,
    setProfileVisible,
    language,
  };
};

export const handleSelectOption = (event, item, onSelect) => {
  event.stopPropagation();
  onSelect(item);
};

export const getGalleryData = (property) => {
  const gallery =
    property?.gallery ??
    Array(5).fill(property?.image ?? "https://via.placeholder.com/800");
  const totalPhotos = property?.totalPhotos ?? gallery.length;
  return { gallery, totalPhotos };
};

export const formatBillsIncluded = (included) => {
  return included ? "Bills Included" : "Bills not Included";
};

export const usePropertyDetail = () => {
  const { id } = useParams();
  const property = getPropertyById(properties, id);
  return { property };
};

export const usePropertyNavigation = () => {
  const navigate = useNavigate();

  const navigateToProperty = (id) => {
    navigate(`/property/${id}`);
  };

  return { navigateToProperty };
};
export const formatCurrency = (amount) => {
  if (!amount) return "0.00";
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const getPaymentStyle = (status) => {
  switch (status?.toLowerCase()) {
    case 'paid':
      return 'bg-blue-100 text-blue-700';
    case 'partially paid':
      return 'bg-orange-100 text-orange-700';
    case 'unpaid':
      return 'bg-gray-100 text-gray-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};


export const getStatusStyle = (status) => {
  switch (status?.toLowerCase()) {
    case 'booked':
      return 'bg-blue-500';
    case 'completed':
      return 'bg-green-500';
    case 'cancelled':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};
export const getStatusDot = (status) => {
  const s = status?.toLowerCase();
  if (s === "booked") return "bg-blue-500";
  if (s === "completed") return "bg-green-500";
  if (s === "cancelled") return "bg-red-500";
  return "bg-gray-400";
};
export const getStatusColor = (status) => {
  const s = status?.toLowerCase();
  switch (s) {
    case 'approved':
      return 'bg-white/90 text-blue-600 backdrop-blur-sm'; 
    case 'pending':
      return 'bg-orange-100 text-orange-600';
    case 'rejected':
      return 'bg-red-100 text-red-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

export const getOwnerPropertyStatusStyles = (status) => {
  switch (status?.toLowerCase()) {
    case "available":
      return {
        badge: "bg-green-100 text-green-700",
        text: "AVAILABLE",
        dot: "bg-green-500",
      };
    case "occupied":
      return {
        badge: "bg-blue-100 text-blue-700",
        text: "OCCUPIED",
        dot: "bg-blue-500",
      };
    case "under_review":
      return {
        badge: "bg-orange-100 text-orange-700",
        text: "UNDER REVIEW",
        dot: "bg-orange-500",
      };
    default:
      return {
        badge: "bg-gray-100 text-gray-700",
        text: "VACANT",
        dot: "bg-gray-500",
      };
  }
};

export const filterPropertiesData = (properties, activeFilter, searchQuery) => {
  let filtered = properties || [];

  if (activeFilter && activeFilter !== "all") {
    const filterMap = {
      available: "available",
      occupied: "occupied",
      "under-review": "under_review",
    };
    filtered = filtered.filter(
      (prop) => prop.status === (filterMap[activeFilter] || activeFilter)
    );
  }

  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (prop) =>
        prop.name?.toLowerCase().includes(query) ||
        prop.location?.toLowerCase().includes(query)
    );
  }

  return filtered;
};

export const sortPropertiesData = (properties, sortBy) => {
  const sorted = [...properties];
  switch (sortBy) {
    case "Newest":
    case "newest":
      return sorted.sort((a, b) => b.id - a.id);
    case "Oldest":
    case "oldest":
      return sorted.sort((a, b) => a.id - b.id);
    case "Price: High to Low":
    case "price-high":
      return sorted.sort((a, b) => b.price - a.price);
    case "Price: Low to High":
    case "price-low":
      return sorted.sort((a, b) => a.price - b.price);
    case "Highest Rated":
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    default:
      return sorted;
  }
};

export const getBookingStatusStyles = (status) => {
  const colors = {
    CONFIRMED: 'bg-blue-50 text-blue-700 border-blue-200',
    PENDING: 'bg-orange-50 text-orange-700 border-orange-200',
    COMPLETED: 'bg-teal-50 text-teal-700 border-teal-200',
    REJECTED: 'bg-red-50 text-red-700 border-red-200',
  };
  return colors[status?.toUpperCase()] || 'bg-gray-50 text-gray-700 border-gray-200';
};

export const getBookingStatColor = (color) => {
  const colors = {
    blue: 'text-blue-600',
    orange: 'text-orange-500',
    teal: 'text-teal-600',
  };
  return colors[color] || 'text-gray-600';
};

export const filterBookingsData = (bookings, activeTab) => {
  if (!activeTab || activeTab === 'all') return bookings;
  return bookings.filter(booking => booking.status.toLowerCase() === activeTab.toLowerCase());
};

export const getRecentBookingStatusStyle = (status) => {
  if (status === "BOOKED") return "bg-blue-50 text-blue-600 border-blue-100";
  if (status === "COMPLETED") return "bg-green-50 text-green-600 border-green-100";
  return "bg-red-50 text-red-600 border-red-100";
};

export const buildSmoothPath = (points, width, height, padding = 40) => {
  const maxVal = Math.max(...points.map((point) => point.value));
  const minVal = Math.min(...points.map((point) => point.value));
  const range = maxVal - minVal || 1;

  const coords = points.map((point, index) => ({
    x: padding + (index / (points.length - 1)) * (width - padding * 2),
    y: height - padding - ((point.value - minVal) / range) * (height - padding * 2),
  }));

  let path = `M ${coords[0].x} ${coords[0].y}`;
  for (let index = 1; index < coords.length; index++) {
    const cp1x = (coords[index - 1].x + coords[index].x) / 2;
    const cp1y = coords[index - 1].y;
    const cp2x = (coords[index - 1].x + coords[index].x) / 2;
    const cp2y = coords[index].y;
    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${coords[index].x} ${coords[index].y}`;
  }
  return { path, coords };
};

