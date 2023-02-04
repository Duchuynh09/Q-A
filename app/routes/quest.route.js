const express = require("express")
const quest = require("../controller/quest.Controller")

const router = express.Router()

router.route("/")
    .get(quest.findALl)
    .post(quest.create)
    .delete(quest.delete)

module.exports = router;