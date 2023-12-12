const express = require("express");
const { addTransaction, getAllTransaction, editTransaction,deleteTransaction } = require("../controllers/transactionCtrl");


//router object
const router = express.Router();

//routes
//add transaction POST Method
router.post('/add-transaction', addTransaction)

//get transactions
router.post('/get-transaction',getAllTransaction)

//Edit transactions
router.post('/edit-transaction', editTransaction)

//Delete transactions
router.post('/delete-transaction', deleteTransaction)

module.exports = router;