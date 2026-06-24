import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Hero from "./Hero";
import Features from "./Features";
import PropertyCards from "./PropertyCards";

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleGuestInteraction = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      e.stopPropagation();
      toast.error("Please sign in to interact with the platform!");
      navigate("/signin");
    }
  };

  return (
    <div onClickCapture={handleGuestInteraction} className="cursor-default">
      <Hero />
      <Features />
      <PropertyCards />
    </div>
  );
};

export default Home;
