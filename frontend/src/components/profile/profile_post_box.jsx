import React from 'react';
import { Link } from 'react-router-dom';
import {formatDate} from '../../util/date_util';

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

    const formattedDate = formatDate(this.props.post.date)
    const boldText = {fontWeight: 'bold'}

    return (
      <div>
        <h2 style={boldText}>Dog name: <Link to={`/dogs/${this.props.post.dog}`}>{this.props.post.dogName}</Link></h2>
        <h3>{this.props.post.text}</h3>
        <h4>Temperament rating: {this.props.post.temperamentRating}</h4>
        <br/>
        <div>AuthorName: {this.props.post.authorName}</div>
        <div>Date posted: {formattedDate}</div>
        {/* <div>PostId: {this.props.post.id}</div> */}
        {postButtons}
        <br />
        <br/>
      </div>
    );
  }
}

export default ProfilePostBox;