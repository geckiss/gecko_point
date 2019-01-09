import React, { Component } from "react";
import { Layout, Breadcrumb } from "antd";
import NavigationMenu from "./components/menu.jsx";
import RegisterForm from "./components/registerFormConcept.jsx";
import "./style/App.css";

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout className="layout" style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          theme="dark"
        >
          <NavigationMenu />
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Domov</Breadcrumb.Item>
            </Breadcrumb>

            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              Obsah
              <RegisterForm />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Created by G2 ©2019</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
