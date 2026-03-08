const Leave = require("../models/Leave")

exports.applyLeave = async(req,res)=>{
    try{

        const leave = await Leave.create({
            employee:req.user.id,
            leaveType:req.body.leaveType,
            startDate:req.body.startDate,
            endDate:req.body.endDate,
            reason:req.body.reason
        })

        res.json(leave)

    }catch(err){
        res.status(500).json(err)
    }
}

exports.myLeaves = async(req,res)=>{
    const leaves = await Leave.find({employee:req.user.id})
    res.json(leaves)
}

exports.allLeaves = async(req,res)=>{
    const leaves = await Leave.find().populate("employee","name email")
    res.json(leaves)
}

exports.updateLeave = async(req,res)=>{

    const {status} = req.body

    const leave = await Leave.findByIdAndUpdate(
        req.params.id,
        {status},
        {returnDocument:"after" }
    )

    res.json(leave)
}