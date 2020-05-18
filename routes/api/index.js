const router = require("express").Router();
const characterRoutes = require("./characterRoutes");
const spellRoutes = require("./spellRoutes");

//Routes
router.use("/character", characterRoutes);
router.use("/spell", spellRoutes);

module.exports = router;