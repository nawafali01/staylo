import React from 'react'

const LocationMap = ({ property }) => {
  return (
    <div className="w-full mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 mt-8 text-center">Location</h2>
      <div className="rounded-2xl overflow-hidden h-64">
        <iframe
          src={property.mapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default LocationMap