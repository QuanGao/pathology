import React from 'react';
import BooleanRadioBtn from '../customFields/BooleanRadioBtn';
import formOptions from '../../../data/formOptions';
import SelectField from '../customFields/SelectField';

const Membranes = (props) => {
    return (
        <div className="membranes-group">
            <div className="section-title"><h4>membranes</h4></div>
            <SelectField
                fieldLabel="maternal immune response"
                fieldName="maternal_immune_response"
                options={formOptions.membranes.maternal_immune_response}
                handleSelectFieldChange={e=>props.changeHandler(e, "membranes")}
            />

            <BooleanRadioBtn 
                fieldLabel="chronic chorionitis"
                fieldName="chronic_chorionitis"
                fieldValue={props.chronic_chorionitis}
                handleBooleanRadioBtnChange={e=>props.changeHandler(e, "membranes")}
            />

            <BooleanRadioBtn 
                fieldLabel="chronic deciduitis with plasma cells"
                fieldName="chronic_deciduitis_w_plasma_cells"
                fieldValue={props.chronic_deciduitis_w_plasma_cells}
                handleBooleanRadioBtnChange={e=>props.changeHandler(e, "membranes")}
            />         
        </div>
    )
}
export default Membranes