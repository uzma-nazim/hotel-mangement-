
const BookingModal = require("../../modal/bookingmodal");

const booking = async (req, res)=>{
const {hotel_name , cnic, endate , number ,noOfper ,startdate ,NoOfroom} = req.body
if(!hotel_name  || !cnic || !endate  || !number || !noOfper || !startdate  || !NoOfroom){
    res.send("required field are empty")

}
else{
    
    BookingModal.create( req.body, (error, userData)=>{
        if(error){
            res.json( {error})
        }

        else{
            console.log(userData);
            res.json({massage:"Your booking have been registered"  ,data:userData})
        }

    
    })

    // BookingModal.findOne({cnic} ,(err, userexist)=>{
    // console.log(req.body);
    //     if(err){
    //         res.json( {err})
            
    //     }
    //     if(userexist){
    //         res.json( {massage:"hotel have already book"})

    //     }
    //     else{
            
    //         BookingModal.create(  (error, userData)=>{
    //                     if(error){
    //                         res.json( {error})
    //                     }
                
    //                     else{
    //                         res.json({massage:"Your booking have been registered" })
    //                     }
                
                    
    //                 })
            
    //     }


}




}


module.exports = booking