import React from 'react';
import BooleanRadioBtn from '../customFields/BooleanRadioBtn';
import TextInputField from '../customFields/TextInputField';

const GrossFeatures = (props) => {
    return (
        <div className="gross-features-group">                       
            <TextInputField
                fieldLabel="gestation weeks"
                fieldName="gestation_weeks"
                placeholder={"(weeks).(days)"}
                fieldValue={props.gestation_weeks}
                handleTextInputFieldChange={e=>props.changeHandler(e, "gross_features")}
            />
            
            <TextInputField
                fieldLabel="placenta weight"
                fieldName="placenta_weight"
                placeholder={"grams"}
                fieldValue={props.placenta_weight}
                handleTextInputFieldChange={e=>props.changeHandler(e, "gross_features")}
            />

            <BooleanRadioBtn 
                fieldLabel="hypercoiled umbilical cord"
                fieldName="hypercoiled_umbilical_cord"
                fieldValue={props.hypercoiled_umbilical_cord}
                handleBooleanRadioBtnChange={e=>props.changeHandler(e, "gross_features")}
            />         
        </div>
    )
}

export default GrossFeatures;
