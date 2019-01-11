import React from "react";
import { Collapse, Divider, Form, Icon, Input, Button, Checkbox } from "antd";
import "../style/accountForm.css";

const FormItem = Form.Item;
const Panel = Collapse.Panel;

class AccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNicks: ["ninetimesperday69"],
      nick: "",
      heslo: "",
      email: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        console.log("Chyba, pozri pouzivatelsky formular(R / P)!");
      }
    });
  };

  handleNickInputChange = e => {
    this.setState({
      nick: e.target.value
    });
  };

  handlePassInputChange = e => {
    this.setState({
      heslo: e.target.value
    });
  };

  handleEmailInputChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  emitEmpty = () => {
    this.setState({ nick: "" });
  };

  clearPassInput = () => {
    this.setState({ heslo: "" });
  };

  clearEmailInput = () => {
    this.setState({ email: "" });
  };

  handleLogin = () => {};

  render() {
    const { getFieldDecorator } = this.props.form;
    const { nick, heslo, email } = this.state;

    return (
      <div>
        <Collapse defaultActiveKey={["1"]} className="account-form-collapse">
          <Panel header="Registrácia / Prihlásenie">
            <Form className="account-form-container">
              <FormItem>
                {getFieldDecorator("nickName", {
                  rules: [
                    {
                      required: true,
                      message: `Nehanbi sa, ${this.state.randomNicks[0]}`
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" className="account-form-input-prefix" />
                    }
                    suffix={
                      nick ? (
                        <Icon type="close-circle" onClick={this.emitEmpty} />
                      ) : null
                    }
                    placeholder="Prezývka"
                    value={this.state.nick}
                    onChange={this.handleNickInputChange}
                  />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator("pass", {
                  rules: [
                    {
                      required: true,
                      message: "Najlepšie také, ktoré nikde nepoužívaš!"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" className="account-form-input-prefix" />
                    }
                    suffix={
                      this.state.heslo ? (
                        <Icon
                          type="close-circle"
                          onClick={this.clearPassInput}
                        />
                      ) : null
                    }
                    type="password"
                    placeholder="Heslo"
                    value={heslo}
                    onChange={this.handlePassInputChange}
                  />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      required: true,
                      message: "Taký, ktorý používaš..."
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="mail" className="account-form-input-prefix" />
                    }
                    suffix={
                      this.state.email ? (
                        <Icon
                          type="close-circle"
                          onClick={this.clearEmailInput}
                        />
                      ) : null
                    }
                    placeholder="E-mail"
                    value={email}
                    onChange={this.handleEmailInputChange}
                  />
                )}
              </FormItem>

              <div className="account-form-remember-forgot">
                {getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: false
                })(
                  <Checkbox className="account-form-checkbox" disabled>
                    Zapamätať si ma
                  </Checkbox>
                )}
                <a
                  className="account-form-forgot"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ups, zabudol som heslo
                </a>
              </div>

              <div className="account-form-button-div">
                <Button
                  className="account-form-button"
                  type={"primary"}
                  disabled={
                    this.state.nick.length > 0 &&
                    this.state.heslo.length > 0 &&
                    this.state.email.length > 0
                      ? false
                      : true
                  }
                  htmlType="submit"
                  onClick={this.handleLogin}
                >
                  Prihlásiť sa
                </Button>
              </div>

              <div className="account-form-divider-div">
                <Divider id="account-form-divider">alebo</Divider>
              </div>

              <div className="account-form-register-div">
                <span id="account-form-register">Registrovať sa</span>
              </div>
            </Form>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

const WrappedAccountForm = Form.create()(AccountForm);

export default WrappedAccountForm;
