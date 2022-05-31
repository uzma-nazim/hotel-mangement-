import React from 'react'
import BookingSection from './bookingSection'
import Dashboardrawer from './drawer'
import "../../styles/userDashboard.css"

const UserDashboard = () => {
  return (
    <>
      <div className="dasboardmain">
        <Dashboardrawer />
        <br />
        <BookingSection />
      </div>


    </>
  )
}

export default UserDashboard