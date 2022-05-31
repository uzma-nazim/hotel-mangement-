
const BookingModal = require("../../modal/bookingmodal")



const getBooking = (req, res) => {


    BookingModal.find( {} ,(error, data) => {
        if (error) {
            res.send(error)
        }
        
        else{
            console.log(data)
            res.send(data)

            
        }
    })


}

module.exports = getBooking