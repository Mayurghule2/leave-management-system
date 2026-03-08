const mongoose = require("mongoose")

const leaveSchema = new mongoose.Schema({
    employee:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    leaveType:String,
    startDate:Date,
    endDate:Date,
    reason:String,
    status:{
        type:String,
        enum:["Pending","Approved","Rejected"],
        default:"Pending"
    }
},{timestamps:true})

module.exports = mongoose.model("Leave", leaveSchema)