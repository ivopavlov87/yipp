import React from 'react';
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

  static getDerivedStateFromProps(newState) {
    return ({ posts: newState.posts });
  }

  render() {
    if (this.state.posts.length === 0) {
      return (<div>This user has no posts</div>)
    } else {
      return (
        <div>
          <h2>All of this user's posts</h2>
          {this.state.posts.map(post => (
            <PostBox key={post._id} text={post.text} />
          ))}
        </div>
      );
    }
  }
}

export default Profile;