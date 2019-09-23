import React from 'react';
import { Link, withRouter } from 'react-router-dom'

// import SearchContainer from '../nav/search_container'
// import logo from '../nav/assets/logo.png'
// import Modal from '../modal/modal';

import '../nav/assets/navbar.css'
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
                    <div>
                        <button><Link to={"/profile"}>Profile</Link></button>&nbsp;&nbsp;
                        <button onClick={this.logoutUser}>Logout</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="nav-bar-main-logged-out">
                    <div>
                        <button className="navbutton" onClick={() => this.props.openModal('signup')}>Sign Up</button>
                        <button className="navbutton" onClick={() => this.props.openModal('login')}>Log In</button>
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