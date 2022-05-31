import axios from 'axios';


import Button from '@mui/material/Button';
import style from "../../styles/signup.module.css"
import BASE_URI from '../../../core';

import { Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';




function AdminLogin() {
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    let [toggle, setToggle] = useState()
    let [loader, setLoader] = useState(false)

    const navigate = useNavigate()



    // const { USER_EMPTY_MSG, USER_DATA } = useSelector(state => state.loginReducer)

    const adminInfo = localStorage.getItem("admin")
    const login = () => {
        setLoader(true)
        setpassword("")
        setemail("")
        const userOBj = {
            email,
            password
        }
        setToggle(toggle)
        if (!email || !password) {
            toast.error('Required Field Are Empty', {
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
            axios.post(`${BASE_URI}login`, userOBj)
                .then((res) => {
                    setLoader(false)
                    const { data } = res
                    if (data.massage) {
                        toast.error('Invalid User', {

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
                        setLoader(false)

                        localStorage.setItem("admin", JSON.stringify(data.data))
                        setToggle(data)
                        toast.success('Successfully AdminLogin', {
                            position: "top-right",
                            autoClose: 500,
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

    useEffect(() => {
        if (adminInfo) {
            setTimeout(() => {


                navigate("/adminpanel")
            }, 1500)
        }

    }, [toggle])
    return (
        <>
            <div className={style.maincontainer}>
                <div className={style.miniContainer}>
                    <div className={style.heading}>

                        <h1>Login</h1>
                    </div>
                    <br />
                    <div className={style.todocontainer}>
                        {/* <Grid> */}


                        <br />
                        <Grid >
                            {/* <TextField id="outlined-basic" value={email} onChange={(e) => setemail(e.target.value)} label="Enter Email" variant="outlined" fullWidth /> */}
                            <Form.Control className={style.input}   type="email"  value={email} onChange={(e) => setemail(e.target.value)}  placeholder="Enter Email" />


                        </Grid>
                        <br />


                        <Grid >
                            {/* <TextField id="outlined-basic" type="password"  value={password} onChange={(e) => setpassword(e.target.value)} label="Enter Password" variant="outlined" fullWidth /> */}
                            <Form.Control className={style.input}   type="password"  value={password} onChange={(e) => setpassword(e.target.value)}  placeholder="Enter Password" />


                        </Grid>
                        <br />

                        <Grid>
                            <Button  className={style.btnccolor} style={{ width: "100%" }} onClick={login} variant="contained">{loader?"Loading...":"Login"}</Button>
                        </Grid>



                        <br />

                        <Grid>
                            <Link to="/adminSignup"> <p className={style.smalltex} >Don't have an account?  <span> Sign up</span></p></Link>
                        </Grid>




                        {/* </Grid> */}





                    </div>
                    <br />
                    <br />



                </div>
            </div>
        </>
    )
}

export default AdminLogin
