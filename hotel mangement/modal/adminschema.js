const mongoos = require("mongoose")

const adminScemea =  mongoos.Schema({

    admin_name:{type : String},
    email:{type : String},
    cnic:{type : String , maxlength :4},
    number:{type : String},
    dateOfBirth:{type:String},
    password:{type:String}
})
const AdminModal = mongoos.model("admin" , adminScemea)

module.exports =AdminModal 