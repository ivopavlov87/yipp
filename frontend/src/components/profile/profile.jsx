import React from 'react';

import ProfilePostBox from './profile_post_box';

import { Link } from 'react-router-dom';




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
  }

  render() {
    if (this.props.posts.length === 0) {
      return (<div>
        <h3>This user has no posts</h3>
        <Link to="/profile/dogs/new">Create a new dog</Link>
        <br />
        <Link to="/profile/dogs">All the dogs!</Link>
      </div>
        )
    } else {
      return (
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
      );
    }
  }
}

export default Profile;