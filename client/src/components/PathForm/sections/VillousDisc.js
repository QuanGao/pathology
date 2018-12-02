import React from 'react';
import formOptions from '../../../data/formOptions';
import SelectField from '../customFields/SelectField';
import BooleanRadioBtn from '../customFields/BooleanRadioBtn';
import CheckboxGroup from '../customFields/CheckboxGroup';

const VillousDisc = (props) => {
    return (
        <div className="villous-disc-group">
            <div className="section-title"><h4>villous disc</h4></div>  

            <BooleanRadioBtn 
                fieldLabel="chronic villitis"
                fieldName="presence"
                fieldValue={props.chronic_villitis.presence}
                handleBooleanRadioBtnChange={e=>props.changeHandler(e, "villous_disc.chronic_villitis")}
            /> 

            {props.chronic_villitis.presence && 
                
                (<div>
                    <div className="section-title"><h5>villitis details</h5></div>  
                    <SelectField
                        fieldLabel="villitis largest focus"
                        fieldName="villitis_largest_focus"
                        options={formOptions.villous_disc.chronic_villitis.details.villitis_largest_focus}
                        handleSelectFieldChange={e=>props.changeHandler(e, "villous_disc.chronic_villitis.details")}
                    />  
                    <SelectField
                        fieldLabel="villitis number of foci"
                        fieldName="villitis_num_foci"
                        options={formOptions.villous_disc.chronic_villitis.details.villitis_num_foci}
                        handleSelectFieldChange={e=>props.changeHandler(e, "villous_disc.chronic_villitis.details")}
                    />  
                    <CheckboxGroup 
                        fieldLabel="villitis location"
                        fieldName="location"
                        options={formOptions.villous_disc.chronic_villitis.details.location}
                        fieldValue={props.chronic_villitis.details && props.chronic_villitis.details.location || []}
                        handleSelectFieldChange={e=>props.changeHandler(e, "villous_disc.chronic_villitis.details")}
                    />
                    <BooleanRadioBtn 
                        fieldLabel="associated avascular villi"
                        fieldName="associated_avascular_villi"
                        fieldValue={props.chronic_villitis.details && props.chronic_villitis.details.associated_avascular_villi}
                        handleBooleanRadioBtnChange={e=>props.changeHandler(e, "villous_disc.chronic_villitis.details")}
                    /> 
                    <BooleanRadioBtn 
                        fieldLabel="associated stem vessel obliterative changes"
                        fieldName="associated_stem_vessel_obliterative_changes"
                        fieldValue={props.chronic_villitis.details && props.chronic_villitis.details.associated_stem_vessel_obliterative_changes}
                        handleBooleanRadioBtnChange={e=>props.changeHandler(e, "villous_disc.chronic_villitis.details")}
                    /> 
                    <BooleanRadioBtn 
                        fieldLabel="viral inclusions"
                        fieldName="viral_inclusions"
                        fieldValue={props.chronic_villitis.details && props.chronic_villitis.details.viral_inclusions}
                        handleBooleanRadioBtnChange={e=>props.changeHandler(e, "villous_disc.chronic_villitis.details")}
                    /> 
                    <SelectField
                        fieldLabel="CMV immunostain"
                        fieldName="CMV_immunostain"
                        options={formOptions.villous_disc.chronic_villitis.details.CMV_immunostain}
                        handleSelectFieldChange={e=>props.changeHandler(e, "villous_disc.chronic_villitis.details")}
                    />  
                    <SelectField
                        fieldLabel="toxoplasma immunostain"
                        fieldName="toxoplasma_immunostain"
                        options={formOptions.villous_disc.chronic_villitis.details.toxoplasma_immunostain}
                        handleSelectFieldChange={e=>props.changeHandler(e, "villous_disc.chronic_villitis.details")}
                    />  
                </div>)
            }

        </div>  
    )
}

export default VillousDisc