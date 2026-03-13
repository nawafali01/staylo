import React from 'react'
import { MapPinIcon } from "@heroicons/react/24/outline"

const PropertyHeroDetail = ({ property }) => {
  const gallery = property?.gallery ?? Array(5).fill(property?.image ?? "https://via.placeholder.com/800");
  const totalPhotos = property?.totalPhotos ?? gallery.length;

  return (
    <div className='py-6 px-12'>
      <div className='flex gap-4'>
        <div className='bg-green-300 rounded-full px-3'>
          <p>{property?.status ?? "Unknown"}</p>
        </div>
        <p className='text-blue-600'>⭐ {property?.rating ?? "N/A"} ({property?.reviewCount ?? 0} reviews)</p>
      </div>

      <div className='flex justify-between items-start'>
        <div className='flex flex-col gap-1'>
          <h1 className='text-black text-4xl font-bold'>{property.title}</h1>
          <div className='flex items-center gap-1'>
            <MapPinIcon className="w-4 h-4 text-gray-500" />
            <p>{property.location}</p>
          </div>
        </div>
        <div className='flex flex-col items'>
          <span className='text-blue-500 font-bold text-lg'>
            ${property.price} <span className='text-sm font-normal text-gray-400'>/mo</span>
          </span>
          <p>{property.billsIncluded ? "Bills Included" : "Bills not Included"}</p>
        </div>
      </div>

      <div className='grid grid-cols-3 grid-rows-2 gap-2 h-[500px] rounded-2xl overflow-hidden mt-6'>
        <div className='row-span-2 overflow-hidden'>
          <img src={gallery[0]} alt="Main Property"
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer' />
        </div>
        <div className='overflow-hidden'>
          <img src={gallery[1]} alt="View 2"
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer' />
        </div>
        <div className='overflow-hidden'>
          <img src={gallery[2]} alt="View 3"
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer' />
        </div>
        <div className='overflow-hidden'>
          <img src={gallery[3]} alt="View 4"
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer' />
        </div>
        <div className='relative overflow-hidden group'>
          <img src={gallery[4]} alt="View 5"
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
          <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
            <span className='text-white font-semibold text-lg'>+{totalPhotos} Photos</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyHeroDetail