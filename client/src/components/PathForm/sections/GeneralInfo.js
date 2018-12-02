import React from 'react';
import TextInputField from '../customFields/TextInputField';

const GeneralInfo = (props) => {
    return (
        <div className="general-info">  
            <div className="section-title"><h4>general information</h4></div>               
            <TextInputField
                fieldLabel="Sample ID"
                fieldName="sample_id"
                placeholder={"unique id"}
                fieldValue={props.sample_id}
                handleTextInputFieldChange={(e)=>props.changeHandler(e)}
                required={true}
            />
        </div>
    )
}

export default GeneralInfo;