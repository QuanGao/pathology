import React from "react"
import DataTable from "../DataTable"

import API from "../../utils/API"

class AllForm extends React.Component {
    state = {
        data:[]
    }

    componentDidMount () {
        API.findAllForms().then(
            response => {
                const tableData = [...response.data]
                tableData.forEach((obj,i)=>{
                    obj.key=i;
                    obj.date = obj.date.split("T")[0]
                })
                console.log(tableData)
                this.setState({data: tableData})
            }
        )
    }
    
    render() {
        return <DataTable data={this.state.data}/>
    }
} 

export default AllForm