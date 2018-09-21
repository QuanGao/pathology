function isChronicVillitis (data) {
    return data.villousDiscCV !== 0
}

function isSingle (data) {
    return data.villitisNumOfFoci === "Single"
}

function isLowOrHigh (data) {
    const numOfVilli = +data.villitisLargestFocus.split("-")[1]
    return numOfVilli < 10 ? "low":"high"
}

function findPattern (data) {
    const isLow = isLowOrHigh (data) === "low"
    if(data.villitisNumOfFoci === "Few"){
        return isLow? "focal":"patchy"
    }else if (data.villitisNumOfFoci === "Many"){
        return isLow? "multifocal":"patchy"
    }else if (data.villitisNumOfFoci === "Diffuse"){
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