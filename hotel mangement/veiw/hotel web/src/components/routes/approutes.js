import { Route, Routes } from 'react-router-dom'

import React from 'react'
import Signup from '../authentification/signup'


import Fullscreen from '../screens/fullscreen'
import Userbooking from '../screens/home/userbooking'
import BookingForm from '../screens/home/boooking'
import Login from '../authentification/login'

import UserDashboard from '../screens/userdashboard/userDashboard'
import Profile from '../screens/userdashboard/profile'
import Hotelregistar from '../screens/adminpanel/adminsignup'
import AdminLogin from '../screens/adminpanel/adminlogin'
import AdminSignup from '../screens/adminpanel/adminsignup'
import Adminpanel from '../screens/adminpanel/adminpanel'
import AdminProfile from '../screens/adminpanel/adminprofile'


const Approutes = () => {
    return (
        <>
        
            <Routes>
                <Route path="/"  element={<Fullscreen/>}/>
                <Route path="/signup" element={<Signup/>} />
                <Route path="login" element={<Login/>} />
                <Route path="userdashboard" element={<UserDashboard/>} />
                <Route path="userbooking" element={<Userbooking/>} />
                <Route path="bookingForm" element={<BookingForm/>} />
                <Route path="profile" element={<Profile/>} />
                <Route path="adminSignup" element={< AdminSignup/>} />
                <Route path="adminLogin" element={< AdminLogin/>} />
                <Route path="adminpanel" element={< Adminpanel/>} />
                <Route path="adminProfile" element={< AdminProfile/>} />
                
                
                
                
            </Routes>
            

        </>
    )
}

export default Approutes
