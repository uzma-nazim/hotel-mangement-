
const AdminModal = require("../../modal/adminschema");

const admindataget = async (req, res) => {
    const { _id} = req.body
    

    try {
        const user = await AdminModal.findOne({ _id })

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
module.exports = admindataget