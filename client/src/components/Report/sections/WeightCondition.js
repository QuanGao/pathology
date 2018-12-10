import React from "react";
import WgtCal from "../../../utils/WgtCal"

const WeightCondition = (props) => {
    const data = props.data;
    return (
        <div className="weight-condition-group report-section">
            <h6><i>Placenta Size</i></h6>
            <span>
                Gestation duration: {data.gross_features.gestation_weeks} weeks; {' '}
            </span>
            <span>
                Placental weight: {data.gross_features.placenta_weight} grams; {' '}
            </span>
            <span>
                {WgtCal.judgeWgt(data.gross_features)} {' '}
                {WgtCal.expectWgt(data.gross_features)}
            </span>
        </div>
    )
}

export default WeightCondition;