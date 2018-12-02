import React from 'react';

const BooleanRadioBtn = (props) => {
    return (   
        <div className="ant-row ant-form-item">
            <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-10">
                <label>
                    {props.fieldLabel}
                </label>
            </div>
            <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-14">
                <div className="ant-form-item-control">
                    <div                      
                        className="ant-radio-group"  
                    >
                        <label 
                            className={props.fieldValue ? "ant-radio-button-wrapper ant-radio-button-wrapper-checked" : "ant-radio-button-wrapper"}
                        >
                            <span className="ant-radio-button">
                                <input 
                                    type="radio" 
                                    className="ant-radio-button-input" 
                                    name={props.fieldName}
                                    value={"yes"}
                                    checked={props.fieldValue}
                                    onChange={props.handleBooleanRadioBtnChange}
                                >
                                </input>
                                <span className="ant-radio-button-inner"></span>
                            </span>
                            <span>Yes</span>
                        </label>

                        <label
                            className={!props.fieldValue ? "ant-radio-button-wrapper ant-radio-button-wrapper-checked" : "ant-radio-button-wrapper"}
                        >
                            <span className="ant-radio-button">
                                <input 
                                    type="radio" 
                                    className="ant-radio-button-input" 
                                    name={props.fieldName}
                                    value={"no"}
                                    checked={!props.fieldValue}
                                    onChange={props.handleBooleanRadioBtnChange}
                                >
                                </input>
                                <span className="ant-radio-button-inner"></span>
                            </span>
                            <span>No</span>
                        </label>
                    </div>

                </div>
            </div>
        </div>
            
   
    )
}
export default BooleanRadioBtn;