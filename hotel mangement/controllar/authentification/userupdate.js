const SignupModal = require("../../modal/signupSchma")

const userupdate = (req, res)=>{
    const {id} = req.params     

    SignupModal.updateOne({id} , req.body,(error , data)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send(data)
        }

    })

}


module.exports = userupdate