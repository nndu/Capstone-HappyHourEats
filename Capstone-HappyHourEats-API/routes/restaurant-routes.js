const router = require("express").Router();
const controller = require("../controllers/restaurant-controller");

router.route("/")
  .get(controller.index);

module.exports = router;