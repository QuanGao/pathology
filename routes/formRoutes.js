const router = require("express").Router();
const formController = require("../controllers/formController")

router.get("/list", formController.getSampleList);
router.get("/:sampleId", formController.findSampleById);
router.post("/", formController.addSample);
router.get("/", formController.findAllSamples);

module.exports = router;