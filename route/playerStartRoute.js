 const router = require("express").Router();

const {createstart, update}  = require("../controller/playerStartController")

router.post("/start/:playerId", createstart)

router.put("/update/:id", update)
module.exports = router