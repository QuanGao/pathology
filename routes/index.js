const router = require("express").Router();
const formRouter = require("./formRoutes");

router.use("/api/form", formRouter);

module.exports = router;