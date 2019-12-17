import React from 'react';
import { withRouter } from 'react-router-dom';

import "../modal/modal.css";
import logo from './assets/icon.png';
 

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  // componentDidUpdate(nextProps) {
  //   if (nextProps.signedIn === true) {
  //     this.props.history.push('/posts');
  //   }

  //   return ({ errors: nextProps.errors })
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    // const sleep = ms => new Promise(res => setTimeout(res, ms));

    this.props.signup(user)
    .then((arg) => {
      if (Object.keys(this.props.errors).length === 0) {
        this.props.closeModal()
      }
    });
  };
    // await sleep(250)
    // this.props.login(user);
    // this.props.history.push('/profile');
    // this.props.history.push('/profile');


  renderErrors() {
    return (
      <ul className="modal-ul">
        {Object.keys(this.props.errors).map((error, i) => (
          <li className= "modal-li" key={`error-${i}`}>
          {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <div className="modal-container">
        <form className="modal-form" onSubmit={this.handleSubmit}>
            <div id="modal-form-logo">
              <img id="modal-form-logo-icon" src={logo} alt="logo" />
            </div>
            <h1 className="modal-header">Welcome to Yipp</h1>
            <br />
            <h3 className="modal-fields">Email</h3>
            <input
              className="modal-input"
              type="email"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <h3 className="modal-fields">Username</h3>
            <input
              className="modal-input"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
            <h3 className="modal-fields">Password</h3>
            <input
              className="modal-input"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <h3 className="modal-fields">Confirm Password</h3>
            <input
              className="modal-input"
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />
            <span className="modal-errors">{this.renderErrors()}</span>
            {/* <br /> */}
            <input className="modal-button" type="submit" value="Submit" />
            <br />
            <button
              className="modal-button"
              onClick={() => this.props.openModal("login")}
            >
              Go to Login
            </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);