import React from "react";
import {Divider} from 'antd'
import GaWtCal from "../../utils/WgtCal.js"
import IR from "../../utils/IR"
import VI from "../../utils/Villitis"
import FVM from "../../utils/FetalVasMalperfusion"

const Report = (props)=>(
    <div style={{}}>

        <h1>Report for sample {props.data.sampleId.toUpperCase()}</h1>

        <p>
            Gestation duration: {props.data.gestationWeeks} weeks
        </p>
        <p>
            Placental weight: {props.data.placentaWeight} grams
        </p>
        <p>
            {GaWtCal.judge(props.data.gestationWeeks, props.data.placentaWeight)} gestational age
            expect ({GaWtCal.lowWgt(props.data.gestationWeeks, props.data.placentaWeight)} to {GaWtCal.highWgt(props.data.gestationWeeks, props.data.placentaWeight)} grams)
        </p>
-------
        {IR.checkIRpresence(props.data) && (
            <div><Divider/><h4><i>Acute inflammatory pathology</i></h4></div>
        )}        

        <p>{IR.getMIRstage(props.data)}</p>
        <p className="secondP">
            {IR.getIRdetails(props.data.membranesMIR, "Membranes")}
        </p>
        <p className="secondP">
            {IR.getIRdetails(props.data.chorionicPlateMIR, "Chorionic plate")}
        </p>

        <p>{IR.getFIRstage(props.data)}</p>
        <p className="secondP">
            {IR.getIRdetails(props.data.umbilicalCordFIR, "Umbilical cord with")}
        </p>
        <p className="secondP">
            {IR.getIRdetailsWOnames(props.data.chorionicPlateFIR)}
        </p>     
-------        
        {VI.isAbnormal(props.data) || VI.isChronicVillitis(props.data)? 
        (<div><Divider/><h4><i>Villitis</i></h4></div>):""}

        {VI.isSingle(props.data) && 
            (<p>
                Chronic villitis, single focus, ungradable, 
                possible {VI.isLowOrHigh(props.data)} grade:
            </p>)
        }

        {VI.isChronicVillitis(props.data) && !VI.isSingle(props.data) ?  
            (<div>
                <p>
                    Chronic villitis, {VI.isLowOrHigh(props.data)} grade
                </p>
                <p>
                    Pattern: {VI.findPattern(props.data)}
                </p>
                {props.data.villitisLocation.length >0 && 
                (<p>Location: 
                    {props.data.villitisLocation.map(
                        (item,index)=>{
                            return index < props.data.villitisLocation.length-1?
                            (<span key={index}> {item}, </span>):(<span key={index}> {item}</span>)
                        })}
                </p>) 
                }
            </div>
            ):"" 
        }

        {VI.isChronicVillitis(props.data) && 
        !VI.isSingle(props.data) && VI.isAbnormal(props.data) ?
            (<div>                  
                <p>Associated features: </p>
                <ul>
                    {props.data.villitisMembranesCC === 1 && (<li>Membranes chronic chorionitis</li>)}
                    {props.data.villitisMembranesCDwPC === 1 && (<li>Membranes chronic deciduitis with plasma cells</li>)}
                    {props.data.deciduaCDwPC === 1 && (<li>Chronic deciduitis with plasma cells.</li>)}
                    {props.data.villitisChorionicPlateCC === 1 && (<li>Chronic chorionitis.</li>)}
                    {props.data.villitisChorionicPlateETV === 1 && (<li>Eosinophilic/T-cell vasculitis.</li>)}
                    {props.data.villitisAAV === 1 && (<li>Avascular villi.</li>)}
                    {props.data.villitisASVOC === 1 && (<li>Stem vessel obliterative changes.</li>)}
                    {props.data.villitisCMV_I !== "NA" && (
                        <li>
                            {props.data.villitisVI  === 1 ? "":"No definitive"} viral inclusions identified.
                            Immunoperoxidase stain for cytomegalovirus is {props.data.villitisCMV_I}
                        </li>
                        )} 
                    {props.data.villitisT_I !== "NA" && (<li>Immunoperoxidase stain for toxoplasmosis is {props.data.villitisT_I}</li>)}         
                </ul>
            </div>):""
        }

        {!VI.isChronicVillitis(props.data) || VI.isSingle(props.data) ?
            (<div>
                <p>
                    {props.data.villitisMembranesCC === 1 && 
                        "Membranes chronic chorionitis"}
                </p>
                <p>
                    {props.data.villitisMembranesCDwPC === 1 && 
                        "Membranes chronic deciduitis with plasma cells"}
                </p>
                <p>
                    {props.data.deciduaCDwPC === 1 && 
                        "Chronic deciduitis with plasma cells."}
                </p>
                <p>
                    {props.data.villitisChorionicPlateCC === 1 && 
                        "Chronic chorionitis"}
                </p>
                <p>
                    {props.data.villitisChorionicPlateETV === 1 && 
                        "Eosinophilic/T-cell vasculitis."}
                </p>
            </div>):""             
        }
-------             
        <div>
        <h4>Fetal Vascular Malperfusion</h4>
            {FVM.isFetalVasMalperfusion(props.data) && 
            <p>Features consistent with fetal vascular malperfusion ({FVM.determineGrade(props.data)} grade)</p>}
            <p>List Features</p>
            {props.data.hypercoiledUmbCord!==0 && <p>Hypercoiled umbilical cord</p>}      
            <p>{FVM.summerizeThrombus(props.data)}</p>
            <p>{FVM.summerizeFibrin(props.data)}</p>
            <p>{props.data.chorionVascularEctasia > 0 && "Vascular ectasia"}</p>
            <p>{props.data.stemVillousVesselObliteration > 0 && "Stem villous vessel obliteration"}</p>
            <p>{FVM.summerizeKaryorrhexis(props.data)}</p>
            <p>{FVM.summerizeAvascularVilli(props.data)}</p>
        </div>
        <div>
            <h4>All data</h4>
            <pre>{JSON.stringify(props.data, null, 2)}</pre>
        </div> 
    </div>
)

export default Report