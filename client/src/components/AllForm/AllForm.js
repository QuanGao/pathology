import React from "react"
import DataTable from "../DataTable"
import moment from "moment"

const addKeyToList = (arr) => {
    arr.map((item, index) => {
        item.key = index;
        item.createdAt = moment(item.createdAt).format("MMM Do YY")
        return item
    })
    return arr
}

const AllForm = (props) => <DataTable data = {addKeyToList(props.data)}/>

export default AllForm