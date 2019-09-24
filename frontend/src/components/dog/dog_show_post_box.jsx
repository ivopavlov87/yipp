import React from 'react';
import { Link } from 'react-router-dom';

class DogProfilePostBox extends React.Component {

    render() {
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
            <div className="dog-show-review-index-item">
                <p>{this.props.post.title}</p>
                <p>{this.props.post.text}</p>
                <p>{this.props.post.authorName} gives {this.props.post.dogName}'s temperament': {this.props.post.temperamentRating} Paws</p>
                <p>Reviewed by: {this.props.post.authorName}</p>
                <p>At: {this.props.post.date}</p>
                {postButtons}
            </div>

        );
    }
}

export default DogProfilePostBox;