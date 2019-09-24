import React from 'react';

import ProfilePostBox from './profile_post_box';

import { Link } from 'react-router-dom';

import NavBarContainer from '../nav/navbar_container';
import { selectImagesForDog, selectOneImagesForDog } from '../../reducers/selectors.js';

import './assets/profile.css';
import noImage from "../dog/assets/no-image.png";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    // console.log(this.props.currentUser.id)
    this.props.fetchUser(this.props.currentUser.id);
    this.props.fetchUserPosts(this.props.currentUser.id);
    this.props.fetchImages();
    this.props.fetchDogs();
  }

  render() {
    // makes a aray of dogs that the current user has liked
    // debugger
    // console.log(this.props.images)
    const favoriteDogs = this.props.favoriteDogs.map((dog) => {
      const dogImage = selectOneImagesForDog(this.props.images, dog);
      return <li key={dog._id}>
        <Link to={`/dogs/${dog._id}`}>
          {dog.name}
        </Link>
        <br />
        <Link to={`/dogs/${dog._id}`}>
          <img src={`/api/images/${dogImage[0].filename}`} alt={dog.name} />
        </Link>
      </li>
    })

    // console.log(this.props.dogs)
    const userDogs = this.props.dogs.filter((dog) => {
      return this.props.currentUser.id === dog.user_id;
    })
    
    const userDogsDisplay = userDogs.map((dog) => {
      const dogImage = selectImagesForDog(this.props.images, dog);
      return <li key={dog.id}>
      <Link to={`/dogs/${dog.id}`}>
        {dog.name}
      </Link>
      <br />
      <Link to={`/dogs/${dog.id}`}>
        <img src={`/api/images/${dogImage[0].filename}`} alt={dog.name} />
      </Link>
      </li>
    })



    // let userPosts;
    // if (this.props.posts.length === 0) {
    //   userPosts = (<h3>This user has no posts!</h3>)
    // } else {
    //   userPosts = (<h2>All of this user's posts</h2>
    //     this.props.posts.map(post => {
    //       <ProfilePostBox
    //         key={post.id}
    //         post={post}
    //         currentUser={this.props.currentUser}
    //         destroyPost={this.props.destroyPost}
    //       />
    //     })
    //   )
    // }

    if (this.props.posts) {
      // debugger;
      return (
        <div>
          <NavBarContainer />
          {/* {DogListContainer} */}
          <div className="profile-container">
            <div className="profile-left-container">
              <div className="profile-left">
                <div className="default-image">
                  <img src={noImage} alt="default-profile-pic" />
                </div>
                <div className="profile-btn-container">
                  <div className="profile-buttons">
                    <Link to="/profile/dogs/new">Create a new dog</Link>
                    <br />
                    <Link to="/profile/dogs">All your dogs!</Link>
                    <br />
                    <Link to="/dogs">All dogs!</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-right-container">
              <div className="profile-right">
                <div className="profile-right-header">
                  <h2>Your Dogs:</h2>
                </div>
                <ul>{userDogsDisplay}</ul>
                <div className="profile-right-header"></div>
                  <h2>Your Favorites:</h2>
                </div>
                <ul>{favoriteDogs}</ul>
                {/* <h3>This user has no posts</h3> */}
                {/* {userPosts} */}
                <div className="profile-right-header">
                  <h2>All of your posts</h2>
                </div>
                {this.props.posts.map(post => (
                  <ProfilePostBox
                    key={post.id}
                    post={post}
                    currentUser={this.props.currentUser}
                    destroyPost={this.props.destroyPost}
                  />
                ))}
              </div>
            </div>
          </div>
        // </div>
      );
    } else {
      return (
      <div>
        <NavBarContainer />
          {/* {DogListContainer} */}
        <br />
        <Link to="/profile/dogs/new">Create a new dog</Link>
        <br />
        <Link to="/profile/dogs">All your dogs!</Link>
        <br />
        <Link to="/dogs">All dogs!</Link>
        <ul>
          {favoriteDogs}
        </ul>
        <h3>You have no posts</h3>
      </div>
      )
    }
  }
}

export default Profile;