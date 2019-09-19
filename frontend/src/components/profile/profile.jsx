import React from 'react';
import ProfilePostBox from './profile_post_box';
// import { Link } from 'react-router-dom';

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