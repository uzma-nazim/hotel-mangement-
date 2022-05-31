const BookingModal = require("../../modal/bookingmodal");

const DeleteOneBooking = (req,res)=>{
    const {id} = req.params     
    console.log(id);
    BookingModal.deleteOne({id},(error , data)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send(data)
        }

    })


}

module.exports =DeleteOneBooking