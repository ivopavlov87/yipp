import React from 'react';
import { Link } from 'react-router-dom';

class ProfilePostBox extends React.Component {

  

  render() {
    // debugger;
    let postButtons;
    if (this.props.currentUser.id === this.props.post.user) {
      postButtons = (
        <div>
          <Link to={`/posts/${this.props.post.id}/edit`}>Edit this post</Link>
          &nbsp;&nbsp;
          <Link to={`/profile`} onClick={() =>
            this.props.destroyPost(`${this.props.post.id}`)
          }>Delete this post</Link>
        </div>
      );
    }

    return (
      <div>
        <h2>Dog name: {this.props.post.dogName}</h2>
        <h3>{this.props.post.text}</h3>
        <h4>Temperament rating: {this.props.post.temperamentRating}</h4>
        <div>Date posted: {this.props.post.date}</div>
        <div>AuthorName: {this.props.post.authorName}</div>
        <div>PostId: {this.props.post.id}</div>
        {postButtons}
      </div>
    );
  }
}

export default ProfilePostBox;