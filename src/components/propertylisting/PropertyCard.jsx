import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HeartIcon, MapPinIcon, MoonIcon, SparklesIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline"

const PropertyCard = ({ Properties }) => {
  const navigate = useNavigate()

  const handleClick = () => {
      
    navigate(`/property/${Properties.id}`)
  }

  return (
    <div className='bg-white rounded-2xl h-110 shadow-md overflow-hidden'>
      <div className='relative'>
        <img
          src={Properties.image}
          alt={Properties.title}
          className='w-full h-48 object-cover cursor-pointer'
          onClick={handleClick}
        />
        {Properties.featured && (
          <span className='absolute bottom-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-md font-medium'>FEATURE</span>
        )}
        <button className='absolute top-2 right-2 bg-white p-1.5 rounded-full shadow'>
          <HeartIcon className='w-5 h-5 text-gray-400' />
        </button>
      </div>

      <div className='p-4'>
        <div className='flex justify-between items-center'>
          <span className='text-blue-500 font-bold text-lg'>${Properties.price} <span className='text-sm font-normal text-gray-400'>/mo</span></span>
          <span className='text-sm text-black'>⭐{Properties.rating}</span>
        </div>
      </div>

      <h3 className='font-bold text-gray-800 pl-4 -mt-3'>{Properties.title}</h3>
      <div className='flex items-center gap-1 pl-4 mt-1'>
        <MapPinIcon className="w-4 h-4 text-gray-500" />
        <span className='text-gray-500 text-sm'>{Properties.location}</span>
      </div>
      <div className='flex gap-4 mt-3 text-gray-500 border-t pl-4 pt-3'>
        <span className='flex items-center gap-1'><MoonIcon className='w-4 h-4' />{Properties.beds} beds</span>
        <span className='flex items-center gap-1'><SparklesIcon className='w-4 h-4' />{Properties.baths} baths</span>
        <span className='flex items-center gap-1'><ArrowsPointingOutIcon className='w-4 h-4' />{Properties.sqft} sqft</span>
      </div>
      <button
        onClick={handleClick}
        className='w-1/2 mt-4 bg-blue-600 text-white py-2 rounded-xl text-sm font-medium mx-auto block'>
        View Details
      </button>
    </div>
  )
}

export default PropertyCard