import React from "react"
import "./HeaderContentFooter.css"
import { Layout, Menu, Breadcrumb } from 'antd';
import PathForm from "../PathForm"

const { Header, Content, Footer } = Layout;
const HeaderContentFooter = ()=>(
    <Layout>
    <Header style={{ position: 'fixed', width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Add</Menu.Item>
        <Menu.Item key="2">Edit</Menu.Item>
        <Menu.Item key="3">Search</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
        <PathForm/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
)

export default HeaderContentFooter 
