
const bcrypt = require("bcryptjs/dist/bcrypt");
const AdminModal = require("../../modal/adminschema");

const adminsignupauth = async (req, res)=>{


const {admin_name , email, cnic , number , dateOfBirth  ,password} = req.body
console.log(req.body);


if(!admin_name  || !email || !cnic  || !number || !dateOfBirth  || !password){
    res.send("required field are empty")

}
else{
    const hashpass = await bcrypt.hash(password , 10)
    
    const userObj ={
        ...req.body,
        password:hashpass
    }

    AdminModal.findOne({email} ,(err, userexist)=>{
        if(err){
            res.json( {err})
            
        }
        if(userexist){
            res.json( {massage:"Email already exist"})

        }
        else{
            
            AdminModal.create( userObj , (error, userData)=>{
                        if(error){
                            res.json( {error})
                        }
                
                        else{
                            res.json({massage:"Successfully Signup" ,data: userData})
                        }
                
                    
                    })
            
        }
    })


}




}


module.exports = adminsignupauth