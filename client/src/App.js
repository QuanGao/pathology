import React from 'react';
import './App.css';
import { Layout, Menu} from 'antd';
import PathForm from "./components/PathForm"
import AllForm from "./components/AllForm"
import SearchBar from "./components/SearchBar"

const { Header, Content, Footer } = Layout;

class App extends React.Component {
    state = {
        activeKey: "2"
    }

    handleMenuClick = (event) => {     
        this.setState({
            activeKey: event.key
        })
    };

    renderPage = (key) => {
        switch(key){
            case "1":
                return <SearchBar/>
            case "2":           
                return <PathForm/>
            case "3":  
                return <AllForm/>     
            default:
                return <PathForm/>
        }
    };

    render () {
        return (
            <div className="App">
                <Layout>
                    <Header style={{ position: 'fixed', width: '100%', zIndex: 100 }}>
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
                    <Content style={{ padding: '0 50px', marginTop: 100, zIndex: 1 }}>    
                        <div style={{
                            background: this.state.activeKey === "2" ? '#f0f2f5':'#fff',
                            padding: this.state.activeKey === "2"? 0:20, 
                            minHeight: 380, 
                            maxWidth: this.state.activeKey === "3"? 3000:800,
                            margin:"auto"
                            }}
                        >
                            {this.renderPage(this.state.activeKey)}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Placenta pathology ©2018 Created by Jeff and Quan
                    </Footer>
                </Layout>
            </div>
        )
    }
}
export default App
