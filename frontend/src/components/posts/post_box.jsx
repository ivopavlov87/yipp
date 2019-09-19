import React from 'react';
import { Link } from 'react-router-dom';

class PostBox extends React.Component {

  render() {
  // debugger;
  let postButtons;
    if (this.props.currentUser.id === this.props.post.user_id) {
      //this.props.currentUser === this.props.post.user
      postButtons = (
        <div>
          <Link to={`/posts/${this.props.post.id}/edit`}>Edit this post</Link>
          &nbsp;&nbsp;
          <Link to={`/posts/${this.props.post.id}`}>Delete this post</Link>
        </div>
      );
    } else {
    }

    // let username = fetchUser(this.props.post.user_id).username + "a;lsdkfja;lskdfj"

    return (
      <div>
        <h3>{this.props.post.text}</h3>
        <h4>Temperament rating: {this.props.post.temperamentRating}</h4>
        <div>Date posted: {this.props.post.date}</div>
        <div>Author: {this.props.post.user_id}</div>
        {postButtons}
        {/* {this.props.postAuthor.username} - username??? */}
      </div>
    );
  }
}

export default PostBox;