import React from "react";
import "./Report.css"

import {Divider} from 'antd'
import GaWtCal from "../../utils/GaWtCal.js"
import IR from "../../utils/IR"
import VI from "../../utils/Villitis"
const Report = (props)=>(
    <div>
        <h1>Report for sample {props.data.sampleId}</h1>
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
                    Chronic villitis, {props.data.villitisLargestFocus!=="None" && VI.isLowOrHigh(props.data)} grade
                </p>
                <p>
                    Pattern: {VI.findPattern(props.data)}
                </p>
                {props.data.villitisLocation.length >0 && 
                (<p>Location: 
                    {props.data.villitisLocation.map(
                        (item,index)=>{
                            return index < props.data.villitisLocation.length-1?
                            (<span>{item}, </span>):(<span>{item}</span>)
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
                    {props.data.villitisMembranesCMC === 1 && (<li>Chronic marginating choriodeciduitis</li>)}
                    {props.data.deciduaCDwPC === 1 && (<li>Chronic deciduitis with plasma cells.</li>)}
                    {props.data.villitisChorionicPlateCC === 1 && (<li>Chronic chorionitis.</li>)}
                    {props.data.villitisChorionicPlateETV === 1 && (<li>Eosinophilic/T-cell vasculitis.</li>)}
                    {props.data.villitisChorionicPlateETV !== "None" && (<li>Avascular villi.</li>)}
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
                    {props.data.villitisMembranesCMC === 1 && 
                        "Chronic marginating choriodeciduitis."}
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
        
    </div>
)

export default Report