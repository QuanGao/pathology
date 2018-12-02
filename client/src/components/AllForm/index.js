import React from "react"
import API from "../../utils/API"

class AllForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedSample: {},
            sampleList: []
        };
    }

    handleSelect = (sampleId) => {
        return API.findFormById(sampleId).then(
            response => {
                this.setState ({
                    selectedSample: {...response.data}
                })
            }
        )
    }

    getSampleList = () => {
        return API.getSampleList().then(
            response => {
                this.setState({
                    sampleList: [...response.data]
                })
            }
        )
    }

    componentDidMount () {
        this.getSampleList();
    }

    render(){
        return (
            <div>
                <ul>
                {this.state.sampleList.map( (item,index) => 
                    <li 
                        key={index} 
                        onClick={()=>this.handleSelect(item.sampleId)} 
                        className={item.sampleId === this.state.selectedSample.sampleId ? "sample-list-item selected":"sample-list-item"}
                    >
                        <span>sampleId: {item.sampleId}</span>
                        {'  '}
                        <span>Created at: {item.createdAt}</span>
                    </li>
                )}
                </ul>
                <h4>Data</h4>
                <pre>{JSON.stringify(this.state.selectedSample, null, 2)}</pre>
            </div>
        )
    }
}

export default AllForm