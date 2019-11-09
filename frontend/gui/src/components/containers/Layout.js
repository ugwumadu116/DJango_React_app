import React from 'react';
import { Layout, Menu, Breadcrumb } from "antd";
import {Link} from 'react-router-dom'


const CustomLayoutComponent = ({children}) => {
    const { Header, Content, Footer } = Layout;
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/">List</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    );
}
 
export default CustomLayoutComponent;



