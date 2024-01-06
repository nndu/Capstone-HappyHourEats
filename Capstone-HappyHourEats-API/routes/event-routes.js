const router = require("express").Router();
const controller = require("../controllers/event-controller");

router.route("/")
  .get(controller.index);

module.exports = router;