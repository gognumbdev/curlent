const mongoose = require("mongoose")

const TransactionSchema = new mongoose.Schema({
    transactionNumber:Number,
    asset:String,
    transaction:String,
    amount:Number,
    date:String,
})

const SupplierTransactionSchema = new mongoose.Schema({
    publicAddress:String,
    transactionsHistory:[TransactionSchema],
})

let SupplierTransactionModel =  (mongoose.models && mongoose.models.SupplierTransaction
    ? mongoose.models.SupplierTransaction
    : mongoose.model('SupplierTransaction', SupplierTransactionSchema))

module.exports = {SupplierTransactionModel}
