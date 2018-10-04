const convertToNumber = function(data) {
  if(!data) return 0;
  return data.toString().includes(">")? 4:+data.toString().match(/\d/)
}
const sumTheCounts = function(arr) {
  return arr.reduce((a,b)=>convertToNumber(a) + convertToNumber(b))
}

const countFibrin = function (data) {
  return sumTheCounts([data.umbVesselIntramuFibrin, data.chorionVesselIntramuFibrin, data.stemVesselIntramuFibrin])
};

const countThrombus = function (data) {
  return sumTheCounts([data.umbVesselIntralumThrombus, data.chorionVesselIntralumThrombus, data.stemVesselIntralumThrombus])
};

const isAvascularVilli = function (data) {
  return data.avascularVilliNumFoci !== "None"
}
const isAvascularVilliMoreThan45 = function (data) {
  return data.avascularVilliTotalNum? data.avascularVilliTotalNum[0] === ">":false;
};  

const isCordPlateHighGrade = function (data) {
  return sumTheCounts([data.umbVesselIntramuFibrin, data.chorionVesselIntramuFibrin]) >2 || 
    sumTheCounts([data.umbVesselIntralumThrombus, data.chorionVesselIntralumThrombus]) >0
};

const isDiscHighGrade = function (data) {
  return convertToNumber(data.stemVesselIntramuFibrin) >3 && convertToNumber(data.stemVesselIntralumThrombus) > 0;
}

const isFetalVasMalperfusion = function (data) {
  return countFibrin(data) > 0 || countThrombus(data) > 0 || isAvascularVilli(data)
};

const determineGrade = function (data){
  return isCordPlateHighGrade(data) || isDiscHighGrade(data) || isAvascularVilliMoreThan45(data) ? "high":"low"
};

module.exports = {isFetalVasMalperfusion, determineGrade}