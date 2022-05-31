const bcrypt = require("bcrypt")
const AdminModal = require("../../modal/adminschema")

const adminlogin = async (req, res) => {
    const { email, password } = req.body
    // console.log(email,password);
    if (!email || !password) {
        res.json({ massage: "required field are empty" })
    }
    else {
        try {
            const user = await AdminModal.findOne({ email })
            
            if(user){

                const comparePass = await bcrypt.compare(password , user.password) 
                if(comparePass){
                    res.json({ data: user})
                }
                else{
                    res.json({"massage" : "invalid Password"})


                }
            }
            else{

                res.json({"massage" : "invalid User"})

            }



        }
        catch (err) {
            res.json({ "err ": err })

        }
    }



}
module.exports = adminlogin