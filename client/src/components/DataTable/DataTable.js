import React from "react"
import "./DataTable.css"

import { Table, Icon, Divider } from 'antd';

// const dataSource = [{
//     key: '1',
//     name: 'Mike',
//     age: 32,
//     address: '10 Downing Street'
//   }, {
//     key: '2',
//     name: 'John',
//     age: 42,
//     address: '10 Downing Street'
//   }];
  
  const columns = [{
    title: 'SampleId',
    dataIndex: 'sampleId',
    key: 'sampleId',
  }, {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  }, {
    title: 'Gestation Weeks',
    dataIndex: 'gestationWeeks',
    key: 'gestationWeeks',
  }, {
    title: 'Placenta Weight',
    dataIndex: 'placentaWeight',
    key: 'placentaWeight',
  }, {
    title: 'Condition',
    dataIndex: 'placentaWtCondition',
    key: 'placentaWtCondition',
  }];
  
const DataTable = (props) => <Table dataSource={props.data} columns={columns} />

export default DataTable