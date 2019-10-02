import React from 'react';
import { withRouter } from 'react-router-dom';
import PostBox from './post_box';


class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    // console.log("component has mounted");
    this.props.fetchPosts();
  }

  // componentDidUpdate(prevProps) {
  //   console.log("component has updated");
  //   if(this.props.posts.length !== prevProps.posts.length){
  //     this.props.fetchPosts();
  //   }
  // }

  render() {
    if (this.props.posts.length === 0) {
      return (<div>There are no Posts</div>)
    } else {
      // debugger;
      return (
        <div>
          <div className="sample-post-index-container">
            {/* <h2>All Posts</h2> */}
            {this.props.posts.map(post => (
              <PostBox 
              post={post}
              key={post.id}
              currentUser={this.props.currentUser}
              fetchUser={this.props.fetchUser}
              destroyPost={this.props.destroyPost}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Post);