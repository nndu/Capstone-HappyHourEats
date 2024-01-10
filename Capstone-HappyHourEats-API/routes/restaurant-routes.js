const router = require("express").Router();
const controller = require("../controllers/restaurant-controller");

router.route("/")
  .get(controller.index);

router.route("/:id")
  .get(controller.getMenus);

router.route("/:id/comments")
  .get(controller.getComments);

router.route("/:id/comments")
  .post(controller.postComment);

module.exports = router;