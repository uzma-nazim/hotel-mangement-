import React, { useState } from 'react'


import style from "../../styles/signup.module.css"
import AppButtons from '../../authentification/button'

import { Grid, TextField } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios'

import { Form } from 'react-bootstrap'
import BASE_URI from '../../../core';



function BookingForm() {
    let [cnic, setemail] = useState("")
    let [hotel_name, sethotelname] = useState("")
    let [number, setnumber] = useState("")
    let [noOfper, setnoOfper] = useState("")
    let [startdate, setstartdate] = useState("")
    let [endate, setendate] = useState("")
    let [NoOfroom, setNoOfroom] = useState("")
    let [userdata, setuserdata] = useState(true)
    let navigate = useNavigate()

    // let { USER_DATA, USER_EMPTY_MSG } = useSelector(state => state.signupReducer)


    const dispatch = useDispatch();

    const booknow = async () => {

        setemail("")
        setstartdate("")
        sethotelname("")
        setnumber("")
        setnoOfper("")
        setendate("")
        setNoOfroom("")

        const userOBj = {

            hotel_name,
            cnic,
            number,
            noOfper,
            startdate,
            endate,
            NoOfroom


        }
        console.log(userOBj);

        if (!hotel_name || !cnic || !number || !startdate || !noOfper || !endate) {


            toast.error('REQUIRED FIELD ARE EMPTY!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

        else {
            setuserdata(false)
            axios.post(`${BASE_URI}booking`, userOBj)
                .then((res) => {
                    const { data } = res.data
                    console.log(res);
                    setuserdata(true)

                    if (data) {
                        toast.success('Your booking have been registered', {
                            position: "top-right",
                            autoClose: 500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        setTimeout(() => {
                            navigate("/userdashboard")

                        }, 1500)

                    }
                    else {
                        toast.error('Error', {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }

                })
                .catch((err) => {
                    console.log(err);

                })
        }


    }

    console.log(userdata);
    return (
        <>
            <div className={style.maincontainer}>
                <div className={style.miniContainer}>
                    <div className={style.heading}>

                        <h1>Booking</h1>
                    </div>
                    <br />
                    <div className={style.todocontainer}>
                        <Grid>

                            <Grid     >

                                {/* <TextField className={style.input} id="outlined-basic" value={user_name} onChange={(e) => setusername(e.target.value)} label="Enter Name" variant="outlined" fullWidth /> */}
                                <Form.Control className={style.input} value={hotel_name} onChange={(e) => sethotelname(e.target.value)} type="text" placeholder="Enter Hotel Name" />

                            </Grid>
                            <br />
                            <Grid >
                                {/* <TextField id="outlined-basic" value={cinc} onChange={(e) => setemail(e.target.value)} label="Enter Email" variant="outlined" fullWidth /> */}

                                <Form.Control className={style.input} value={cnic} onChange={(e) => setemail(e.target.value)} type="number" placeholder="Enter CNIC" />


                            </Grid>
                            <br />

                            <Grid >
                                {/* <TextField id="outlined-basic" type="address" value={address} onChange={(e) => setaddress(e.target.value)} label="Enter address" variant="outlined" fullWidth /> */}

                                <Form.Control className={style.input} type="number" value={number} onChange={(e) => setnumber(e.target.value)} placeholder="Enter Number" />


                            </Grid>
                            <br />
                            <Grid >
                                {/* <TextField id="outlined-basic" type="address" value={address} onChange={(e) => setaddress(e.target.value)} label="Enter address" variant="outlined" fullWidth /> */}

                                <Form.Control className={style.input} type="text" value={noOfper} onChange={(e) => setnoOfper(e.target.value)} placeholder="Enter No of person " />


                            </Grid>
                            <br />
                            <Grid >
                                {/* <TextField id="outlined-basic" type="address" value={address} onChange={(e) => setaddress(e.target.value)} label="Enter address" variant="outlined" fullWidth /> */}

                                <Form.Control className={style.input} type="date" value={startdate} onChange={(e) => setstartdate(e.target.value)} placeholder="Enter Start date " />


                            </Grid>
                            <br />
                            <Grid >
                                {/* <TextField id="outlined-basic" type="number" value={number} onCnumber={(e) => setconatct(e.target.value)} label="Enter Number" variant="outlined" fullWidth /> */}


                                <Form.Control className={style.input} type="date" value={endate} onChange={(e) => setendate(e.target.value)} placeholder="Enter End date" />

                            </Grid>
                            <br />
                            <Grid >
                                {/* <TextField id="outlined-basic" type="number" value={number} onCnumber={(e) => setconatct(e.target.value)} label="Enter Number" variant="outlined" fullWidth /> */}


                                <Form.Control className={style.input} type="text" value={NoOfroom} onChange={(e) => setNoOfroom(e.target.value)} placeholder="Enter No Of room   " />

                            </Grid>
                            <br />

                            <Grid >
                                <AppButtons onclick={booknow} data={userdata} buttonTex="Book Now" />                            </Grid>
                                
                        </Grid>





                    </div>

                    <br />


            </div>
        </div>

                   
        </>
    )
}

export default BookingForm