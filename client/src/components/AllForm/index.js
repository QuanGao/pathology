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

    handleSelect = (item) => {
        return API.findFormById(item._id).then(
            response => {
                console.log(response.data)
                this.setState ({
                    selectedSample: {...response.data}
                })
            }
        )
    }

    getSampleList = () => {
        return API.getSampleList().then(
            response => {
                console.log(response.data)
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
                        onClick={()=>this.handleSelect(item)} 
                        className={item._id === this.state.selectedSample._id ? "sample-list-item selected":"sample-list-item"}
                    >
                        <span>sampleId: {item.sample_id}</span>
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