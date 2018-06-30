import React from "react"
import DataTable from "../DataTable"

const addKeyToList = (arr) => {
    arr.map((item, index) => {
        item.key = index;
        item.createdAt = item.createdAt.split("T")[0]
        return item
    })
    return arr
}

const AllForm = (props) => <DataTable data = {addKeyToList(props.data)}/>

export default AllForm