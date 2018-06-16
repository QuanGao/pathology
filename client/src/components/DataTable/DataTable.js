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
  }, {
    title: 'Gestation Weeks',
    dataIndex: 'gestationWeeks',
    key: 'gestationWeeks',
  }, {
    title: 'Placenta Weight',
    dataIndex: 'placentaWeight',
    key: 'placentaWeight',
  }, {
    title: 'Placent weight/weeks',
    dataIndex: 'placentaWtCondition',
    key: 'placentaWtCondition',
  },{
    title: 'membranesMIR',
    dataIndex: 'membranesMIR',
    key: 'membranesMIR',
  },{
    title: 'chorionicPlateMIR',
    dataIndex: 'chorionicPlateMIR',
    key: 'chorionicPlateMIR',
  }];
  
const DataTable = (props) => <Table dataSource={props.data} columns={columns} />

export default DataTable