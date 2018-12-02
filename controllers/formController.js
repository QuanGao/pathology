const db = require("../models")
module.exports = {
    findSampleById: (req, res) => {
        const sampleId = req.params.sampleId.toUpperCase()
        db.Form.findOne({
            sampleId: sampleId
        })
        .then(dbForm => res.json(dbForm))
        .catch(err => res.json(err))
    },

    addSample: (req, res) => {
        db.Form.create(req.body)
        .then(dbForm => res.json(dbForm))
        .catch(err => res.json(err))
    },

    findAllSamples: (req, res) => {
        db.Form.find({})
        .then(dbForms => res.json(dbForms))
        .catch(err => res.json(err))
    },

    getSampleList: (req, res) => {
        db.Form.find({}, { sampleId: 1, createdAt: 1, _id: 0})
        .then(dbForms => res.json(dbForms))
        .catch(err => res.json(err))
    } 
}