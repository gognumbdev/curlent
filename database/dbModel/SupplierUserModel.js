const mongoose = require("mongoose")

const AssetSchema = new mongoose.Schema({
    name:String,
    code:String,
    deposits:Number,
    interest:Number,
    balance:Number
})


//P2P exchange edition
const SupplierUserSchema = new mongoose.Schema({
    publicAddress:String,
    username:String,
})

let SupplierUserModel =  (mongoose.models && mongoose.models.SupplierUser
    ? mongoose.models.SupplierUser
    : mongoose.model('SupplierUser', SupplierUserSchema))

module.exports = {SupplierUserModel}