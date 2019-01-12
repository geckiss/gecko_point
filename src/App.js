import React, { Component } from "react";
import { Layout, Breadcrumb } from "antd";
import NavigationMenu from "./components/menu.jsx";
import WrappedAccountForm from "./components/accountForm.jsx";
import Slider from "./components/slider.jsx";
import TrioReviews from "./components/mostUsefulReviews.jsx";
import TrioNews from "./components/mostRecentNews.jsx";
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
          <div className="logo" />
          <NavigationMenu />
        </Sider>
        <Layout>
          <Header id="header" />
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Domov</Breadcrumb.Item>
            </Breadcrumb>

            <div style={{ background: "#fff", padding: 24, height: 425 }}>
              <span>
                <WrappedAccountForm />
              </span>
              Obsah
            </div>
            <Slider />
            <TrioReviews />
            <TrioNews />
          </Content>
          <Footer style={{ textAlign: "center" }}>Created by G2 ©2019</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
