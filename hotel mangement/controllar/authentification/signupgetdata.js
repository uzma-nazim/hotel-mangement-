
const SignupModal = require("../../modal/signupSchma")

const signupdataget = async (req, res) => {
    const { email ,_id} = req.body
    console.log(email);

    try {
        const user = await SignupModal.findOne({ _id })

        if (user) {

            res.send(user)
        }
        else {

            res.json({ "massage": "invalid User" })

        }



    }
    catch (err) {
        res.json({ "err ": err })

    }




}
module.exports = signupdataget