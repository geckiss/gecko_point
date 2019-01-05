import React, { Component } from "react";
import { Menu, Icon } from "antd";
import "../style/menu.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class NavigationMenu extends React.Component {
  state = {};

  render() {
    return (
      <Menu mode="inline" theme="dark" className="menu-items">
        <SubMenu
          title={
            <span>
              <Icon type="desktop" />
              <span>Programming</span>
            </span>
          }
          className="menu-items"
        >
          <SubMenu title="C / C++" className="menu-items">
            <Menu.Item>Basics</Menu.Item>
            <Menu.Item>Advanced</Menu.Item>
            <Menu.Item>Single-threaded console apps</Menu.Item>
            <Menu.Item>Multi-threaded console apps</Menu.Item>
            <Menu.Item>Applications with GUI</Menu.Item>
          </SubMenu>

          <SubMenu title="Java" className="menu-items">
            <Menu.Item>Basics</Menu.Item>
            <Menu.Item>Advanced</Menu.Item>
            <Menu.Item>Single-threaded console apps</Menu.Item>
            <Menu.Item>Multi-threaded console apps</Menu.Item>
            <Menu.Item>Applications with GUI</Menu.Item>
          </SubMenu>

          <SubMenu title="Assembler 32-bit" className="menu-items">
            <Menu.Item>Basics</Menu.Item>
            <Menu.Item>Advanced</Menu.Item>
            <Menu.Item>Single-threaded console apps</Menu.Item>
          </SubMenu>

          <SubMenu title="Python" className="menu-items">
            <Menu.Item>Basics</Menu.Item>
            <Menu.Item>Single-threaded console apps</Menu.Item>
            <Menu.Item>Applications with GUI</Menu.Item>
          </SubMenu>

          <SubMenu title="C#" className="menu-items">
            <Menu.Item>Basics</Menu.Item>
            <Menu.Item>Single-threaded console apps</Menu.Item>
            <Menu.Item>Applications with GUI</Menu.Item>
          </SubMenu>

          <SubMenu title="Web-dev" className="menu-items">
            <Menu.Item>Basics with HTML, CSS, JS</Menu.Item>
            <Menu.Item>jQuery</Menu.Item>
            <Menu.Item>ReactJS</Menu.Item>
          </SubMenu>
        </SubMenu>

        <SubMenu
          title={
            <span>
              <Icon type="cluster" />
              <span>Networking</span>
            </span>
          }
          className="menu-items"
        >
          <Menu.Item>CCNA</Menu.Item>
        </SubMenu>

        <SubMenu
          title={
            <span>
              <Icon type="fire" />
              <span>Workout</span>
            </span>
          }
          className="menu-items"
        >
          <Menu.Item>Bodybuilding</Menu.Item>
          <Menu.Item>Calisthenics</Menu.Item>
        </SubMenu>

        <SubMenu
          title={
            <span>
              <Icon type="customer-service" />
              <span>Gaming</span>
            </span>
          }
          className="menu-items"
        >
          <Menu.Item>HW</Menu.Item>
          <Menu.Item>SW</Menu.Item>
        </SubMenu>

        <SubMenu
          title={
            <span>
              <Icon type="file-search" />
              <span>Miscellaneous</span>
            </span>
          }
          className="menu-items"
        />
      </Menu>
    );
  }
}

export default NavigationMenu;
