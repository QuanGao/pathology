const toNum = function(data) {
  if(!data) return 0;
  return data.toString().includes(">")? 4:+data.toString().match(/\d/)
}
const sumTheCounts = function(arr) {
  return arr.reduce((a,b)=>toNum(a) + toNum(b))
}

const countFibrin = function (data) {
  return sumTheCounts([data.umbVesselIntramuFibrin, data.chorionVesselIntramuFibrin, data.stemVesselIntramuFibrin])
};

const countThrombus = function (data) {
  return sumTheCounts([data.umbVesselIntralumThrombus, data.chorionVesselIntralumThrombus, data.stemVesselIntralumThrombus])
};

const isAvascularVilli = function (data) {
  return data.avascularVilliNumFoci !== "none"
}
const isAvascularVilliMoreThan45 = function (data) {
  return data.avascularVilliTotalNum? data.avascularVilliTotalNum[0] === ">":false;
};  

const isCordPlateHighGrade = function (data) {
  return sumTheCounts([data.umbVesselIntramuFibrin, data.chorionVesselIntramuFibrin]) >2 || 
    sumTheCounts([data.umbVesselIntralumThrombus, data.chorionVesselIntralumThrombus]) >0
};

const isDiscHighGrade = function (data) {
  return toNum(data.stemVesselIntramuFibrin) >3 && toNum(data.stemVesselIntralumThrombus) > 0;
}

const isFetalVasMalperfusion = function (data) {
  return countFibrin(data) > 0 || countThrombus(data) > 0 || isAvascularVilli(data)
};

const determineGrade = function (data){
  return isCordPlateHighGrade(data) || isDiscHighGrade(data) || isAvascularVilliMoreThan45(data) ? "high":"low"
};

const withObstruction = function (data){
  return data > 0 ? "[with obstruction]":""
}
const summerizeThrombus = function (data){
  if(countThrombus(data)===0) return;
  const umb = toNum(data.umbVesselIntralumThrombus) > 0? 
    `, ${data.umbVesselIntralumThrombus} umbilical vessels ${withObstruction(data.umbVesselIntralumThrombusObs)}`:""
  
  const chorion = toNum(data.chorionVesselIntralumThrombus) > 0? 
    `, ${data.chorionVesselIntralumThrombus} chorionic plate vessels ${withObstruction(data.chorionVesselIntralumThrombusObs)}`:""
  
  const stem = toNum(data.stemVesselIntralumThrombus) > 0? 
    `, ${data.stemVesselIntralumThrombus} stem villous vessels ${withObstruction(data.stemVesselIntralumThrombusObs)}`:""

  return `Intraluminal thrombus ${umb} ${chorion} ${stem}`
}

const summerizeFibrin = function (data){
  if(countFibrin(data)===0) return;
  const umb = toNum(data.umbVesselIntramuFibrin) > 0? 
    `, ${data.umbVesselIntramuFibrin} umbilical vessels`:""
  
  const chorion = toNum(data.chorionVesselIntramuFibrin) > 0? 
    `, ${data.chorionVesselIntramuFibrin} chorionic plate vessels`:""
  
  const stem = toNum(data.stemVesselIntramuFibrin) > 0? 
    `, ${data.stemVesselIntramuFibrin} stem villous vessels`:""

  return `Intramural fibrin depositions ${umb} ${chorion} ${stem}`
}

const summerizeKaryorrhexis = function (data){
  if (data.vilStromVasKaryorrhexisFoci === "none") return;
  return `Villous stromal vascular karyorrhexis ${data.vilStromVasKaryorrhexisFoci} 
  foci up to ${data.vilStromVasKaryorrhexisLargestfocus} villi`

}

const summerizeAvascularVilli = function (data){
  if (data.avascularVilliNumFoci === "none") return;
  return `Avascular villi, ${data.avascularVilliNumFoci} 
  foci up to ${data.avascularVilliLargestfocus} villi [${data.avascularVilliTotalNum} villi in total]`

}
module.exports = {
  isFetalVasMalperfusion, 
  determineGrade, 
  summerizeThrombus, 
  summerizeFibrin, 
  summerizeKaryorrhexis,
  summerizeAvascularVilli
}