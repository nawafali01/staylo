import React from 'react'
import { useParams } from 'react-router-dom'
import { Properties } from '../../data'
import DetailPropertySummary from './DetailPropertySummary'
import ConfirmBookingHeader from './ConfirmBookingHeader'
import ConfirmReservationPanel from './ConfirmReservationPanel'
import ConfirmBookingCalendar from './ConfirmBookingCalendar'




const ConfirmBookingLayout = () => {
  const { id } = useParams()
  const property = Properties.find(p => p.id === parseInt(id))

  if (!property) return <p>Property not found!</p>

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8 max-w-5xl mx-auto">
      <ConfirmBookingHeader/>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
        <div className="flex flex-col gap-5">
          <DetailPropertySummary property={property} />
          <ConfirmBookingCalendar/>
        </div>
        <div className="flex flex-col gap-5">
          <ConfirmReservationPanel property={property}/>
        </div>
      </div>
    </div>
  )
}

export default ConfirmBookingLayout