const router = require("express").Router();
const characterController = require("../../controllers/characterController");

router
  .route("/")
  .get(characterController.findAll)
  .post(characterController.create);

router
  .route("/:id")
  .put(characterController.update)
  .delete(characterController.remove);

module.exports = router;