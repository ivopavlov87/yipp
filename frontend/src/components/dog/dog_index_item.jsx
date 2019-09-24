import React from 'react';
import { Link } from 'react-router-dom';

import { formatAge } from '../../util/time_util'

// import { selectPostsForDog } from '../../reducers/selectors';

class DogIndexItem extends React.Component {

    // componentDidMount() {
    //     this.props.fetchDogPosts(this.props.dog);
    // }

    render() {
        // const postsForDog = this.props.fetchDogPosts(this.props.dog.id);
        // console.log(postsForDog);
        // const sum = 0 
        // postsForDog.forEach(post => {
        //     sum += post.temperamentRating
        // })
        // const ratings = sum / postsForDog.length;
        let firstPostText;
        let firstPostAuthor;
        let firstPostRate;
        let firstPostDate;
        if (this.props.firstPost && this.props.firstPost.text){
            firstPostText  = this.props.firstPost.text;
            firstPostRate  = this.props.firstPost.temperamentRating;
            firstPostAuthor  = this.props.firstPost.authorName;
            firstPostDate  = this.props.firstPost.date;
        }

        let sampleReview;
        if (this.props.posts.length !== 0){
            sampleReview = <li>
                Sample Review:
                        <ul>
                    <li>
                        Post: {firstPostText}
                    </li>
                    <li>
                        Rating: {firstPostRate}/10 paws
                        </li>
                    <li>
                        Author: {firstPostAuthor}
                    </li>
                    <li>
                        Date: {firstPostDate}
                    </li>
                </ul>
            </li>
        }

        let dogRatingTotal = 0
        this.props.posts.map(post => {
            return dogRatingTotal += post.temperamentRating
        })
        let dogRatingAvg = (dogRatingTotal / (this.props.posts).length) ? `${(dogRatingTotal / (this.props.posts).length)} paws` : "This dog has no reviews"

        const dogAge = formatAge(this.props.dog.dob)
        
        let imageUrl;

        if (this.props.images.length === 0) {
            imageUrl = ''
        } else {
            imageUrl = `/api/images/${this.props.images[0].filename}` 
        }
        return (
            <div className="dog-index-item-container">
                <div className="dog-index-item-details">
                    <ul>
                        <img src={imageUrl} alt=""/>
                        <li>
                            <Link to={`/dogs/${this.props.dog.id}`}>{this.props.dog.name}</Link>
                        </li>
                        {/* <li>Ratings: </li> */}
                        <li>Ratings: {dogRatingAvg}</li>

                        <li>{this.props.dog.breed}
                        </li>
                        <li>{dogAge}
                        </li>
                        <li>
                        {this.props.dog.size}</li>
                        {sampleReview}
                    </ul>
                </div>
            </div>
        )
    }
}

export default DogIndexItem;