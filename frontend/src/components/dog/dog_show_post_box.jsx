import React from 'react';
import { Link } from 'react-router-dom';

class DogProfilePostBox extends React.Component {

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
            <div className="dog-show-post-index">
                <div className="dog-show-post-index-items">
                    <p>Dog name: {this.props.post.dogName}</p>
                    <p>{this.props.post.text}</p>
                    <p>Temperament rating: {this.props.post.temperamentRating}</p>
                    <p>Date posted: {this.props.post.date}</p>
                    <p>AuthorName: {this.props.post.authorName}</p>
                    <p>PostId: {this.props.post.id}</p>
                    {postButtons}
                </div>
            </div>
        );
    }
}

export default DogProfilePostBox;