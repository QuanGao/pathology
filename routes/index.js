const router = require("express").Router();
const formRouter = require("./formRoutes");

router.use("/form", formRouter);

module.exports = router;