const router = require("express").Router();
const formController = require("../controllers/formController");

router.get("/sample/:sampleId", formController.findSampleBySampleId);
router.get("/list", formController.getSampleList);
router.get("/:id", formController.findSampleById);
router.post("/", formController.addSample);
router.get("/", formController.findAllSamples);

module.exports = router;