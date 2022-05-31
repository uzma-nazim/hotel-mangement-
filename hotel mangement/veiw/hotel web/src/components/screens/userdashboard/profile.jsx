import React, { useEffect, useState } from 'react'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import "../../styles/userDashboard.css"
import Dashboardrawer from './drawer';
import avtar from "../../assests/images/avatar.png"
import { FaEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from 'axios';
import { ImCross } from "react-icons/im";
import BASE_URI from '../../../core';

const Profile = () => {

    const [userdata, setuserdata] = useState()
    const [editToggle, seteditToggle] = useState(false)
    const [dataToggle, setdataToggle] = useState(false)

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")
    const [dateofbirth, setdateofbirth] = useState("")


    const edit = () => {
        seteditToggle(!editToggle)

    }


    const user = JSON.parse(localStorage.getItem("user"))


    useEffect(() => {
        const { _id } = user

        axios.post(`${BASE_URI}signupget`, { _id })
            .then((userdata) => {
                const { data } = userdata

                setuserdata(data)

            })
            .catch((error) => {
                console.log(error);

            })
    }, [dataToggle])

    const updatesave = () => {
        seteditToggle(!editToggle)
        setdataToggle(!dataToggle)
        const { _id } = user


        const updateUser = {
            user_name: name,
            email,
            contact: number,
            dateofbirth: dateofbirth
        }
        axios.patch(`${BASE_URI}userupdate:${_id}`,  updateUser )
            .then((userUpdate) => {
                const { data } = userUpdate
              
            })
            .catch((error) => {
                console.log(error);

            })

    }


    return (
        <>
            <div className="dasboardmain">
                <Dashboardrawer />
                <br />

                <div className="">
                    <div className="heading">
                        <h3>
                            Dashboard</h3>
                        <HomeWorkIcon className='homeIcon' />
                    </div>
                </div>
                {
                    !editToggle ?

                        <div className="container">
                            <div className="userDetails row m-0 ">

                                {

                                    !userdata ? "Loading" :
                                        <div className="profileContainer col-lg-5 col-md-12 ">

                                            <div className="profileavtar">

                                                <img src={avtar} width="100%" alt="" />

                                                <p>{userdata.user_name}</p>
                                                <p><MdEmail /> {userdata.email}</p>
                                            </div>

                                        </div>
                                }
                                <br />
                                <br />

                                <div className="persnolInfo col-lg-9 col-md-12">
                                    <div className="about">
                                        <h5>About  Me</h5>
                                        <span onClick={edit} >{!editToggle ? <FaEdit /> : <ImCross />} </span>

                                    </div>
                                    <hr />



                                    {
                                        !userdata ? "Loading....." :

                                            <div className="details">
                                                <div>

                                                    <h5>Name:</h5>
                                                    <h5>Email:</h5>
                                                    <h5>Mobile Number:</h5>

                                                    <h5>Birth Date</h5>
                                                </div>


                                                <div>

                                                    <p> {userdata.user_name}</p>
                                                    <p>  {userdata.email}</p>
                                                    <p> {userdata.contact}</p>
                                                    <p> {userdata.dateofbirth}</p>
                                                </div>
                                            </div>

                                            

                                    }





                                </div>
                            </div>
                        </div>
                        :

                        <div className="container">
                            <div className="userDetails row m-0 ">

                                {

                                    !userdata ? "Loading" :
                                        <div className="profileContainer col-lg-5 col-md-12 ">

                                            <div className="profileavtar">

                                                <img src={avtar} width="100%" alt="" />

                                                <p>{userdata.user_name}</p>
                                                <p><MdEmail /> {userdata.email}</p>
                                            </div>

                                        </div>
                                }
                                <br />
                                <br />

                                <div className="persnolInfo col-lg-9 col-md-12">
                                    <div className="about">
                                        <h5>About  Me</h5>
                                        <span onClick={edit}>{!editToggle ? <FaEdit /> : <ImCross />}</span>

                                    </div>
                                    <hr />





                                    <div className="detailsForm">
                                        {/* <form > */}
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Name</label>
                                            <input value={name} onChange={(e) => setname(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control" value={email} onChange={(e) => setemail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Number</label>
                                            <input type="number" className="form-control" id="exampleInputEmail1" value={number} onChange={(e) => setnumber(e.target.value)} aria-describedby="emailHelp" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Date of birth</label>
                                            <input type="date" className="form-control" id="exampleInputEmail1" value={dateofbirth} onChange={(e) => setdateofbirth(e.target.value)} aria-describedby="emailHelp" />
                                        </div>
                                        <button type="button" onClick={updatesave} className="btn btn-primary save" >Save</button>
                                        {/* </form> */}
                                    </div>



                                </div>
                            </div>
                        </div>


                }
            </div>
        </>
    )
}

export default Profile