const mongoose = require("mongoose")

const AssetBalanceSchema = new mongoose.Schema({
    asset:String,
    apy:Number,
    deposits:Number,
    interest:Number
})

const AccountBalanceSchema = new mongoose.Schema({
    publicAddress:String,
    assetsBalance:[AssetBalanceSchema],
})

let AccountBalanceModel =  (mongoose.models && mongoose.models.AccountBalance
    ? mongoose.models.AccountBalance
    : mongoose.model('AccountBalance', AccountBalanceSchema))

module.exports = {AccountBalanceModel}
