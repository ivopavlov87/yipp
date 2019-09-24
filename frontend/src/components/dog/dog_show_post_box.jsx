import React from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '../../util/date_util'

class DogProfilePostBox extends React.Component {

    render() {
        let postButtons;
        if (this.props.currentUser && this.props.currentUser.id === this.props.post.user) {
            postButtons = (
                <div>
                    <Link to={`/posts/${this.props.post.id}/edit`}>Edit this post</Link>
                    &nbsp;&nbsp;
                    <Link to={`/profile`} onClick={() =>
                        this.props.destroyPost(`${this.props.post.id}`)
                    }>Delete this post</Link>
                </div>
            );
        } else {
            postButtons = <div></div>
        }

        const formatted = formatDate(this.props.post.date)

        return (
            <div className="dog-show-review-index-item">
                <div className="dog-show-review-item-date">
                    <p>{formatted}</p>
                </div>
                <div className='dog-show-review-item-container'>
                    <div className="dog-show-review-index-item-detail-author">
                        <p>Reviewed by: {this.props.post.authorName}</p>
                    </div>
                    <div className="dog-show-review-index-item-details-text">
                        <div className="dog-show-review-index-item-detail">
                            <p className= "dog-show-review-index-item-text">{this.props.post.text}</p>
                            <p id="dog-show-review-index-item-detail-rating">{this.props.post.authorName} gives {this.props.post.dogName}'s temperament': {this.props.post.temperamentRating} Paws.</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="dog-show-review-index-item-detail">
                    {postButtons}
                </div>
            </div>

        );
    }
}

export default DogProfilePostBox;




