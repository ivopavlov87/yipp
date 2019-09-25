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
      posts: [],
      addDog: false,
      addFavorite: true,
      addPost: true
    };
  }

  toggleDog() {
    this.setState({ addDog: !this.state.addDog });
  }

  toggleFavorite() {
    this.setState({ addFavorite: !this.state.addFavorite });
  }

  togglePost() {
    this.setState({ addPost: !this.state.addPost });
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

    const favoriteDogs = this.props.favoriteDogs.map(dog => {
      const dogImage = selectOneImagesForDog(this.props.images, dog);
      if (dogImage[0]) {
        return (
          <li className="user-dog-li" key={dog._id}>
            <Link to={`/dogs/${dog._id}`}>
              <p className="user-dog-name">{dog.name}</p>
            </Link>
            <br />
            <Link to={`/dogs/${dog._id}`}>
              <img
                className="user-dog-img"
                src={`/api/images/${dogImage[0].filename}`}
                alt={dog.name}
              />
            </Link>
          </li>
        );
      } else {
        return "";
      }
    });

    // console.log(this.props.dogs)
    const userDogs = this.props.dogs.filter(dog => {
      return this.props.currentUser.id === dog.user_id;
    });

    const userDogsDisplay = userDogs.map(dog => {
      const dogImage = selectImagesForDog(this.props.images, dog);
      if (dogImage[0]) {
        return (
          <li className="user-dog-li" key={dog.id}>
            <Link to={`/dogs/${dog.id}`}>
              <p className="user-dog-name">{dog.name}</p>
            </Link>
            <br />
            <Link to={`/dogs/${dog.id}`}>
              <img
                className="user-dog-img"
                src={`/api/images/${dogImage[0].filename}`}
                alt={dog.name}
              />
            </Link>
          </li>
        );
      } else {
        return "";
      }
    });

    let myDog = ["profile-my-dogs"];
    let dogbtn = ["my-dogs"];
    if (this.state.addDog) {
      myDog.push("active");
      dogbtn.push("active");
    }

    let myFavorite = ["profile-favorite-dogs"];
    let favbtn = ["my-favorite"];
    if (this.state.addFavorite) {
      myFavorite.push("active");
      favbtn.push("active");
    }

    let myPosts = ["profile-posts"];
    let postbtn = ["my-reviews"];
    if (this.state.addPost) {
      myPosts.push("active");
      postbtn.push("active");
    }

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
                    <div className="profile-btn-top">
                      <button className="dog-idx">
                        <Link to="/dogs">All dogs!</Link>
                      </button>
                    </div>
                    <br />
                    <div className="profile-btn-upper">
                      <button className="new-dog">
                        <Link to="/profile/dogs/new">Create a new dog</Link>
                      </button>
                      <br />
                      <button className="dog-details">
                        <Link to="/profile/dogs">My Dogs Details</Link>
                      </button>
                    </div>
                    <br />
                    <div className="profile-btn-lower">
                      <button
                        className={dogbtn.join(" ")}
                        onClick={this.toggleDog.bind(this)}
                      >
                        My Dogs
                      </button>
                      <br />
                      <button
                        className={favbtn.join(" ")}
                        onClick={this.toggleFavorite.bind(this)}
                      >
                        My Favorite Dogs
                      </button>
                      <br />
                      <button
                        className={postbtn.join(" ")}
                        onClick={this.togglePost.bind(this)}
                      >
                        My Reviews
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-right-container">
              <div className="profile-right">
                <div className={myDog.join(" ")}>
                  <div className="profile-right-header">
                    <h2>Your Dogs:</h2>
                  </div>
                  <ul>{userDogsDisplay}</ul>
                </div>
                <div className={myFavorite.join(" ")}>
                  <div className="profile-right-header">
                    <h2>Your Favorites:</h2>
                  </div>
                  <ul>{favoriteDogs}</ul>
                </div>
                {/* <h3>This user has no posts</h3> */}
                {/* {userPosts} */}
                <div className={myPosts.join(" ")}>
                  <div className="profile-right-header">
                    <h2>All of your reviews:</h2>
                  </div>
                  <div className="profile-post-body">
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
            </div>
          </div>
        </div>
      );
    } else {
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
                    <div className="profile-btn-top">
                      <button className="all-dogs">
                        <Link to="/dogs">All dogs!</Link>
                      </button>
                    </div>
                    <br />
                    <div className="profile-btn-upper">
                      <button className="new-dog">
                        <Link to="/profile/dogs/new">Create a new dog</Link>
                      </button>
                      <br />
                      <button className="dog-details">
                        <Link to="/profile/dogs">My Dogs Details</Link>
                      </button>
                    </div>
                    <div className="profile-btn-lower">
                      <button
                        className={dogbtn.join(" ")}
                        onClick={this.toggleDog.bind(this)}
                      >
                        My Dogs
                      </button>
                      <br />
                      <button
                        className={favbtn.join(" ")}
                        onClick={this.toggleFavorite.bind(this)}
                      >
                        My Favorite Dogs
                      </button>
                      <br />
                      <button
                        className={postbtn.join(" ")}
                        onClick={this.togglePost.bind(this)}
                      >
                        My Reviews
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-right-container">
              <div className="profile-right">
                <div className={myDog.join(" ")}>
                  <div className="profile-right-header">
                    <h2>Your Dogs:</h2>
                  </div>
                  <ul>{userDogsDisplay}</ul>
                </div>
                <div className={myFavorite.join(" ")}>
                  <div className="profile-right-header">
                    <h2>Your Favorites:</h2>
                  </div>
                  <ul>{favoriteDogs}</ul>
                </div>
                <div className="profile-posts">
                  <div className="profile-right-header">
                    <h3>You have no reviews</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Profile;