const router = require("express").Router();
const characterController;
const spellController;

router
  .route("/characters");

router
  .route("/spells");

module.exports = router;