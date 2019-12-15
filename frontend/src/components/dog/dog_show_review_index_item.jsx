import React from 'react';
import { formatDate } from '../../util/date_util'

const ReviewIndexItem = (props) => {
    const formatted = formatDate(props.post.date)
    return (
        <div className="dog-show-review-index-item" >
            <div className="dog-show-review-item-date">
                <p>{formatted}</p>
            </div>
            <div className='dog-show-review-item-container'>
                <div className="dog-show-review-index-item-detail-author">
                    <p>Reviewed by: {props.post.authorName}</p>
                </div>
                <div className="dog-show-review-index-item-details-text">
                    <div className="dog-show-review-index-item-detail">
                        <p className="dog-show-review-index-item-text">{props.post.text}</p>
                        <p id="dog-show-review-index-item-detail-rating">{props.post.authorName} gives {props.post.dogName}'s temperament': {props.post.temperamentRating} Yipps.</p>
                    </div>
                </div>
            </div>
            <br />
        </div >
    )
}

export default ReviewIndexItem;