const mongoose = require("mongoose")

//P2P exchange edition
const BusinessUserSchema = new mongoose.Schema({
    uid:String,
    firstName: String,
    lastName:String,
    businessName:String,
    email:String,
    password:String,
    receiveEmail:Boolean
})

let BusinessUserModel =  (mongoose.models && mongoose.models.BusinessUser
    ? mongoose.models.BusinessUser
    : mongoose.model('BusinessUser', BusinessUserSchema))

module.exports = {BusinessUserModel}