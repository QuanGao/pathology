import React from 'react';

const SubmitFormBtn = (props) => {
    return (
        <div className="submit-btn">
            <button 
                type="button" 
                className="ant-btn ant-btn-primary submit-btn"
                onClick={props.handleSubmitForm}
            >
                Submit Form
            </button>
        </div>)
    }
export default SubmitFormBtn;