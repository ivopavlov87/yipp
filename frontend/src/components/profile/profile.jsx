import React from 'react';
import { Link } from 'react-router-dom';

import PostBox from '../posts/post_box';

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

  // static getDerivedStateFromProps(newState) {
  //   return ({ posts: newState.posts });
  // }

  render() {
    if (this.props.posts.length === 0) {
      return (<div>This user has no posts</div>)
    } else {
      return (
        <div>
          <Link to="/profile/dogs">Create a new dog</Link>
          <h2>All of this user's posts</h2>
          {this.props.posts.map(post => (
            <PostBox key={post.id} post={post} currentUser={this.props.currentUser} />
          ))}
        </div>
      );
    }
  }
}

export default Profile;