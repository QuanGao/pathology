const age = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]
const low = [107, 127, 128, 128, 138, 130, 140, 161, 208, 175, 241, 252, 283, 291, 320, 349, 365, 379, 380, 403, 412]
const high = [285, 262, 252, 299, 281, 332, 321, 352, 433, 417, 436, 446, 479, 544, 580, 607, 629, 635, 643, 655, 658]


function judgeWgt (data) {
    const lowBound = getLowBound(data.gestation_weeks);
    const highBound = getHighBound(data.gestation_weeks);
    if(lowBound && highBound){
        if(+data.placenta_weight < lowBound){
            return "Small for gestational age";
        } else if (+data.placenta_weight > highBound){
            return "Large for gestational age";
        };
    };
    return ""
};

function expectWgt (data) {
    const lowBound = getLowBound(data.gestation_weeks);
    const highBound = getHighBound(data.gestation_weeks);
    return lowBound && highBound ? `(expect ${lowBound} to ${highBound} grams)` : "(in valid gestation weeks and/or placenta weight input)"
}

function getLowBound (weeks) {
    const placentaAgeIndex = age.indexOf(Math.floor(+weeks))
    return placentaAgeIndex === -1 ? undefined: low[placentaAgeIndex] 
}

function getHighBound (weeks) {
    const placentaAgeIndex = age.indexOf(Math.floor(+weeks));
    return placentaAgeIndex === -1 ? undefined: high[placentaAgeIndex] 
}

module.exports = {judgeWgt, expectWgt}