import React from 'react';

function isChronicVillitis (data) {
    return data.villous_disc.chronic_villitis.presence
}
function isSingle (data) {
    return data.villous_disc.chronic_villitis.details.villitis_num_foci === "single";
}

function isLowOrHighGrade (data) {
    const numOfVilli = +data.villous_disc.chronic_villitis.details.villitis_largest_focus.split("-")[1]
    return numOfVilli < 10 ? "low grade" : "high grade";
};

function isAbnormal (data) {
    return data.membranes.chronic_chorionitis || 
    data.membranes.chronic_deciduitis_w_plasma_cells || 
    data.chorionic_plate.chronic_chorionitis || 
    data.chorionic_plate.eosinophilic_T_cell_vasculitis || 
    data.villous_disc.chronic_villitis.details.CMV_immunostain === "positive" || 
    data.villous_disc.chronic_villitis.details.toxoplasma_immunostain === "positive" || 
    data.villous_disc.chronic_villitis.details.associated_stem_vessel_obliterative_changes || 
    data.villous_disc.chronic_villitis.details.associated_avascular_villi || 
    data.villous_disc.chronic_villitis.details.viral_inclusions || 
    data.decidua.chronic_deciduitis_w_plasma_cells
};
function getPattern (data) {
    const isLow = isLowOrHighGrade (data) === "low grade";
    const num_of_foci = data.villous_disc.chronic_villitis.details.villitis_num_foci;
    let pattern = "";
    switch(num_of_foci){
        case "few":
            pattern = isLow? "Pattern: focal" : "Pattern: patchy";
            break;
        case "many":
            pattern = isLow? "Pattern: multifocal" : "Pattern: patchy";
            break;
        case "diffuse":
            pattern = isLow? "Pattern: multifocal" : "Pattern: diffuse";
            break;
        default:
            break;
    };
    return (<span>{pattern}</span>)         
};

function getGrade (data) {
    const isSingleGrade = isSingle (data) === 'single';
    if(isSingleGrade){
        return (<span>Chronic villitis, single focus, ungradable, possible {isLowOrHighGrade(data)}; </span>)
    } else {
        return (<span>Chronic villitis, {isLowOrHighGrade(data)}; </span>)
    }
}

function getLocation (data) {
    const location = data.villous_disc.chronic_villitis.details.location;
    let locationDisplay = "";
    if(location && location.length > 0){
        locationDisplay = location.map( (item, i) => {
            return (<span key={i}> {item}{i!==location.length-1 && (<span>,{' '}</span>)}</span>)
        });
        locationDisplay = <span>Location: {locationDisplay}</span>;
    };
    return locationDisplay;
};

function getAssociatedFeatures (data){
    return (
        <div>
            <span>Associated features: </span>
            <ul>
                {data.membranes.chronic_chorionitis && (<li>Membranes chronic chorionitis</li>)}
                {data.membranes.chronic_deciduitis_w_plasma_cells && (<li>Membranes chronic deciduitis with plasma cells</li>)}
                {data.decidua.chronic_deciduitis_w_plasma_cells && (<li>Chronic deciduitis with plasma cells.</li>)}
                {data.chorionic_plate.chronic_chorionitis && (<li>Chronic chorionitis.</li>)}
                {data.chorionic_plate.eosinophilic_T_cell_vasculitis === 1 && (<li>Eosinophilic/T-cell vasculitis.</li>)}
                {data.villous_disc.chronic_villitis.details.associated_avascular_villi && (<li>Avascular villi.</li>)}
                {data.villous_disc.chronic_villitis.details.associated_stem_vessel_obliterative_changes && (<li>Stem vessel obliterative changes.</li>)}
                {data.villous_disc.chronic_villitis.details.CMV_immunostain !== "NA" ? (
                    <li>
                        {!data.villous_disc.chronic_villitis.details.viral_inclusions && "No definitive"} Viral inclusions identified.
                        Immunoperoxidase stain for cytomegalovirus is {data.villous_disc.chronic_villitis.details.CMV_immunostain}
                    </li>) : ""              
                } 
                {data.villous_disc.chronic_villitis.details.toxoplasma_immunostain !== "NA" ? (
                    <li>Immunoperoxidase stain for toxoplasmosis is 
                        {data.villous_disc.chronic_villitis.details.toxoplasma_immunostain}
                    </li>) : ""
                } 
            </ul>        
        </div>
    )
};

function  getOtherFeatures (data){
    return (
        <div className="others">  
            {data.membranes.chronic_chorionitis && <span>Membranes chronic chorionitis</span>} 
            {data.membranes.chronic_deciduitis_w_plasma_cells && <span>Membranes chronic deciduitis with plasma cells</span>}     
            {data.decidua.chronic_deciduitis_w_plasma_cells && <span>Chronic deciduitis with plasma cells.</span>}    
            {data.chorionic_plate.chronic_chorionitis && <span>Chronic chorionitis</span>}     
            {data.chorionic_plate.eosinophilic_T_cell_vasculitis && <span>Eosinophilic/T-cell vasculitis</span>}       
        </div>    
    )
}
export default {
    isChronicVillitis,
    isSingle,
    isLowOrHighGrade,
    isAbnormal,
    getPattern,
    getGrade,
    getLocation,
    getAssociatedFeatures,
    getOtherFeatures
}
{/* // return data.villitisMembranesCC === 1 || data.membranes.chronic_chorionitis
// data.villitisMembranesCDwPC === 1 || data.membranes.chronic_deciduitis_w_plasma_cells
// data.villitisChorionicPlateCC === 1 || data.chorionic_plate.chronic_chorionitis
// data.villitisChorionicPlateETV === 1|| data.chorionic_plate.eosinophilic_T_cell_vasculitis
// data.villitisCMV_I === "positive" || data.villous_disc.chronic_villitis.details.CMV_immunostain
// data.villitisT_I === "positive" || data.villous_disc.chronic_villitis.details.toxoplasma_immunostain
// data.villitisASVOC === 1 || data.villous_disc.chronic_villitis.details.associated_stem_vessel_obliterative_changes
// data.villitisAAV === 1 || data.villous_disc.chronic_villitis.details.associated_avascular_villi 
// data.villitisVI  === 1 || data.villous_disc.chronic_villitis.details.viral_inclusions
// data.deciduaCDwPC === 1  || data.decidua.chronic_deciduitis_w_plasma_cells             */}
