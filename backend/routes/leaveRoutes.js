const router = require("express").Router()
const auth = require("../middleware/authMiddleware")
const role = require("../middleware/roleMiddleware")
const leave = require("../controllers/leaveController")

router.post("/apply", auth, role("employee"), leave.applyLeave)
router.get("/my", auth, role("employee"), leave.myLeaves)

router.get("/all", auth, role("employer"), leave.allLeaves)
router.put("/update/:id", auth, role("employer"), leave.updateLeave)

module.exports = router