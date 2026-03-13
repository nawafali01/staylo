import React from 'react'
import { useParams } from 'react-router-dom'
import { Properties } from '../../data'
import PropertyHeroDetail from './PropertyHeroDetail'
import PropertyInfo from './PropertyInfo'
import BookingCard from './BookingCard'
import LocationMap from './LocationMap'

const DetailPage = () => {
  const { id } = useParams()
  const property = Properties.find(p => p.id === parseInt(id))

  if (!property) return <p className="text-center mt-20 text-gray-500 text-xl">Property not found!</p>

  return (
    <>
      <PropertyHeroDetail property={property} />
      <div className='flex gap-8 px-6 py-8 max-w-8xl mx-auto'>
        <div className="flex-1">
          <PropertyInfo property={property} />
          <LocationMap property={property} />
        </div>
        <div className="w-80 shrink-0">
          <BookingCard property={property} />
        </div>
      </div>
    </>
  )
}

export default DetailPage