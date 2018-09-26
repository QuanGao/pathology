const countFibrin = function (data) {
  return +data.umbVesselIntramuFibrin.slice(-1)+ 
  +data.chorionVesselIntramuFibrin.slice(-1)+ 
  +data.stemVesselIntramuFibrin.slice(-1);
};

const countThrombus = function (data) {
  return +data.umbVesselIntralumThrombus.slice(-1)+ 
  +data.chorionVesselIntralumThrombus.slice(-1)+
  +data.stemVesselIntralumThrombus.slice(-1);
};

const isAvscularVilli = function (data) {
  return data.avascularVilliNumFoci !== "None"
}
const isAvascularVilliMoreThan45 = function (data) {
  return data.avascularVilliTotalNum[0] === ">";
};  

const isCordPlateHighGrade = function (data) {
  return +data.umbVesselIntramuFibrin.slice(-1) + +data.chorionVesselIntramuFibrin.slice(-1) > 2 || 
    +data.umbVesselIntralumThrombus.slice(-1) + +data.chorionVesselIntralumThrombus.slice(-1) > 0;
};
// const isPlateHighGrade = function (data) {
//   return +data.chorionVesselIntramuFibrin > 2 || +data.chorionVesselIntralumThrombus > 0;
// }
const isDiscHighGrade = function (data) {
  return +data.stemVesselIntramuFibrin.slice(-1) >3 && +data.stemVesselIntralumThrombus.slice(-1) > 0;
}

const isFetalVasMalperfusion = function (data) {
  return countFibrin(data) > 0 | countThrombus(data) > 0 | isAvscularVilli(data)
};

const determineGrade = function (data){
  return isCordPlateHighGrade(data) | isDiscHighGrade(data) ? "high":"low"
};

module.exports = {isFetalVasMalperfusion, determineGrade}