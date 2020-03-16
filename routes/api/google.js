const router = require("express").Router();
const googleController = require("../../controllers/googleContoller");

// '/api/google'

router.route("/")
    .get(googleController.findAll)

module.exports = router