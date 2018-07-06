
function getStageForEachInput (input) {
    return +input.split(" ")[0]
}

function getDetailForEachInput (input) {
    return input.replace(/^[0-9] /,"")
}

function getMaxIRstage (arr) {
    const stages = arr.map(input=>getStageForEachInput(input))
    console.log(stages)
    return Math.max(...stages)
}

function getMIRstage (data) {
    const stage = getMaxIRstage([data.membranesMIR, data.chorionicPlateMIR])
    return stage >0? `Maternal immune response, stage ${stage}`:""
}

function getIRdetails (param, name) {
    const stage = getStageForEachInput(param)
    const detail = param.replace(/^[0-9] /,"")
    return stage >0 ? `${name} with acute ${detail}` :""
}

function getIRdetailsWOnames (param) {
    const stage = getStageForEachInput(param)
    const detail = param.replace(/^[0-9] /,"")
    return stage >0 ? `Acute ${detail}`:""
}

function getFIRstage (data) {
    const stage = getMaxIRstage([data.umbilicalCordFIR, data.chorionicPlateFIR])
    return stage >0? `Fetal immune response, stage ${stage}`:""
}

function checkIRpresence (data) {
    const IRstage = getMaxIRstage([data.membranesMIR,
        data.chorionicPlateMIR,
        data.umbilicalCordFIR,
        data.chorionicPlateFIR])
    return IRstage > 0 ?"Acute inflammatory pathology":""
}


module.exports = {checkIRpresence, getMIRstage,getFIRstage,getIRdetails,getIRdetailsWOnames}