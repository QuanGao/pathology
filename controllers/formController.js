const db = require("../models")
module.exports = {
    findById: (req, res) => {
        db.Form.findOne({
            sampleId: req.params.sampleId
        })
        .then(dbForm => res.json(dbForm))
        .catch(err => res.json(err))
    },

    add: (req, res) => {
        db.Form.create(req.body)
        .then(dbForm => res.json(dbForm))
        .catch(err => res.json(err))
    }
}