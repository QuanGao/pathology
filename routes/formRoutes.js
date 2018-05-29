const router = require("express").Router();
const formController = require("../controllers/formController")

router.get("/:sampleId", formController.findById)
router.post("/", formController.add)
router.get("/", formController.findall)

module.exports = router;