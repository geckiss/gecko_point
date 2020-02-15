import React, { Component } from "react";
import { Icon, Input } from "antd";
import "../style/registerFormConcept.css";

class RegisterForm extends Component {
  state = {};
  render() {
    return (
      <div id="register-form-container">
        <span>
          <Input
            id="register-nick"
            placeholder="Nick"
            prefix={<Icon type="user" />}
          />
        </span>
        <br />
        <span>
          <Input
            id="register-pass"
            type="password"
            visibilityToggle
            placeholder="Heslo"
            prefix={<Icon type="lock" />}
          />
        </span>
        <br />
        <span>
          <Input id="register-mail" placeholder="Email" prefix={<Icon />} />
        </span>
      </div>
    );
  }
}

export default RegisterForm;
