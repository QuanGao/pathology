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
    
function isNormal (data) {
    
}
module.exports = {
    isChronicVillitis,
    isSingle,
    isLowOrHigh,
    findPattern
}