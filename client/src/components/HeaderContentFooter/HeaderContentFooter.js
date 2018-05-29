import React from "react"
import "./HeaderContentFooter.css"
import { Layout, Menu, Breadcrumb } from 'antd';
import PathForm from "../PathForm"
import AllForm from "../AllForm"

const { Header, Content, Footer } = Layout;
class HeaderContentFooter extends React.Component {
    state = {
        activeKey: "1"
    }
    handleMenuClick = (event) => {
        this.setState({activeKey: event.key})
    };
    renderContent = (key) => {
        switch(key){
            case "1":
                return <PathForm/>;
            // case "2":
            //     return <GaWtTable/>;
            case "3":
                return <AllForm/>;
            default:
                return <h1>Default</h1>
        }
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
                <Menu.Item onClick={this.handleMenuClick} key="1">Add</Menu.Item>
                <Menu.Item onClick={this.handleMenuClick} key="2">Edit</Menu.Item>
                <Menu.Item onClick={this.handleMenuClick} key="3">All Data</Menu.Item>
            </Menu>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                {this.renderContent(this.state.activeKey)}
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
            </Footer>
        </Layout>
    )}
}
export default HeaderContentFooter 
