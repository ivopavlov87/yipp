import React from 'react';

import ProfilePostBox from './profile_post_box';

import { Link } from 'react-router-dom';

import NavBarContainer from '../nav/navbar_container';
import { selectImagesForDog, selectOneImagesForDog } from '../../reducers/selectors.js';


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
      return <li key={dog._id}>{dog.name}&nbsp;{dog.breed}&nbsp;<img src={`/api/images/${dogImage[0].filename}`} alt={dog.name}/></li>
    })

    // console.log(this.props.dogs)
    const userDogs = this.props.dogs.filter((dog) => {
      return this.props.currentUser.id === dog.user_id;
    })
    
    const userDogsDisplay = userDogs.map((dog) => {
      const dogImage = selectImagesForDog(this.props.images, dog);
      return <li key={dog.id}>{dog.name}&nbsp;{dog.breed}&nbsp;<img src={`/api/images/${dogImage[0].filename}`} alt={dog.name} /></li>
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
      return (<div>
        <NavBarContainer />
        {/* {DogListContainer} */}
        <Link to="/profile/dogs/new">Create a new dog</Link>
        <br />
        <Link to="/profile/dogs">All your dogs!</Link>
        <br />
        <Link to="/dogs">All dogs!</Link>
        <h2>Your Dogs:</h2>
        <ul>
          {userDogsDisplay}
        </ul>
        <h2>Your Favorites:</h2>
        <ul>
          {favoriteDogs}
        </ul>
        {/* <h3>This user has no posts</h3> */}
        {/* {userPosts} */}
        <h2>All of this user's posts</h2>
        {this.props.posts.map(post => (
              <ProfilePostBox
                key={post.id}
                post={post}
                currentUser={this.props.currentUser}
                destroyPost={this.props.destroyPost}
              />
            ))}
      </div>
        )
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
        <h3>This user has no posts</h3>
      </div>
      )
    }
  }
}

export default Profile;