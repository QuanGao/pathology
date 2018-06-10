import React from "react"
import DataTable from "../DataTable"

import API from "../../utils/API"
import GaWtCal from "../../utils/GaWtCal.js"

class AllForm extends React.Component {
    // state = {
    //     data: []
    // }

    // componentDidMount() {
    //     API.findAllForms().then(
    //         response => {
    //             const tableData = [...response.data]
    //             tableData.forEach((obj, i) => {
    //                 obj.key = i;
    //                 obj.date = obj.createdAt.split("T")[0]
    //                 obj.placentaWtCondition = GaWtCal.judge(obj.gestationWeeks, obj.placentaWeight)
    //             })
    //             console.log(tableData)
    //             this.setState({
    //                 data: tableData
    //             })
    //         }
    //     )
    // }

    render() {
        return <DataTable data = {
            this.props.data
        }
        />
    }
}

export default AllForm