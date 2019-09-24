import React from 'react';
import { Link } from 'react-router-dom';

import { formatAge } from '../../util/time_util'
import noImage from './assets/no-image.png'

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
        // let firstPostAuthor;
        // let firstPostRate;
        // let firstPostDate;
        if (this.props.firstPost && this.props.firstPost.text){
            firstPostText  = this.props.firstPost.text;
            // firstPostRate  = this.props.firstPost.temperamentRating;
            // firstPostAuthor  = this.props.firstPost.authorName;
            // firstPostDate  = this.props.firstPost.date;
        }

        let latestReview;
        if (this.props.posts.length !== 0){
            latestReview = <li>
                        <ul>
                    <li className='dog-review'>
                        " {firstPostText} "
                    </li>
                    {/* <li>
                        Rating: {firstPostRate}/10 paws
                        </li>
                    <li>
                        Author: {firstPostAuthor}
                    </li>
                    <li>
                        Date: {firstPostDate}
                    </li> */}
                </ul>
            </li>
        }

        let dogRatingTotal = 0
        this.props.posts.map(post => {
            return dogRatingTotal += post.temperamentRating
        })
        let dogRatingAvg = (dogRatingTotal / (this.props.posts).length) ? `${(dogRatingTotal / (this.props.posts).length).toPrecision(2)} paws` : "This dog has no reviews"

        const dogAge = formatAge(this.props.dog.dob)
        
        let imageUrl;

        if (this.props.images.length === 0) {
            imageUrl = noImage
        } else {
            imageUrl = `/api/images/${this.props.images[0].filename}` 
        }
        return (
            // <div className="dog-index-item-container">
            //     <div className="dog-index-item-details">
            //         <ul>
            //             <img src={imageUrl} alt=""/>
            //             <li>
            //                 <Link to={`/dogs/${this.props.dog.id}`}>{this.props.dog.name}</Link>
            //             </li>
            //             {/* <li>Ratings: </li> */}
            //             <li>Ratings: {dogRatingAvg}</li>

            //             <li>{this.props.dog.breed}
            //             </li>
            //             <li>{dogAge}
            //             </li>
            //             <li>
            //             {this.props.dog.size}</li>
            //             {latestReview}
            //         </ul>
            <div className="dog-index-item">
                <div className="dog-index-item-container">
                    <Link to={`/dogs/${this.props.dog.id}`}><img src={imageUrl} alt="" /></Link>
                    <div className="dog-index-item-details">
                        <div className='details'>
                            <div className= "info">
                                <li><Link to={`/dogs/${this.props.dog.id}`}>{this.props.dog.name}</Link></li>
                                <li>Ratings: {dogRatingAvg}</li>
                                <li>{this.props.dog.breed}</li>
                                <li>{dogAge}</li>
                                <li>{this.props.dog.size}</li>
                            </div>
                            <div className='location'>
                                <li>{this.props.dog.location}</li>
                            </div>
                        </div>
                        <div className='review'>
                            {latestReview}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DogIndexItem;