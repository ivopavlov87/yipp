import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  // static getDerivedStateFromProps(nextProps) {
  // if (nextProps.currentUser === true) {
  // this.props.history.push('/posts');
  // }

  // Set or clear errors
  // return ({ errors: nextProps.errors })
  // }

  // Handle field updates (called in the render method)
  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }



  // Render the session errors if there are any
  renderErrors() {
    // console.log(this.props.errors);
    return (
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user)
    .then((arg) => {
      // debugger;
      if (Object.keys(this.props.errors).length === 0) {
        this.props.closeModal()}});
  }


  handleDemo(e) {
      e.preventDefault();
      this.props.login({
      username: 'demouser',
      password: 'password'
      }).then(this.props.closeModal);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <input type="submit" value="Submit" />
            <button onClick={() => this.props.openModal("signup")}>
              Sign up
            </button>
            <br />
            <button className="modal-button" onClick={this.handleDemo}>Demo Login</button>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);