import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import "../../styles/home.css"
import hotel1 from "../../assests/images/hotel1.jpg"
import { AiTwotoneStar } from "react-icons/ai";
import DetailsModal from "./modal"
import CardCom from './card'
const Hotel1 = () => {
    
    return (
        <>
            <div className="hotelSection">
                <br />
                <br />
                <br />
                <h1 className='h1'>momondo's recommended hotels</h1>

                <br />
                <br />
                <br />
                <div className="container">
                    <div className="cardcontaoner">
           
                        
                        <CardCom/>
                        <CardCom/>
                        <CardCom/>
                        
                    </div>

                </div>

            </div>

        </>
    )
}

export default Hotel1