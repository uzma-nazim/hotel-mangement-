const express = require("express")
const admindataget = require("../controllar/admin/admingetdata")
const adminsignupauth = require("../controllar/admin/adminsign")
const adminupdate = require("../controllar/admin/adminupdate")

const booking = require("../controllar/authentification/booking")
const DeleteOneBooking = require("../controllar/authentification/bookingdelete")
const getBooking = require("../controllar/authentification/bookingdetails")
const adminlogin = require("../controllar/authentification/login")

const login = require("../controllar/authentification/login")
const signup = require("../controllar/authentification/signup")
const signupdataget = require("../controllar/authentification/signupgetdata")
const userupdate = require("../controllar/authentification/userupdate")



const routes  = express.Router() 





//authentifiaction
routes.post("/api/signup" ,signup )
routes.post("/api/login" ,login )


//Booking 
routes.post("/api/booking" ,booking )
routes.get("/api/getbooking" ,getBooking )
routes.delete("/api/deletebooking:id" ,DeleteOneBooking )


//get data for user profile

routes.post("/api/signupget" ,signupdataget )

// update data 

routes.patch("/api/userupdate:id" ,userupdate )


// Admin
routes.post("/api/admin/signup" ,adminsignupauth )
routes.post("/api/admin/login" ,adminlogin )
routes.post("/api/admin/admindataget" ,admindataget )
routes.patch("/api/admin/adminupdate:id" ,adminupdate )


module.exports  = routes