
function getStageForEachInput (input) {
    return +input.split(" ")[0]
}

function getIRstage (arr) {
    const stages = arr.map(input=>getStageForEachInput(input))
    console.log(stages)
    return Math.max(...stages)
}

function getMIRinfo (str, region) {
    return str === "0"? "":`${region} with ${str.replace(/^[0-9] /,"")}`
}


module.exports = {getIRstage, getMIRinfo}