import React from "react";
import "./Report.css"
import GaWtCal from "../../utils/GaWtCal.js"
import IR from "../../utils/IR"
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
        
        <p>
            {props.data.villitisLargestFocus}
        </p>
    </div>
)

export default Report