const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormSchema = new Schema({
  date: {
    type: Date
  },
  sampleId: {
    type: String,
    unique: true,
    index: true,
    trim: true,
    uppercase: true
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
  villitisMembranesCC: {
    type: Number
  },
  villitisMembranesCDwPC: {
    type: Number
  },
  villitisChorionicPlateCC: {
    type: Number
  },
  villitisChorionicPlateETV: {
    type: Number
  },
  villousDiscCV: {
    type: Number
  },
  villitisLargestFocus: {
    type: String
  },
  villitisNumOfFoci: {
    type: String
  },
  villitisLocation: {
    type: Array
  },
  villitisAAV: {
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
    type: Number
  },
  hypercoiledUmbCord:{
    type: Number
  },
  umbVesselIntramuFibrin:{
    type: String
  },
  umbVesselIntralumThrombus:{
    type: String
  },
  umbVesselIntralumThrombusObs:{
    type: Number
  },

  chorionVesselIntramuFibrin: {
    type: String
  },
  chorionVesselIntralumThrombus:{
    type: String
  },
  chorionVesselIntralumThrombusObs:{
    type: Number
  },
  chorionVascularEctasia:{
    type: Number
  },
  stemVesselIntramuFibrin:{
    type: String
  },
  stemVesselIntralumThrombus:{
    type: String
  },
  stemVesselIntralumThrombusObs:{
    type: Number
  },
  stemVillousVesselObliteration:{
    type: Number
  }
}, {
    timestamps: true
})

const Form = mongoose.model("Form", FormSchema);
module.exports = Form;

