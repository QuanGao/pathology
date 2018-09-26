import React from "react"
import "./HeaderContentFooter.css"
import { Layout, Menu} from 'antd';
import PathForm from "../PathForm"
import AllForm from "../AllForm"
import SearchBar from "../SearchBar"
import API from "../../utils/API"
import Report from "../Report"
import GaWtCal from "../../utils/GaWtCal.js"

const { Header, Content, Footer } = Layout;
class HeaderContentFooter extends React.Component {
    state = {
        activeKey: "2",
        submittedData: null,
        submitted: false,
        allData: []
    }
    handleMenuClick = (event) => {     
        this.setState({
            activeKey: event.key,
            submittedData: null,
            submitted: false
        })
    };

    renderContent = (key) => {
        switch(key){
            case "1":
                return <SearchBar/>;
            case "2":
                console.log("submitted data", this.state.submittedData)               
                return this.state.submitted? <Report data={this.state.submittedData}/>:
                <PathForm saveForm = {this.saveForm}/>
            case "3":
                return <AllForm data={this.state.allData}/>;          
            default:
                return <h1>Default</h1>
        }
    };

    saveForm = (values)=> {
        console.log("values line 43 in headercontentFooter: ",values)
        API.saveFormData(values).then(response => {
            const allForms = [...this.state.allData]
            const savedForm = response.data

            console.log("saved form line 48 in headercontentFooter: ", savedForm)
            
            savedForm.key =  allForms.length;
            // savedForm.date = savedForm.createdAt.split("T")[0]
            savedForm.placentaWtCondition = GaWtCal.judge(savedForm.gestationWeeks, savedForm.placentaWeight)
            allForms.push(savedForm)
            this.setState({
                submittedData:values,
                submitted: true,
                allData: allForms 
            })
        })
    };

    getAllData = () => {
        return API.findAllForms().then(
            response => {
                const tableData = [...response.data]
                tableData.forEach((obj, i) => {
                    obj.key = i;
                    obj.date = obj.createdAt.split("T")[0]
                    obj.placentaWtCondition = GaWtCal.judge(obj.gestationWeeks, obj.placentaWeight)
                })
                this.setState({
                    allData: tableData
                }, ()=>console.log("this stata all data ",this.state.allData))
            }
        )
    }

    componentDidMount () {
        this.getAllData();
    }

    render () {
        return (
        <Layout>
            <Header style={{ position: 'fixed', width: '100%' }}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item onClick={this.handleMenuClick} key="1">Search</Menu.Item>
                <Menu.Item onClick={this.handleMenuClick} key="2">Add</Menu.Item>
                <Menu.Item onClick={this.handleMenuClick} key="3">All Data</Menu.Item>
            </Menu>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 120 }}>    
                <div style={{background: '#fff', 
                padding: 50, 
                minHeight: 380, 
                maxWidth: this.state.activeKey === "3"? 3000:800,
                margin:"auto"
                }}>
                    {this.renderContent(this.state.activeKey)}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
            Bla bla bla ©2018 Created by bla bla
            </Footer>
        </Layout>
    )}
}
export default HeaderContentFooter 
