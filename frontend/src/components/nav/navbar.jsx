import React from 'react';
import { Link, withRouter } from 'react-router-dom'

import SearchContainer from './search_container'
import logo from '../nav/assets/logo.png'
import Modal from '../modal/modal';

import './assets/navbar.css'
// import './assets/navbar.css';
// import SearchContainer from './search_container'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="nav-bar-logged-in">
          <div>
            <Link to="/profile">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div>
            <SearchContainer />
          </div>
          <div>
            {/* <Link to={"/posts"}>All Posts</Link>&nbsp;&nbsp; */}
            <Link to={"/profile"}><button className="navbutton"><p>Profile</p></button></Link>&nbsp;&nbsp;
            <button className="navbutton" onClick={this.logoutUser}><p>Log Out</p></button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="nav-bar-logged-out" id="logged-out">
          <Modal />
          <div>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <SearchContainer />

          <div>
            <button className="navbutton" onClick={() => this.props.openModal('signup')}><p>Sign Up</p></button>
            <button className="navbutton" onClick={() => this.props.openModal('login')}><p>Log In</p></button>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-bar-container">
        {/* <div className="nav-bar-items"> */}
          {this.getLinks()}
        {/* </div> */}
      </div>
    );
  }

}

export default withRouter(NavBar);