import React from 'react';
import formOptions from '../../../data/formOptions';
import SelectField from '../customFields/SelectField';
import BooleanRadioBtn from '../customFields/BooleanRadioBtn';

const UmbilicalCord = (props) => {
    return (
        <div className="umbilical-cord-group">
            <div className="section-title"><h4>umbilical cord</h4></div>        
            <SelectField
                fieldLabel="fetal immune response"
                fieldName="fetal_immune_response"
                options={formOptions.umbilical_cord.fetal_immune_response}
                handleSelectFieldChange={e=>props.changeHandler(e, "umbilical_cord")}
            />
            <div className="section-title"><h5>umbilical vessel</h5></div>
            <SelectField
                fieldLabel="intramural fibrin deposition"
                fieldName="intramural_fibrin_deposition"
                options={formOptions.umbilical_cord.vessel.intramural_fibrin_deposition}
                handleSelectFieldChange={e=>props.changeHandler(e, "umbilical_cord.vessel")}
            />
            <SelectField
                fieldLabel="intraluminal thrombus"
                fieldName="num_vessel"
                options={formOptions.umbilical_cord.vessel.intraluminal_thrombus.num_vessel}
                handleSelectFieldChange={e=>props.changeHandler(e, "umbilical_cord.vessel.intraluminal_thrombus")}
            />
            {props.vessel.intraluminal_thrombus.num_vessel && 
            props.vessel.intraluminal_thrombus.num_vessel !== "none" && 
                <BooleanRadioBtn 
                    fieldLabel="intraluminal thrombus obstructive"
                    fieldName="obstructive"
                    fieldValue={props.vessel.intraluminal_thrombus.obstructive}
                    handleBooleanRadioBtnChange={e=>props.changeHandler(e, "umbilical_cord.vessel.intraluminal_thrombus")}
                />
            }
        </div>
    )

}
export default UmbilicalCord