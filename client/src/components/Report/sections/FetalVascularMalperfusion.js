import React from "react";
import FVM from "../../../utils/FetalVasMalperfusion";

const FetalVascularMalperfusion = (props) => {
    const data = props.data;
    return (
        <div className="fetal-vascular-malperfusion-group report-section">
  
            <h4>Fetal Vascular Malperfusion</h4>

            {FVM.isFetalVasMalperfusion(data) && 
                FVM.determineGrade(data)
            }

            {/* <span>List Features</span>
            {data.hypercoiledUmbCord!==0 && <span>Hypercoiled umbilical cord</span>}
                 
            <span>{FVM.summerizeThrombus(data)}</span>
            <span>{FVM.summerizeFibrin(data)}</span>
            <span>{data.chorionVascularEctasia > 0 && "Vascular ectasia"}</span>
            <span>{data.stemVillousVesselObliteration > 0 && "Stem villous vessel obliteration"}</span>
            <span>{FVM.summerizeKaryorrhexis(data)}</span>
            <span>{FVM.summerizeAvascularVilli(data)}</span> */}
 
        </div>
    )
}

export default FetalVascularMalperfusion;