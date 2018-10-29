import React from "react"
// import DataTable from "../DataTable"

// const addKeyToList = (arr) => {
//     arr.map((item, index) => {
//         item.key = index;
//         return item
//     })
//     return arr
// }

// const AllForm = (props) => <DataTable data = {addKeyToList(props.data)}/>

class AllForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedSample: {}
    };
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(sampleId){
    this.setState ({
      selectedSample: this.props.data.find(item=>item.sampleId === sampleId)
    })
  }
  render(){
    return (
      <div>
        <ul>
          {this.props.data.map( (item,index) => 
            <li 
            key={index} 
            onClick={()=>this.handleSelect(item.sampleId)} 
            className={item.sampleId === this.state.selectedSample.sampleId ? "sample-list-item selected":"sample-list-item"}
            >
              <span>sampleId: {item.sampleId}</span>
              {'  '}{'  '}
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