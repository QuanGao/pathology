function getMIRstage (mems, cp) {
    const memsStage = mems === "None"? 0:mems.split(" ")[1]
    const cpStage = cp === "None"? 0:cp.split(" ")[1]
    const stage = Math.max(memsStage, cpStage)
    return stage === 0? "":`Maternal immune response stage ${stage}`
}

function getMIRinfo (str, region) {
    return str === "None"? "":`${region} with ${str.replace(/^Stage [0-9] /,"")}`
}


module.exports = {getMIRstage, getMIRinfo}