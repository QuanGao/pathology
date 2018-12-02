import React from 'react';
import formOptions from '../../../data/formOptions';
import SelectField from '../customFields/SelectField';
import BooleanRadioBtn from '../customFields/BooleanRadioBtn';

const ChorionicPlate = (props) => {
    return (
        <div className="chorionic-plate-group">
            <div className="section-title"><h4>chorionic plate</h4></div>  
            <SelectField
                fieldLabel="maternal immune response"
                fieldName="maternal_immune_response"
                options={formOptions.chorionic_plate.maternal_immune_response}
                handleSelectFieldChange={e=>props.changeHandler(e, "chorionic_plate")}
            />      
            <SelectField
                fieldLabel="fetal immune response"
                fieldName="fetal_immune_response"
                options={formOptions.chorionic_plate.fetal_immune_response}
                handleSelectFieldChange={e=>props.changeHandler(e, "chorionic_plate")}
            />
            <BooleanRadioBtn 
                fieldLabel="chronic chorionitis"
                fieldName="chronic_chorionitis"
                fieldValue={props.chronic_chorionitis}
                handleBooleanRadioBtnChange={e=>props.changeHandler(e, "chorionic_plate")}
            />
            <BooleanRadioBtn 
                fieldLabel="eosinophilic T cell vasculitis"
                fieldName="eosinophilic_T_cell_vasculitis"
                fieldValue={props.eosinophilic_T_cell_vasculitis}
                handleBooleanRadioBtnChange={e=>props.changeHandler(e, "chorionic_plate")}
            /> 
            <div className="section-title"><h5>chorionic vessel</h5></div>
            <SelectField
                fieldLabel="intramural fibrin deposition"
                fieldName="intramural_fibrin_deposition"
                options={formOptions.chorionic_plate.vessel.intramural_fibrin_deposition}
                handleSelectFieldChange={e=>props.changeHandler(e, "chorionic_plate.vessel")}
            />
            <SelectField
                fieldLabel="intraluminal thrombus"
                fieldName="num_vessel"
                options={formOptions.chorionic_plate.vessel.intraluminal_thrombus.num_vessel}
                handleSelectFieldChange={e=>props.changeHandler(e, "chorionic_plate.vessel.intraluminal_thrombus")}
            />
             {props.vessel.intraluminal_thrombus.num_vessel &&
                props.vessel.intraluminal_thrombus.num_vessel !== "none" && 
                <BooleanRadioBtn 
                    fieldLabel="intraluminal thrombus obstructive"
                    fieldName="obstructive"
                    fieldValue={props.vessel.intraluminal_thrombus.obstructive}
                    handleBooleanRadioBtnChange={e=>props.changeHandler(e, "chorionic_plate.vessel.intraluminal_thrombus")}
                />
            } 
            <BooleanRadioBtn 
                fieldLabel="chorionic vascular ectasia"
                fieldName="chorionic_vascular_ectasia"
                fieldValue={props.chorionic_vascular_ectasia}
                handleBooleanRadioBtnChange={e=>props.changeHandler(e, "chorionic_plate")}
            />        
        </div>
    )

}
export default ChorionicPlate;