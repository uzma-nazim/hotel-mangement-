import React, { useState } from 'react'
import HomeWorkIcon from '@mui/icons-material/HomeWork';

import "../../styles/userDashboard.css"
import "../../styles/adminpanel.css"

import axios from 'axios';
import BASE_URI from '../../../core';
import AddHotel from './hotalmodal';
const AdminHotel = () => {

    
    return (

        <>
            <div className="a">
                <div className="heading">
                    <h3>
                        Dashboard</h3>
                    <HomeWorkIcon className='homeIcon' />
                </div>
            </div>

           
                    <div className="noBooking">
                        <h5>YOU DID NOT ADD ANY HOTEL </h5>
                        <hr />

                    </div>
                    
        <div className="addhotel">
            <AddHotel/>

        </div>

                    {/* <div className="bookTable">

                        <h1>Bookign Details</h1>


                        <BookingTable  toggleFunc={settoggle1} toggleProps={toggle1} />
                    </div> */}



        </>
    )
}

export default AdminHotel