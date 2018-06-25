const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormSchema = new Schema({
    date: {
        type: Date
    },
    sampleId: {
        type: String,
        unique: true
    },
    gestationWeeks: {
        type: Number
    },
    placentaWeight: {
        type: Number
    },
    membranesMIR: {
        type: String
    },
    umbilicalCordFIR: {
        type: String
    },
    chorionicPlateMIR: {
        type: String
    },
    chorionicPlateFIR: {
        type: String
    },
}, {
    timestamps: true
})

const Form = mongoose.model("Form", FormSchema);
module.exports = Form;

