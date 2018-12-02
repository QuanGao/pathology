import React from 'react';

const generateSelectField = (options, fieldName, onchangeHandler) => {
    const defaultOption = options.find( option => option.default);
    const defaultValue = defaultOption ? defaultOption.value : undefined;
    return (
        <select className="ant-input" onChange={onchangeHandler} name={fieldName} defaultValue={defaultValue}>
            <option value="">---</option>
            {options.map( (option, i) => <option key={i} value={option.value}>{option.name}</option>)}
        </select>
    )
}

const SelectField = (props) => {
    return (
        <div className="ant-row ant-form-item">
            <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-10">
                <label>
                    {props.fieldLabel}
                </label>
            </div>
            <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-14">
                <div className="ant-form-item-control">
                    <span className="ant-form-item-children">
                        {generateSelectField(props.options, props.fieldName, props.handleSelectFieldChange)}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default SelectField