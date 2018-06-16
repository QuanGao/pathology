// module.exports = function (membranesMIR, chorionicPlateMIR) {

//     const membranesArr = membranesMIR.split(" ")
//     const chorionicPlateArr = chorionicPlateMIR.split(" ")
    
//     if(membranesMIR === "None" && chorionicPlateMIR === "None") {
//         return ""
//     } else if(membranesMIR === "None"){
//         return `Maternal immune response stage ${chorionicPlateArr[1]}
//                 Chorionic plate with with ${chorionicPlateArr[2]}`  
//     } else if(chorionicPlateMIR === "None"){
//         return `Maternal immune response stage ${membranesArr[1]}
//                 Membranes with ${membranesArr[2]}`  
//     } else {
//         const stage = Math.max(+membranesArr[1], +chorionicPlateArr[1])
//         return `Maternal immune response stage ${stage}
//                 <p>Membranes with ${membranesArr[2]}</p>
//                 Chorionic plate with with ${chorionicPlateArr[2]}` 

//     }

// }
function getMIRstage (mems, cp) {
    const memsStage = mems === "None"? 0:mems.split(" ")[1]
    const cpStage = cp === "None"? 0:cp.split(" ")[1]
    const stage = Math.max(memsStage, cpStage)
    return stage === 0? "":`Maternal immune response stage ${stage}`
}

function memsMIR (mems, cp) {
    const memsStage = mems === "None"? 0:mems.split(" ")[1]
    const cpStage = cp === "None"? 0:cp.split(" ")[1]
    const stage = Math.max(memsStage, cpStage)
    return stage === 0? "":`Maternal immune response stage ${stage}`
}

function cpMIR (mems, cp) {
    const memsStage = mems === "None"? 0:mems.split(" ")[1]
    const cpStage = cp === "None"? 0:cp.split(" ")[1]
    const stage = Math.max(memsStage, cpStage)
    return stage === 0? "":`Maternal immune response stage ${stage}`
}

module.exports = {getMIRstage, memsMIR, cpMIR}