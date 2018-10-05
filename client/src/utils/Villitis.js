function isChronicVillitis (data) {
    return data.villousDiscCV !== 0
}

function isSingle (data) {
    return data.villitisNumOfFoci === "single"
}

function isLowOrHigh (data) {
    const numOfVilli = +data.villitisLargestFocus.split("-")[1]
    return numOfVilli < 10 ? "low":"high"
}

function findPattern (data) {
    const isLow = isLowOrHigh (data) === "low"
    if(data.villitisNumOfFoci === "few"){
        return isLow? "focal":"patchy"
    }else if (data.villitisNumOfFoci === "many"){
        return isLow? "multifocal":"patchy"
    }else if (data.villitisNumOfFoci === "diffuse"){
        return isLow? "multifocal":"diffuse"
    }             
}
   
function isAbnormal (data) {
    console.log("data.villitisAAV"+data.villitisAAV)
    return data.villitisMembranesCC === 1 ||
    data.villitisMembranesCDwPC === 1 ||
    data.villitisChorionicPlateCC === 1 || 
    data.villitisChorionicPlateETV === 1||
    data.villitisCMV_I === "positive" ||
    data.villitisT_I === "positive" ||
    data.villitisASVOC === 1 ||
    data.villitisAAV === 1 ||
    data.villitisVI  === 1 ||
    data.deciduaCDwPC === 1
}
module.exports = {
    isChronicVillitis,
    isSingle,
    isLowOrHigh,
    findPattern,
    isAbnormal
}