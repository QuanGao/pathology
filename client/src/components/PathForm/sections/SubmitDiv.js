import React from 'react';

const SubmitDiv = (props) => {
    return (
        <div className="submit-group">
            <div className="ant-btn-group">
                <button 
                    type="button" 
                    className="ant-btn ant-btn-primary ant-btn-lg ant-btn-background-ghost"
                    onClick={props.handleSaveProgressBtn}
                >
                    Save Progress
                </button>
                <button 
                    type="button" 
                    className="ant-btn ant-btn-primary ant-btn-lg"
                    onClick={props.handleSubmitFormBtn}
                >
                    Submit Form
                </button>
            </div>
        </div>)
    }
export default SubmitDiv;