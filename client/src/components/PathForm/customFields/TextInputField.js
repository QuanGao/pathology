import React from 'react';

const TextInputField = (props) => {
    return (
        <div className="ant-row ant-form-item">
            <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-10">
                <label 
                    htmlFor={props.fieldName} 
                    className={props.required && "ant-form-item-required"}
                >
                    {props.fieldLabel}
                </label>
            </div>
            <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-14">
                <div className="ant-form-item-control">
                    <span className="ant-form-item-children">
                        <input 
                            type="text"
                            className="ant-input"
                            name={props.fieldName}
                            id={props.fieldName}
                            onChange={props.handleTextInputFieldChange}
                            value={props.fieldValue}
                            placeholder={props.placeholder || ""}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TextInputField;
