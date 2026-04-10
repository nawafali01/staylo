import React from 'react'
import { useParams } from 'react-router-dom'
import { properties } from '../data'
import DetailPropertySummary from '../components/confirmPropertyBooking/DetailPropertySummary'
import ConfirmBookingHeader from '../components/confirmPropertyBooking/ConfirmBookingHeader'
import ConfirmReservationPanel from '../components/confirmPropertyBooking/ConfirmReservationPanel'
import ConfirmBookingCalendar from '../components/confirmPropertyBooking/ConfirmBookingCalendar'

const ConfirmBookingPage = () => {
  const { id } = useParams()
  const property = properties.find(p => p.id === parseInt(id))

  if (!property) return <p>Property not found!</p>

  return (
    <>
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
    </>
  )
}

export default ConfirmBookingPage
