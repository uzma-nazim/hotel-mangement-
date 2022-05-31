import React from 'react'
import { Card } from 'react-bootstrap'
import { AiTwotoneStar } from "react-icons/ai";
import hotel1 from "../../assests/images/hotel1.jpg"
import DetailsModals from './modal';

const CardCom = () => {
  return (
    <Card style={{ width: '21rem', backgroundColor: "#EBE6EF"  , margin:"10px"}}>
    <Card.Img variant="top" src={hotel1} />
    <Card.Body>
        <Card.Title>Beach Luxury Hotel</Card.Title>
        <Card.Text>
            Good 620 reviews <br />
            <AiTwotoneStar className='star' />
            <AiTwotoneStar className='star' />
            <AiTwotoneStar className='star' />
            <AiTwotoneStar className='star' />
        </Card.Text>
        
        <DetailsModals    />
        
    </Card.Body>
</Card>
  )
}

export default CardCom