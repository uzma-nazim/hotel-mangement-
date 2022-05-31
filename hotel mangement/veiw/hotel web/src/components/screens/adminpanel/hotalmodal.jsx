import React, { useState } from 'react'
import "../../styles/adminpanel.css"
const AddHotel = () => {

    let [name, setName] = useState("")
    let [service, setservice] = useState("")
    let [room1, setroom1] = useState("")
    let [room2, setroom2] = useState("")
    let [room3, setroom3] = useState("")
    let [prize, setprize] = useState("")

    const addhotel = () => {

        const hoteldetails = {
            name, 
            service,
            room1,
            room2,
            room3,
            prize,
        }
        console.log(hoteldetails);


    }
    return (
        <>
            <div>

                <div className="modal fade" id="addhotel" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Hotel Details</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Enter Name</label>
                                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Services Select</label>
                                    <select className="form-control" onChange={(e) => setservice(e.target.value)} value={service} id="exampleFormControlSelect1">
                                        <option>AC</option>
                                        <option>NO AC</option>

                                    </select>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" onChange={(e) => setroom1(e.target.checked)} value={room1} type="checkbox" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Single Room
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" onChange={(e) => setroom2(e.target.checked)} value={room2} id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Double Room
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="defaultCheck1" onChange={(e) => setroom3(e.target.checked)} value={room3} />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        luxury Room
                                    </label>
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Enter Prize</label>
                                    <input type="number" onChange={(e) => setprize(e.target.value)} value={prize} className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Add image</label>
                                    <input type="file" className="form-control" id="exampleInputPassword1" />
                                </div>


                                <button type="button" onClick={addhotel} className="btn btn-primary w-100">Add</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <button className='Add-Hotel w-75 btn btn-gray  ' data-toggle="modal" data-target="#addhotel">Add Hotel</button>
        </>
    )
}

export default AddHotel