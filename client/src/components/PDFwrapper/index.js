import React from "react";
import { Button } from 'antd';
import Report from "../Report";
import { PDFExport } from '@progress/kendo-react-pdf';

class PDFwrapper extends React.Component {

    report = {};

    exportPDF = () => {
        this.report.save();
    };

    render(){
        return (
            <div>
                <Button type="primary" icon="download" onClick={this.exportPDF}>
                    Download
                </Button>
                <PDFExport
                    fileName={`${this.props.PDFdata.sampleId}.pdf`}
                    title={`Placenta pathology report`}
                    subject="subject"
                    keywords="keyword"
                    ref={(report) => this.report = report}
                    scale={0.8}
                    paperSize="A4"
                    margin="2cm"
                >
                    <Report data = {this.props.PDFdata}/>
                </PDFExport>      
            </div>
        )
    }
}

export default PDFwrapper;