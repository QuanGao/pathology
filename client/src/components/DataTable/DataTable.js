import React from "react"
import "./DataTable.css"

import {Table} from 'antd';

  const columns = [{
    title: 'id',
    dataIndex: 'sampleId',
    key: 'sampleId',
  },
    {
    title: 'villitisMembranesCMC',
    dataIndex: 'villitisMembranesCMC',
    key: 'villitisMembranesCMC',
  }, {
    title: 'villitisChorionicPlateCC',
    dataIndex: 'villitisChorionicPlateCC',
    key: 'villitisChorionicPlateCC',
  }, {
    title: 'villitisChorionicPlateETV',
    dataIndex: 'villitisChorionicPlateETV',
    key: 'villitisChorionicPlateETV',
  }, {
    title: 'villousDiscCV',
    dataIndex: 'villousDiscCV',
    key: 'villousDiscCV',
  }, {
    title: 'villitisLargestFocus',
    dataIndex: 'villitisLargestFocus',
    key: 'villitisLargestFocus',
  }, {
    title: 'villitisNumOfFoci',
    dataIndex: 'villitisNumOfFoci',
    key: 'villitisNumOfFoci',
  }, {
    title: 'villitisAVA',
    dataIndex: 'villitisAVA',
    key: 'villitisAVA',
  }, {
    title: 'villitisASVOC',
    dataIndex: 'villitisASVOC',
    key: 'villitisASVOC',
  }, {
    title: 'villitisVI',
    dataIndex: 'villitisVI',
    key: 'villitisVI',
  }, {
    title: 'villitisCMV_I',
    dataIndex: 'villitisCMV_I',
    key: 'villitisCMV_I',
  }, {
    title: 'villitisT_I',
    dataIndex: 'villitisT_I',
    key: 'villitisT_I',
  }
, 
  {
    title: 'deciduaCDwPC',
    dataIndex: 'deciduaCDwPC',
    key: 'deciduaCDwPC',
  }
];
  
const DataTable = (props) => <Table dataSource={props.data} columns={columns} />

export default DataTable

// [{
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
//   },{
//     title: 'membranesMIR',
//     dataIndex: 'membranesMIR',
//     key: 'membranesMIR',
//   },{
//     title: 'umbilicalCordFIR',
//     dataIndex: 'umbilicalCordFIR',
//     key: 'umbilicalCordFIR',
//   },{
//     title: 'chorionicPlateMIR',
//     dataIndex: 'chorionicPlateMIR',
//     key: 'chorionicPlateMIR',
//   },{
//     title: 'chorionicPlateFIR',
//     dataIndex: 'chorionicPlateFIR',
//     key: 'chorionicPlateFIR',
//   }, {
//     title: 'Date',
//     dataIndex: 'createdAt',
//     key: 'date',
//   }, {
//     title: 'villitisLocation',
//     dataIndex: 'villitisLocation',
//     key: 'villitisLocation',
//   }
// ]