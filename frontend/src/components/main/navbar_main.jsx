import React from 'react';
import { Link, withRouter } from 'react-router-dom'

// import SearchContainer from '../nav/search_container'
// import logo from '../nav/assets/logo.png'
// import Modal from '../modal/modal';
// this line is to be deleted

import '../nav/assets/navbar.css';
// import './assets/navbar.css';
// import SearchContainer from './search_container'

class NavBarMain extends React.Component {
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
                <div className="nav-bar-main-logged-in">
                    <div id='profile'><Link to={"/profile"}>Profile</Link></div>
                    <button onClick={this.logoutUser}><p>Log Out</p></button>
                </div>
            );
        } else {
            return (
                <div className="nav-bar-main-logged-out">
                    <div>
                        <button id="signup" onClick={() => this.props.openModal('signup')}><p>Sign Up</p></button>
                        <button id="login" onClick={() => this.props.openModal('login')}><p>Log In</p></button>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="nav-bar-main-container">
                {/* <div className="nav-bar-items"> */}
                {this.getLinks()}
                {/* </div> */}
            </div>
        );
    }

}

export default withRouter(NavBarMain);