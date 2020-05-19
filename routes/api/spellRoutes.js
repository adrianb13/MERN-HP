const router = require("express").Router();
const spellController = require("../../controllers/spellController");

router
  .route("/")
  .get(spellController.findAll)
  .post(spellController.create);

router
  .route("/:id")
  .put(spellController.update)
  .delete(spellController.remove);

module.exports = router;