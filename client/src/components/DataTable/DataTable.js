import React from "react"
import {Table} from 'antd';

  const columns = [{
    title: 'id',
    dataIndex: 'sampleId',
    key: 'sampleId',
  },
    {
    title: 'hypercoiledUmbCord',
    dataIndex: 'hypercoiledUmbCord',
    key: 'hypercoiledUmbCord',
  }, {
    title: 'umbVesselIntramuFibrin',
    dataIndex: 'umbVesselIntramuFibrin',
    key: 'umbVesselIntramuFibrin',
  }, {
    title: 'umbVesselIntralumThrombus',
    dataIndex: 'umbVesselIntralumThrombus',
    key: 'umbVesselIntralumThrombus',
  }, {
    title: 'umbVesselIntralumThrombusObs',
    dataIndex: 'umbVesselIntralumThrombusObs',
    key: 'umbVesselIntralumThrombusObs',
  }, {
    title: 'chorionVesselIntramuFibrin',
    dataIndex: 'chorionVesselIntramuFibrin',
    key: 'chorionVesselIntramuFibrin',
  }, {
    title: 'chorionVesselIntralumThrombus',
    dataIndex: 'chorionVesselIntralumThrombus',
    key: 'chorionVesselIntralumThrombus',
  }, {
    title: 'chorionVesselIntralumThrombusObs',
    dataIndex: 'chorionVesselIntralumThrombusObs',
    key: 'chorionVesselIntralumThrombusObs',
  }, {
    title: 'chorionVascularEctasia',
    dataIndex: 'chorionVascularEctasia',
    key: 'chorionVascularEctasia',
  }, {
    title: 'stemVesselIntramuFibrin',
    dataIndex: 'stemVesselIntramuFibrin',
    key: 'stemVesselIntramuFibrin',
  }, {
    title: 'stemVesselIntralumThrombus',
    dataIndex: 'stemVesselIntralumThrombus',
    key: 'stemVesselIntralumThrombus',
  }, {
    title: 'stemVesselIntralumThrombusObs',
    dataIndex: 'stemVesselIntralumThrombusObs',
    key: 'stemVesselIntralumThrombusObs',
  }
, 
  {
    title: 'stemVillousVesselObliteration',
    dataIndex: 'stemVillousVesselObliteration',
    key: 'stemVillousVesselObliteration',
  }
, 
  {
    title: 'vilStromVasKaryorrhexisFoci',
    dataIndex: 'vilStromVasKaryorrhexisFoci',
    key: 'vilStromVasKaryorrhexisFoci',
  }
, 
  {
    title: 'avascularVilliNumFoci',
    dataIndex: 'avascularVilliNumFoci',
    key: 'avascularVilliNumFoci',
  }
, 
  {
    title: 'avascularVilliLargestfocus',
    dataIndex: 'avascularVilliLargestfocus',
    key: 'avascularVilliLargestfocus',
  }
, 
  {
    title: 'avascularVilliTotalNum',
    dataIndex: 'avascularVilliTotalNum',
    key: 'avascularVilliTotalNum',
  }
];
  
const DataTable = (props) => <Table dataSource={props.data} columns={columns} />

export default DataTable

