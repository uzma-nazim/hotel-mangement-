import React from 'react'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Dashboardrawer from '../userdashboard/drawer';
import BookingSection from '../userdashboard/bookingSection';
import AdminHotel from './adminHotel';
import Admindrawer from './admindrawer';


const Adminpanel = () => {
    return (
        <>
            <div className="adminpanel">
                <div className="dasboardmain">
                    <Admindrawer />
                    <br />
                    <AdminHotel />
                </div>



            </div>
        </>
    )
}

export default Adminpanel
