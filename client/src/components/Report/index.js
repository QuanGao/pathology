import React from "react";
import './styles/report.css';
import WeightCondition from './sections/WeightCondition';
import AcuteInflammatoryPathology from './sections/AcuteInflammatoryPathology';
import Villitis from './sections/Villitis';
import FetalVascularMalperfusion from './sections/FetalVascularMalperfusion';

const Report = (props)=> {
    const data = props.data;
    return (
    <div className="report-group">
        <h4>Report for sample {data.sample_id.toUpperCase()}</h4>
        <WeightCondition 
            data={data}
        />
        <AcuteInflammatoryPathology 
            data={data}
        />
        <Villitis
            data={data}
        />
        <FetalVascularMalperfusion
            data={data}
        />
    </div>
)}

export default Report