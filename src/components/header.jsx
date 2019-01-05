import React, { Component } from "react";
import { Avatar, Col, Row } from "antd";

class Header extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Col offset={2} xs={}>
          <Avatar size="small" alt="Slovenská verzia stránky"/>
          <Avatar size="small" alt="Anglická verzia stránky"/>
        </Col>
      </Row>
    );
  }
}

export default Header;
