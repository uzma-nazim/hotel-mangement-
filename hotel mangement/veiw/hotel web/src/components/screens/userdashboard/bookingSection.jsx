import React, { useState } from 'react'
import HomeWorkIcon from '@mui/icons-material/HomeWork';

import "../../styles/userDashboard.css"

import BookingTable from './bookingtable';
import axios from 'axios';
import BASE_URI from '../../../core';
const BookingSection = () => {

    const [data, setdata] = React.useState("")
    const [toggle1 , settoggle1 ] = useState(false)

    React.useEffect(() => {

        axios.get(`${BASE_URI}getbooking`)
            .then((data) => {
                setdata(data.data)


            })
            .catch((err) => {
                console.log(err)

            })


    }, [toggle1 ])
    console.log(data.length);
    return (

        <>
            <div className="a">
                <div className="heading">
                    <h3>
                        Dashboard</h3>
                    <HomeWorkIcon className='homeIcon' />
                </div>
            </div>

            {
                data.length===0 ?
                    <div className="noBooking">
                        <h5>YOU DID NOT BOOK ANY HOTEL </h5>
                        <hr />

                    </div>
                    :
                    <div className="bookTable">

                        <h1>Bookign Details</h1>


                        <BookingTable  toggleFunc={settoggle1} toggleProps={toggle1} />
                    </div>
            }



        </>
    )
}

export default BookingSection