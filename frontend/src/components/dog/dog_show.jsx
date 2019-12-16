import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostCompose from '../posts/post_compose';
import ReviewIndexItem from './dog_show_review_index_item'
import NavBarContainer from '../nav/navbar_container';
import DogSlider from './dog_slider';

import { formatAge } from '../../util/time_util';
import './assets/dog-show.css';


class DogShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }
    
    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchDog(this.props.match.params.dogId);
        this.props.fetchImages();
        this.props.fetchPosts();
    }

    componentDidUpdate(nextProps) {
        if (this.props.posts.length !== nextProps.posts.length) {
            this.props.fetchPosts();
        }
    }

    uploadImage(e) {
        e.preventDefault();
        const imageObj = new FormData();
        imageObj.append('image', e.target.files[0]);
        imageObj.append('dogId', this.props.dog.id)
        this.props.createImage(imageObj)
    }


    handleDelete(e) {
        e.preventDefault();
        this.props.deleteDog(this.props.dog.id);
        this.props.history.push('/profile/dogs');
    }

    render() {
        
        let postComposeForm;
        if (this.props.dog) {
            postComposeForm = (
                <PostCompose
                    currentUser={this.props.currentUser}
                    dog={this.props.dog}
                    dogId={this.props.dog.id}
                    dogName={this.props.dog.name}
                    composePost={this.props.composePost}
                    history={this.props.history}
                    openModal={this.props.openModal}
                />
            )
        }

        if (!this.props.dog) {
            return null;
        }

        if (Object.keys(this.props.users).length === 0) {
            return null;
        }

        const vaccinations = this.props.dog.vaccinations ? "Current" : "Not current"
        const dogAge = formatAge(this.props.dog.dob)

        let owner;
        Object.values(this.props.users).forEach(user => {

            if (user._id === this.props.dog.user_id) {
                owner = user;
            }
        })

        if (!owner){
            return ""
        }

        let favoriteButton = "";
        if (this.props.currentUser) {
            favoriteButton = <div>
                <button className='dog-show-favorite-btn' onClick={() => this.props.createFavorite(this.props.dog.id)}><p>Add Favorite</p></button>
            </div>
        }


        let dogLink;
        if (owner && this.props.currentUserId && owner._id === this.props.currentUserId) {

            dogLink = <div className='dog-show-edit-section'>
                <div className="dog-show-edit-title">
                    <p>You are {this.props.dog.name}'s owner</p>
                </div>
                <div className="dog-show-edit-buttons">
                    <p>You can</p>
                    <Link to={`${this.props.dog.id}/edit`}>Edit</Link>
                    <p>Or</p>
                    <button onClick={this.handleDelete.bind(this)}>Delete</button>
                    <p>this dog profile</p>
                </div>
                <div className="dog-show-upload-photos">   
                    <input className='photo-upload-btn' type="file" name="image" id="image" onChange={this.uploadImage.bind(this)}/>
                    <p>You can</p>
                    <label for="image">Upload</label>
                    <p>a photo</p>
                </div>
            </div>
        } else {
            dogLink = <div></div>
        }


        const dogImgUrls = [];
        this.props.images.forEach(image => {
            const url = `/api/images/${image.filename}`
            dogImgUrls.push(url)
        })
        

        let dogRatingTotal = 0
        this.props.posts.map(post => {
            return dogRatingTotal += post.temperamentRating
        })

        let dogRatingAvg = (dogRatingTotal / (this.props.posts).length) ? `${(dogRatingTotal / (this.props.posts).length).toPrecision(2)} yipps`: "This dog has no reviews"

        let reviewTitle = this.props.posts.length === 0 ? <p>This dog has no reviews.</p> : <p>Reviews:</p>

        return (
            <div>
                <NavBarContainer />
                <div className="dog-show-container">
                    <div className='dog-show-slideshow-container'>
                        <DogSlider imgUrls={dogImgUrls} />
                    </div>  

                    <div className="dog-show-details">
                            <div className='dog-show-details-section'>
                                <div className='dog-show-info'>
                                    <p id='dog-show-dog-name'>{this.props.dog.name}</p>
                                    <p id='dog-show-dog-ratings'>{dogRatingAvg}</p>
                                    {favoriteButton}
                                </div>
                                <div className="dog-show-details-stats">
                                    <p>Gender: {this.props.dog.gender}
                                        </p>
                                    <p>Owner: {owner.username}
                                        </p>
                                    <p>Location: {this.props.dog.location}
                                        </p>
                                    <p>Breed: {this.props.dog.breed}
                                    </p>
                                </div>
                                <div className="dog-show-details-stats">
                                    <p>Age: {dogAge}
                                        </p>
                                    <p>Weight: {this.props.dog.weight} lbs
                                        </p>
                                    <p>Size: {this.props.dog.size}
                                        </p>
                                    <p>Energy: {this.props.dog.energy}
                                        </p>
                                    <p>Vaccinations: {vaccinations}
                                        </p>
                                </div>
                            </div>
                    </div>
                    {dogLink}
                    <div className="dog-show-review-section">
                        {postComposeForm}
                        <h1>{reviewTitle}</h1>
                        <div className="dog-show-review-index">
                            {this.props.posts.map(post => (
                                <ReviewIndexItem
                                    key={post.id}
                                    post={post}
                                />
                            ))}

                        </div> 
                    </div>
                    

                </div>
            </div>
           
        )
    }
}

export default withRouter(DogShow);