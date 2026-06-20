import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import HomeHero from '../../components/userPagesComponents/home/HomeHero'
import HomeFeatures from '../../components/userPagesComponents/home/HomeFeatures'
import HomePropertyCards from '../../components/userPagesComponents/home/HomePropertyCards'

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleGuestInteraction = (e) => {
    if (!isLoggedIn) {
      // Prevent the default action (like following a link or button click)
      e.preventDefault();
      e.stopPropagation();
      
      toast.error("Please sign in to interact with the platform!");
      navigate("/signin");
    }
  };

  return (
    <div onClickCapture={handleGuestInteraction} className="cursor-default">
      <HomeHero/>
      <HomeFeatures/>
      <HomePropertyCards />
    </div>
  )
}

export default Home
