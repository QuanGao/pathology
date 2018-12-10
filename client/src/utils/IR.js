
import React from 'react';
function getStageForEachInput (input) {
    return (input && input[0] && +input[0]) || 0
}

function getMaxIRstage (arr) {
    const stages = arr.map(input=>getStageForEachInput(input))
    return Math.max(...stages)
}

function getMIRstage (data) {
    const stage = getMaxIRstage([data.membranes.maternal_immune_response, data.chorionic_plate.maternal_immune_response])
    return stage >0? <span>Maternal immune response, stage ${stage};  </span> : "";
}

function getFIRstage (data) {
    const stage = getMaxIRstage([data.umbilical_cord.fetal_immune_response, data.chorionic_plate.fetal_immune_response])
    return stage >0? <span>Fetal immune response, stage ${stage};  </span> : ""
}

function getIRdetails (param, name) {
    const stage = getStageForEachInput(param);
    const detail = param.replace(/(^[0-9] - )/, "");
    if(name){
        return stage >0 ? <span>${name} with acute ${detail}; </span> : "";
    } else {
        return stage >0 ? <span>Acute ${detail}; </span> : "";
    };
};

function checkIRpresence (data) {
    const IRstage = getMaxIRstage([
        data.membranes.maternal_immune_response,
        data.umbilical_cord.fetal_immune_response,
        data.chorionic_plate.maternal_immune_response,
        data.chorionic_plate.fetal_immune_response
    ])
    return IRstage > 0
}
export default {
    checkIRpresence, 
    getMIRstage,
    getFIRstage,
    getIRdetails
}