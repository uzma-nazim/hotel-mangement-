const mongoos = require("mongoose")

const BookingScemea =  mongoos.Schema({

    hotel_name:{type : String},
    cnic:{type : String ,maxlength :4},
    startdate:{type : String , },
    number:{type : String},
    noOfper:{type : String},
    endate:{type : String},
    NoOfroom:{type : String},

})
const BookingModal = mongoos.model("bookinguser" , BookingScemea)

module.exports =BookingModal 