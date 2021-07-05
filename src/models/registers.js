const mongoose = require("mongoose");

const car = new mongoose.Schema({
    carname:{
    type:String,
    required:true
    },

    price:{
        type:Number,
        required:true
        },
    kilometers:{
        type:String,
        required:true
        },
    yearofpurchase:{
        type:String,
        required:true
        },
    owner:{
        type:String,
        required:true
        },
    fuel:{
        type:String,
        required:true
        },
    transmission:{
        type:String,
        required:true
        },
    rto:{
        type:String,
        required:true
        },
    insurance:{
        type:String,
        required:true
        },
    condtion:{
        type:String,
        required:true
        },
        avatar :{
            type : String,
            required:true

        }
})

// collection

const Register = new mongoose.model("Register",car);

module.exports = Register;
