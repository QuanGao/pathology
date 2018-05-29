import React from "react";
import "./Report.css"
import GaWtCal from "../../utils/GaWtCal.js"

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
            {GaWtCal.judge(props.data.gestationWeeks, props.data.placentaWeight)} for gestational age
            expect ({GaWtCal.lowWgt(props.data.gestationWeeks, props.data.placentaWeight)} to {GaWtCal.highWgt(props.data.gestationWeeks, props.data.placentaWeight)} grams)
        </p>
    </div>
)

export default Report