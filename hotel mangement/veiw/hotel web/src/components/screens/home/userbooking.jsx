import axios from 'axios'
import React from 'react'
import BASE_URI from '../../../core'
import style from "../../styles/signup.module.css"
const Userbooking = () => {


    

    return (
        <div className={style.maincontainer}>
            <div className={style.miniContainer}>
                <div className={style.heading}>

                    <h1>Booking details</h1>
                </div>
                <div className={style.detailsBookin}>
                    <h1>Name :Uzma</h1>
                    <h1>Address :Uzma</h1>
                    <h1>No of Person:12</h1>
                    <h1>No of days to stay : 121</h1>
                </div>


            </div>
        </div>
    )
}

export default Userbooking