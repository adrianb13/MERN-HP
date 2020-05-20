const router = require("express").Router();
const characterRoutes = require("./characterRoutes");
const spellRoutes = require("./spellRoutes");

//Routes
router.use("/characters", characterRoutes);
router.use("/spells", spellRoutes);

module.exports = router;