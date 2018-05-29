import React from "react"
import "./HeaderContentFooter.css"
import { Layout, Menu, Breadcrumb } from 'antd';
import PathForm from "../PathForm"
import AllForm from "../AllForm"
import SearchBar from "../SearchBar"



const { Header, Content, Footer } = Layout;
class HeaderContentFooter extends React.Component {
    state = {
        activeKey: "2"
    }
    handleMenuClick = (event) => {
        this.setState({activeKey: event.key})
    };

    renderContent = (key) => {
        switch(key){
            case "1":
                return <SearchBar/>;
            case "2":               
                return <PathForm/>;
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
                <Menu.Item onClick={this.handleMenuClick} key="1">Search</Menu.Item>
                <Menu.Item onClick={this.handleMenuClick} key="2">Add</Menu.Item>
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
            Bla bla bla ©2018 Created by bla bla
            </Footer>
        </Layout>
    )}
}
export default HeaderContentFooter 
