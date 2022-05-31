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



function AdminSignup() {
    let [admin_name, setadmin_name] = useState("")
    let [number, setnumber] = useState("")
    let [email, setemail] = useState("")
    let [cnic, setcnic] = useState("")
    let [dateOfBirth, setdateOfBirth] = useState("")
    let [password, setpassword] = useState("")
    
    let [userdata, setuserdata] = useState(true)
    let navigate = useNavigate()

    // let { USER_DATA, USER_EMPTY_MSG } = useSelector(state => state.signupReducer)


    const dispatch = useDispatch();

    const booknow = async () => {

        setadmin_name("")
        setemail("")
        setpassword("")
        setnumber("")
        setcnic("")
        setdateOfBirth("")

        const userOBj = {

            admin_name,
            cnic,
            number,
            email,
            dateOfBirth,
            password


        }
        console.log(userOBj);

        if (!admin_name || !cnic || !number || !dateOfBirth  || !email) {


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
            axios.post(`${BASE_URI}admin/signup`, userOBj)
                .then((res) => {
                    const { data } = res.data
                    console.log(res);
                    setuserdata(true)

                    if (data) {
                        toast.success('successfully SignUp', {
                            position: "top-right",
                            autoClose: 500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        setTimeout(() => {
                            navigate("/AdminLogin")

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

    
    return (
        <>
            <div className={style.maincontainer}>
                <div className={style.miniContainer}>
                    <div className={style.heading}>

                        <h1>Admin Sign Up From</h1>
                    </div>
                    <br />
                    <div className={style.todocontainer}>
                        <Grid>

                            <Grid     >

                                
                                <Form.Control className={style.input} value={admin_name} onChange={(e) => setadmin_name(e.target.value)} type="text" placeholder="Enter  Name" />

                            </Grid>
                            <br />
                            <Grid >
                               

                               <Form.Control className={style.input} type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter Email" />


                           </Grid>
      
                           <br />
                            <Grid >
                               

                                <Form.Control className={style.input} value={cnic} onChange={(e) => setcnic(e.target.value)} type="number" placeholder="Enter CNIC" />


                            </Grid>
                            <br />

                            <Grid >
                                

                                <Form.Control className={style.input} type="number" value={number} onChange={(e) => setnumber(e.target.value)} placeholder="Enter Number" />


                            </Grid>
                            <br />
                   
                            <Grid >
                                <Form.Control className={style.input} type="date" value={dateOfBirth} onChange={(e) => setdateOfBirth(e.target.value)} placeholder="Enter date of birth" />
                            </Grid>
                            
                            <br />
                            <Grid >
                                <Form.Control className={style.input} type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter Password" />
                            </Grid>
                  
                            <br />

                            <Grid >
                                <AppButtons onclick={booknow} data={userdata} buttonTex="Sign up" />                            </Grid>
                                
                        </Grid>

                        <br />

                        <Grid>
                            <Link to="/AdminLogin"> <p className={style.smalltex} > have an account?  <span> Login in</span></p></Link>
                        </Grid>




                    </div>

                    <br />


            </div>
        </div>

                   
        </>
    )
}

export default AdminSignup