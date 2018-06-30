import React from "react"
import "./DataTable.css"

import { Table} from 'antd';

  const columns = [{
    title: 'id',
    dataIndex: 'sampleId',
    key: 'sampleId',
  }, {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'date',
  },{
    title: 'membranesMIR',
    dataIndex: 'membranesMIR',
    key: 'membranesMIR',
  },{
    title: 'umbilicalCordFIR',
    dataIndex: 'umbilicalCordFIR',
    key: 'umbilicalCordFIR',
  },{
    title: 'chorionicPlateMIR',
    dataIndex: 'chorionicPlateMIR',
    key: 'chorionicPlateMIR',
  },{
    title: 'chorionicPlateFIR',
    dataIndex: 'chorionicPlateFIR',
    key: 'chorionicPlateFIR',
  }];
  
const DataTable = (props) => <Table dataSource={props.data} columns={columns} />

export default DataTable

// {
//     title: 'Gestation Weeks',
//     dataIndex: 'gestationWeeks',
//     key: 'gestationWeeks',
//   }, {
//     title: 'Placenta Weight',
//     dataIndex: 'placentaWeight',
//     key: 'placentaWeight',
//   }, {
//     title: 'Placent weight/weeks',
//     dataIndex: 'placentaWtCondition',
//     key: 'placentaWtCondition',
//   },