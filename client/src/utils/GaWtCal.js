const age = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]
const low = [107, 127, 128, 128, 138, 130, 140, 161, 208, 175, 241, 252, 283, 291, 320, 349, 365, 379, 380, 403, 412]
const high = [285, 262, 252, 299, 281, 332, 321, 352, 433, 417, 436, 446, 479, 544, 580, 607, 629, 635, 643, 655, 658]


function judge (weeks, wgt) {
    const placentaAgeIndex = age.indexOf(weeks)
    return wgt < low[placentaAgeIndex] ? "small" : (
        wgt > high[placentaAgeIndex] ? "large" : "normal"
    )
}

function lowWgt (weeks, wgt) {
    const placentaAgeIndex = age.indexOf(weeks)
    return low[placentaAgeIndex] 
}

function highWgt (weeks, wgt) {
    const placentaAgeIndex = age.indexOf(weeks)
    return high[placentaAgeIndex] 
}

module.exports = {judge, lowWgt, highWgt}