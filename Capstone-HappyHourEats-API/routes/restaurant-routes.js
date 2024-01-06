const router = require("express").Router();
const controller = require("../controllers/restaurant-controller");

router.route("/")
  .get(controller.index);

router.route("/:id")
  .get(controller.getMenus);

module.exports = router;