import React from "react";
import VI from "../../../utils/Villitis";

const Villitis = (props)=>{
    const data = props.data;
    return (
        <div className="villitis-group report-section">

            {VI.isChronicVillitis(data) || VI.isAbnormal(data) ?
                (<h6><i>Villitis</i></h6>) : ""
            }
          
            {VI.isChronicVillitis(data) ?
                (<div>
                    {VI.getGrade(data)}
                    {VI.getPattern(data)}                       
                    {VI.getLocation(data)}
                </div>) : ""
            }
      
            {VI.isChronicVillitis(data) && !VI.isSingle(data) && VI.isAbnormal(data) ?
                VI.getAssociatedFeatures(data) : ""
            }           
            
            {!VI.isChronicVillitis(data) || VI.isSingle(data) ?
                VI.getOtherFeatures(data) : ""   
            }
            
        </div>
    )

};

export default Villitis;