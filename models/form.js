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
    villitisMembranesCMC: {
        type: Number
    },
    villitisChorionicPlateCC: {
        type: Number
    },
    villitisChorionicPlateETV: {
        type: Number
    },
    villousDiscCV: {
        type:  Number
    },
    villitisLargestFocus: {
        type: Number
    },
    villitisNumOfFoci: {
        type: String
    },
    villitisLocation: {
        type: Array
    },
    villitisAVA: {
        type: Number
    },
    villitisASVOC: {
        type: Number
    },
    villitisVI: {
        type: Number
    },
    villitisCMV_I: {
        type: String
    },
    villitisT_I: {
        type: String
    },
    deciduaCDwPC: {
        type:  Number
    }

}, {
    timestamps: true
})

const Form = mongoose.model("Form", FormSchema);
module.exports = Form;

