import React from 'react';

import ProfilePostBox from './profile_post_box';

import { Link } from 'react-router-dom';

import NavBarContainer from '../nav/navbar_container';


class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    // console.log(this.props.currentUser.id)
    this.props.fetchUserPosts(this.props.currentUser.id);
    this.props.fetchUser(this.props.currentUser.id);
  }

  render() {
    // makes a aray of dogs that the current user has liked
    // debugger
    const favoriteDogs = this.props.favoriteDogs.map((dog) => {
      return <li key={dog._id}>{dog.name}</li>
    })


    if (this.props.posts.length === 0 || favoriteDogs.length ) {
      return (<div>
        <ul>
          {favoriteDogs}
        </ul>
        <h3>This user has no posts</h3>
        <Link to="/profile/dogs/new">Create a new dog</Link>
        <br />
        <Link to="/profile/dogs">All the dogs!</Link>
      </div>
        )
    } else {
      return (
        <div>
          <NavBarContainer />
          <div>
            <Link to="/profile/dogs/new">Create a new dog</Link>
            <br />
            <Link to="/profile/dogs">All the dogs!</Link>
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
      </div>
      );
    }
  }
}

export default Profile;