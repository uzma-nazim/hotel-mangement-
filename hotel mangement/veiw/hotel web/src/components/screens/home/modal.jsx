import { Button } from "bootstrap";
import { Modal } from "bootstrap";
import { useRef, useState } from "react";
import "../../styles/home.css"
import hotalImg from "../../assests/images/hotel2.jpg"
import { useNavigate } from "react-router-dom";

function DetailsModals() {


  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const ref =useRef("f") 
  const navige = useNavigate()
  const UserCheck = () => {
    const user = localStorage.getItem("user")
    if (user) {

      navige("/bookingForm")
    }
else{
  navige("/signup")


}

  }
  return (


    <>
      <div>
        {/* Button trigger modal */}
        <button type="button" className="btn btn-primary btnccolor" data-toggle="modal" data-target="#exampleModal">
          Veiw
        </button>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Hotel Details</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="detailContainers">
                  <div className="hotalImg"> <img src={hotalImg} alt="" /></div>
                  <div className="contentHotel">
                    <h1>Beach Luxury Hotel</h1>
                    <p>No of rooms :12</p>
                    <p>Per day price   :12</p>
                    <p> Services available   :12</p>

                    <button className="Veiw " onClick={UserCheck}>Book Now</button>
                    
                  </div>

                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* second moddal */}

      
    
    </>
  )
}

export default DetailsModals


