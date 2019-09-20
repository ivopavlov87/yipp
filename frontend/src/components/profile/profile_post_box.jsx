import React from 'react';
import { Link } from 'react-router-dom';

class ProfilePostBox extends React.Component {

  render() {
    // debugger;
    let postButtons;
    if (this.props.currentUser.id === this.props.post.user_id) {
      //this.props.currentUser === this.props.post.user
      // if ()
      postButtons = (
        <div>
          <Link to={`/posts/${this.props.post.id}/edit`}>Edit this post</Link>
          &nbsp;&nbsp;
          {/* <Link to={`/posts/${this.props.post.id}`}>Delete this post</Link> */}
          <Link to={`/profile`} onClick={() =>
            this.props.destroyPost(`${this.props.post.id}`)
          }>Delete this post</Link>
        </div>
      );
    } else {
    }

    // let theUser = this.props.fetchUser(this.props.post.user_id)
    // console.log(theUser)
    // let username = this.props.fetchUser(this.props.post.user_id).username ? this.props.fetchUser(this.props.post.user_id).username : "blank, it's not working"

    return (
      <div>
        <h3>{this.props.post.text}</h3>
        <h4>Temperament rating: {this.props.post.temperamentRating}</h4>
        <div>Date posted: {this.props.post.date}</div>
        <div>Author: {this.props.post.user_id}</div>
        <div>PostId: {this.props.post.id}</div>
        {postButtons}
        {/* {username} - username??? */}
      </div>
    );
  }
}

export default ProfilePostBox;