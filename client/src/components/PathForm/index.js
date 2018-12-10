import React from 'react';
import set from 'lodash/set';
import get from 'lodash/get';
import './styles/form.css';

import GeneralInfo from './sections/GeneralInfo';
import GrossFeatures from './sections/GrossFeatures';
import Membranes from './sections/Membranes';
import UmbilicalCord from './sections/UmbilicalCord';
import ChorionicPlate from './sections/ChorionicPlate';
import VillousDisc from './sections/VillousDisc';
import Decidua from './sections/Decidua';
import Disc from './sections/Disc';
import SaveProgressBtn from './sections/SaveProgressBtn';
import SubmitFormBtn from './sections/SubmitFormBtn';

import defaultConfig from '../../data/formConfig';
import API from '../../utils/API';

class PathForm extends React.Component {
    state = {
        fields: defaultConfig

    };

    handleFieldChange = (e, pathToChangedField) => {
        let pathToChangedFieldName = e.target.name;
        let changedFieldValue = e.target.value;
        const newFields = {...this.state.fields};

        // handle check box boolean field
        if(e.target.type === "radio"){
            changedFieldValue = e.target.value === "yes" ? true : false
        }
        // handle nested field
        if(pathToChangedField){
            pathToChangedFieldName = `${pathToChangedField}.${e.target.name}`;
            const pathToFieldArr = pathToChangedField.split(".");       
            // create a copied and updated object for each level of nesting that is affected by nested field change
            let pathName = "";
            for(let i=0; i<pathToFieldArr.length; i++){
                pathName += pathToFieldArr[i];
                const nestedChangedObj = get(newFields, pathName, {})
                set(newFields, pathName, {...nestedChangedObj});
            };
        }

        // handle field value that is array
        if(pathToChangedFieldName === "villous_disc.chronic_villitis.details.location") {
            const arrFieldCopy = [...get(newFields, pathToChangedFieldName, [])];
            // if the clicked value is in the array, remove it. If not, add it.
            const index = arrFieldCopy.indexOf(e.target.value);
            if( index === -1){
                arrFieldCopy.push(e.target.value);
            } else {
                arrFieldCopy.splice(index, 1);
            }
            changedFieldValue = arrFieldCopy
        };

        set(newFields, pathToChangedFieldName, changedFieldValue);

        this.setState({
            fields: newFields
        })
    }

    handleSaveProgress = (e) => {
        e.preventDefault();
        const values = {...this.state.fields}; 
        values.completed = false;   
        API.saveFormData(values).then(response => {
            this.setState({
                fields: defaultConfig
            })
        })
    };

    handleSubmitForm = (e) => {
        e.preventDefault();
        const values = {...this.state.fields};    
        values.completed = true;
        API.saveFormData(values).then(response => {
            this.setState({
                fields: defaultConfig
            })
        })
    };

    render() {
        const fields = this.state.fields
        return(
            <div>  
                <div className="action-buttons top-section">
                    <SaveProgressBtn handleSaveProgress={this.handleSaveProgress}/>  
                </div> 
                <div className="form-section first-section">              
                    <GeneralInfo {...fields.sample_id} changeHandler={this.handleFieldChange}/>
                    <GrossFeatures {...fields.gross_features} changeHandler={this.handleFieldChange}/> 
                </div>  

                <div className="form-section mid-section">
                    <Membranes {...fields.membranes} changeHandler={this.handleFieldChange}/>
                </div>

                <div className="form-section mid-section">
                    <UmbilicalCord {...fields.umbilical_cord} changeHandler={this.handleFieldChange}/>                       
                </div>

                <div className="form-section mid-section">
                    <ChorionicPlate {...fields.chorionic_plate} changeHandler={this.handleFieldChange}/>
                </div>

                <div className="form-section mid-section">
                    <VillousDisc {...fields.villous_disc} changeHandler={this.handleFieldChange}/>     
                </div>
                
                <div className="form-section mid-section">
                    <Decidua {...fields.decidua} changeHandler={this.handleFieldChange}/>                    
                </div>

                <div className="divider"></div>

                <div className="form-section last-section">
                    <Disc {...fields.disc} changeHandler={this.handleFieldChange}/>           
                </div>

                <div className="action-buttons bottom-section">
                    <SubmitFormBtn handleSubmitForm={this.handleSubmitForm}/>    
                </div> 

            </div>
        )
    } 
};

export default PathForm;
