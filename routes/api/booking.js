const router = require("express").Router();
const bookingController = require("../../controllers/bookingController");

router.route("/").get(bookingController.findAll).post(bookingController.create);

router
  .route("/:id")
  .get(bookingController.findOne)
  .delete(bookingController.delete);

module.exports = router;
