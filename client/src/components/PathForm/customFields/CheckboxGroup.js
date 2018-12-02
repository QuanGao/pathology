import React from 'react';

const CheckboxGroup = (props) => {
    return (
        <div className="ant-row ant-form-item">
            <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-10">
                <label>
                    {props.fieldLabel}
                </label>
            </div>
            <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-14">
                <div className="ant-form-item-control">
                    <div className="ant-checkbox-group">
                        {props.options.map( (option, index) => {
                            return (
                                <label className="ant-checkbox-group-item ant-checkbox-wrapper" key={index}>
                                    <span className={props.fieldValue.indexOf(option.value) !== -1 ? "ant-checkbox ant-checkbox-checked" : "ant-checkbox"}>
                                        <input
                                            type="checkbox"
                                            className="ant-checkbox-input"
                                            name={props.fieldName}
                                            value={option.value}
                                            checked={props.fieldValue.indexOf(option.value) !== -1}
                                            onChange={props.handleSelectFieldChange}
                                        />
                                        <span className="ant-checkbox-inner"></span>
                                    </span>
                                    <span>{option.name}</span>
                                </label>
                            )}
                        )}                              
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckboxGroup;