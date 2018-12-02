import React from 'react';
import BooleanRadioBtn from '../customFields/BooleanRadioBtn';

const Decidua = (props) => {
    return (
        <div className="decidua-group">  
            <div className="section-title"><h4>decidua</h4></div>               
            <BooleanRadioBtn 
                fieldLabel="chronic deciduitis with plasma cells"
                fieldName="chronic_deciduitis_w_plasma_cells"
                fieldValue={props.chronic_deciduitis_w_plasma_cells}
                handleBooleanRadioBtnChange={e=>props.changeHandler(e, "decidua")}
            /> 
        </div>
    )
}
export default Decidua