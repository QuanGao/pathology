import React from 'react';
import BooleanRadioBtn from '../customFields/BooleanRadioBtn';
import formOptions from '../../../data/formOptions';
import SelectField from '../customFields/SelectField';

const Disc = (props) => {
    return (
        <div className="disc-group">
            <div className="section-title"><h4>disc</h4></div>
            <div className="section-title"><h5>stem villous vessel</h5></div>
            
            <SelectField
                fieldLabel="intramural fibrin deposition"
                fieldName="intramural_fibrin_deposition"
                options={formOptions.disc.stem_villous_vessel.intramural_fibrin_deposition}
                handleSelectFieldChange={e=>props.changeHandler(e, "disc.stem_villous_vessel")}
            />

            <BooleanRadioBtn 
                fieldLabel="obliteration"
                fieldName="obliteration"
                fieldValue={props.stem_villous_vessel.obliteration}
                handleBooleanRadioBtnChange={e=>props.changeHandler(e, "disc.stem_villous_vessel")}
            />

            <SelectField
                fieldLabel="intraluminal_thrombus"
                fieldName="num_vessel"
                options={formOptions.disc.stem_villous_vessel.intraluminal_thrombus.num_vessel}
                handleSelectFieldChange={e=>props.changeHandler(e, "disc.stem_villous_vessel.intraluminal_thrombus")}
            />

            {props.stem_villous_vessel.intraluminal_thrombus.num_vessel &&
            props.stem_villous_vessel.intraluminal_thrombus.num_vessel !== "none" &&
                <BooleanRadioBtn 
                    fieldLabel="intraluminal thrombus obstructive"
                    fieldName="obstructive"
                    fieldValue={props.stem_villous_vessel.intraluminal_thrombus.obstructive}
                    handleBooleanRadioBtnChange={e=>props.changeHandler(e, "disc.stem_villous_vessel.intraluminal_thrombus")}
                />     
            }

            <div className="section-title"><h5>villous stromal vascular karyorrhexis</h5></div>
            
            <SelectField
                fieldLabel="number of foci"
                fieldName="num_foci"
                options={formOptions.disc.villous_stromal_vascular_karyorrhexis.num_foci}
                handleSelectFieldChange={e=>props.changeHandler(e, "disc.villous_stromal_vascular_karyorrhexis")}
            />
            
            {props.villous_stromal_vascular_karyorrhexis.num_foci &&
            props.villous_stromal_vascular_karyorrhexis.num_foci !== "none" && 
                <SelectField
                    fieldLabel="largest focus"
                    fieldName="largest_focus"
                    options={formOptions.disc.villous_stromal_vascular_karyorrhexis.largest_focus}
                    handleSelectFieldChange={e=>props.changeHandler(e, "disc.villous_stromal_vascular_karyorrhexis")}
                />
            }

            <div className="section-title"><h5>avascular_villi</h5></div>

            <SelectField
                fieldLabel="number of foci"
                fieldName="num_foci"
                options={formOptions.disc.avascular_villi.num_foci}
                handleSelectFieldChange={e=>props.changeHandler(e, "disc.avascular_villi")}
            />

            {props.avascular_villi.num_foci &&
            props.avascular_villi.num_foci !== "none" &&
            (<div>
                <SelectField
                    fieldLabel="largest focus"
                    fieldName="largest_focus"
                    options={formOptions.disc.avascular_villi.details.largest_focus}
                    handleSelectFieldChange={e=>props.changeHandler(e, "disc.avascular_villi.details")}
                />

                <SelectField
                    fieldLabel="total number"
                    fieldName="total_num"
                    options={formOptions.disc.avascular_villi.details.total_num}
                    handleSelectFieldChange={e=>props.changeHandler(e, "disc.avascular_villi.details")}
                />
            </div>)
            }

        </div>
    )
}
export default Disc