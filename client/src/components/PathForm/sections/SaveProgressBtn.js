import React from 'react';

const SaveProgressBtn = (props) => {
    return (
        <div className="submit-group">
            <button 
                type="button" 
                className="ant-btn ant-btn-primary save-btn"
                onClick={props.handleSaveProgress}
            >
                Save Progress
            </button>
        </div>)
    }
export default SaveProgressBtn;