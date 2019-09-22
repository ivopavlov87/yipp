import React from 'react';
import { Link } from 'react-router-dom'

import SearchContainer from './search_container'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={"/posts"}>All Posts</Link>&nbsp;&nbsp;
          <Link to={"/profile"}>Profile</Link>&nbsp;&nbsp;
          <Link to={"/new_post"}>Write a Post</Link>&nbsp;&nbsp;
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Yipp</h1>
        <SearchContainer />
        <br/>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;