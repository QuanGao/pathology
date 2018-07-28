import React from "react";
import "./Report.css"

import {Divider} from 'antd'
import GaWtCal from "../../utils/GaWtCal.js"
import IR from "../../utils/IR"
import VI from "../../utils/Villitis"
const Report = (props)=>(
    <div>
        <h1>Report for sample {props.data.sampleId}</h1>
        {/* <p>
            Gestation duration: {props.data.gestationWeeks} weeks
        </p>
        <p>
            Placental weight: {props.data.placentaWeight} grams
        </p>
        <p>
            {GaWtCal.judge(props.data.gestationWeeks, props.data.placentaWeight)} gestational age
            expect ({GaWtCal.lowWgt(props.data.gestationWeeks, props.data.placentaWeight)} to {GaWtCal.highWgt(props.data.gestationWeeks, props.data.placentaWeight)} grams)
        </p>

        <Divider/>
    
        <h6>{IR.checkIRpresence(props.data)}</h6>

        <p className="secondP">{IR.getMIRstage(props.data)}</p>
        <p className="thirdP">
            {IR.getIRdetails(props.data.membranesMIR, "Membranes")}
        </p>
        <p className="thirdP">
            {IR.getIRdetails(props.data.chorionicPlateMIR, "Chorionic plate")}
        </p>

        <p className="secondP">{IR.getFIRstage(props.data)}</p>
        <p className="thirdP">
            {IR.getIRdetails(props.data.umbilicalCordFIR, "Umbilical cord with")}
        </p>
        <p className="thirdP">
            {IR.getIRdetailsWOnames(props.data.chorionicPlateFIR)}
        </p> */}

        <Divider/>

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
                    <b>Pattern: </b>{VI.findPattern(props.data)}
                </p>
                {props.data.villitisLocation.length >0 && 
                (<p><b>Location: </b>
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
                 (<p><b>
                     Associated features:
                 </b></p>):""
       }
    
        {!VI.isChronicVillitis(props.data) || VI.isSingle(props.data) ?
           (<div>
                <p className="secondP">
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