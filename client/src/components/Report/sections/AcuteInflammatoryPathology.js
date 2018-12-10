import React from "react";
import IR from "../../../utils/IR"

const AcuteInflammatoryPathology = (props) => {
    const data=props.data;
    return (
        <div className="acute-inflammatory-group report-section">

            {IR.checkIRpresence(data) && (
                <h6><i>Acute inflammatory pathology</i></h6>
            )}        
            
            {IR.getMIRstage(data)}      
            {IR.getIRdetails(data.membranes.maternal_immune_response, "membranes")}
            {IR.getIRdetails(data.chorionic_plate.maternal_immune_response, "chorionic plate")}
            
            <br/>

            {IR.getFIRstage(data)}
            {IR.getIRdetails(data.umbilical_cord.fetal_immune_response, "umbilical cord")}
            {IR.getIRdetails(data.chorionic_plate.fetal_immune_response)}
                
        </div>
    )
}

export default AcuteInflammatoryPathology;