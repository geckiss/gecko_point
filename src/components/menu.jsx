import React from "react";
import { Menu, Icon } from "antd";
import "../style/menu.css";

const SubMenu = Menu.SubMenu;

class NavigationMenu extends React.Component {
  state = {};

  render() {
    return (
      <Menu mode="inline" theme="dark" id="main-menu">
        <SubMenu
          title={
            <span>
              <Icon type="desktop" />
              <span>Programming</span>
            </span>
          }
          className="menu-menu"
        >
          <SubMenu title="C / C++" className="menu-submenu">
            <Menu.Item className="menu-item">Basics</Menu.Item>
            <Menu.Item className="menu-item">Advanced</Menu.Item>
            <Menu.Item className="menu-item">
              Single-threaded console apps
            </Menu.Item>
            <Menu.Item className="menu-item">
              Multi-threaded console apps
            </Menu.Item>
            <Menu.Item className="menu-item">Applications with GUI</Menu.Item>
          </SubMenu>

          <SubMenu title="Java" className="menu-submenu">
            <Menu.Item className="menu-item">Basics</Menu.Item>
            <Menu.Item className="menu-item">Advanced</Menu.Item>
            <Menu.Item className="menu-item">
              Single-threaded console apps
            </Menu.Item>
            <Menu.Item className="menu-item">
              Multi-threaded console apps
            </Menu.Item>
            <Menu.Item className="menu-item">Applications with GUI</Menu.Item>
          </SubMenu>

          <SubMenu title="Assembler 32-bit" className="menu-submenu">
            <Menu.Item className="menu-item">Basics</Menu.Item>
            <Menu.Item className="menu-item">Advanced</Menu.Item>
            <Menu.Item className="menu-item">
              Single-threaded console apps
            </Menu.Item>
          </SubMenu>

          <SubMenu title="Python" className="menu-submenu">
            <Menu.Item className="menu-item">Basics</Menu.Item>
            <Menu.Item className="menu-item">
              Single-threaded console apps
            </Menu.Item>
            <Menu.Item className="menu-item">Applications with GUI</Menu.Item>
          </SubMenu>

          <SubMenu title="C#" className="menu-submenu">
            <Menu.Item className="menu-item">Basics</Menu.Item>
            <Menu.Item className="menu-item">
              Single-threaded console apps
            </Menu.Item>
            <Menu.Item className="menu-item">Applications with GUI</Menu.Item>
          </SubMenu>

          <SubMenu title="Web-dev" className="menu-submenu">
            <Menu.Item className="menu-item">
              Basics with HTML, CSS, JS
            </Menu.Item>
            <Menu.Item className="menu-item">jQuery</Menu.Item>
            <Menu.Item className="menu-item">ReactJS</Menu.Item>
          </SubMenu>
        </SubMenu>

        <SubMenu
          title={
            <span>
              <Icon type="cluster" />
              <span>Networking</span>
            </span>
          }
          className="menu-menu"
        >
          <Menu.Item id="ccna">CCNA</Menu.Item>
        </SubMenu>

        <SubMenu
          title={
            <span>
              <Icon type="fire" />
              <span>Workout</span>
            </span>
          }
          className="menu-menu"
        >
          <Menu.Item id="bodybuilding">Bodybuilding</Menu.Item>
          <Menu.Item id="calisthenics">Calisthenics</Menu.Item>
        </SubMenu>

        <SubMenu
          title={
            <span>
              <Icon type="customer-service" />
              <span>Gaming</span>
            </span>
          }
          className="menu-menu"
        >
          <Menu.Item id="hw">HW</Menu.Item>
          <Menu.Item id="sw">SW</Menu.Item>
        </SubMenu>

        <SubMenu
          title={
            <span>
              <Icon type="file-search" />
              <span>Miscellaneous</span>
            </span>
          }
          className="menu-menu"
          disabled
        />

        <div id="menu-divider" />
      </Menu>
    );
  }
}

export default NavigationMenu;
