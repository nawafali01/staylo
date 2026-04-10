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

export const calculateRipplePosition = (e) => {
  const btn = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
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

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    setRipple(calculateRipplePosition(e));
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

export const handleSelectOption = (e, item, onSelect) => {
  e.stopPropagation();
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
