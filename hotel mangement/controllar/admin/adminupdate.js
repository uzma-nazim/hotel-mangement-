const AdminModal = require("../../modal/adminschema")

const adminupdate = (req, res)=>{
    const {id} = req.params     

    AdminModal.updateOne({id} , req.body,(error , data)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send(data)
        }

    })

}


module.exports = adminupdate