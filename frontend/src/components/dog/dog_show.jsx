import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostCompose from '../posts/post_compose';
import DogShowPost from './dog_show_post_box';
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
        this.props.fetchDogPosts(this.props.match.params.dogId);
        this.props.fetchImages();
    }
    
    // componentDidUpdate() {
    //     this.props.fetchDogPosts(this.props.match.params.dogId)
    // }

    componentDidUpdate(nextProps) {
        // debugger

        if (this.props.images.length !== nextProps.images.length) {
            this.props.fetchImages();
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
        if (this.props.currentUser && this.props.dog) {
            postComposeForm = (
                <PostCompose
                    currentUser={this.props.currentUser}
                    dog={this.props.dog}
                    dogId={this.props.dog.id}
                    dogName={this.props.dog.name}
                    composePost={this.props.composePost}
                    history={this.props.history}
                    // match={this.props.match}
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

       
        let dogLink;
        if (this.props.currentUserId && owner._id === this.props.currentUserId) {

            dogLink = <div className='dog-show-edit-links'>
                <div>Edit this dog's profile:
                    <button><Link to={`${this.props.dog.id}/edit`}>Edit</Link></button>
                    <button onClick={this.handleDelete.bind(this)}>Delete</button>
                </div>
                <br/>
                <div>
                    <div>Upload a photo:</div>
                    <input type="file" name="image" onChange={this.uploadImage.bind(this)}/>
                </div>
            </div>
        } else {
            dogLink = <div className='dog-show-edit-links'></div>
        }

        // const dogImages = this.props.images.map(image => {
        //     return <img key={image._id} src={`/api/images/${image.filename}`} alt=""/>
        // })

        const dogImgUrls = [];
        // eslint-disable-next-line
        this.props.images.map(image => {
            const url = `/api/images/${image.filename}`
            dogImgUrls.push(url)
        })
        

        return (
            <div>
                <NavBarContainer />
                <div className="dog-show-container">
                    <div className='dog-show-slideshow-container'>
                        <DogSlider imgUrls={dogImgUrls} />
                    </div>  

                    <div className="dog-show-details">
                        <div className="dog-show-details-stats">
                            <p>Name: {this.props.dog.name}
                                </p>
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
                            <p>{this.props.dog.weight}
                                </p>
                            <p>Size: {this.props.dog.size}
                                </p>
                            <p>Energy: {this.props.dog.energy}
                                </p>
                            <p>Vaccinations: {vaccinations}
                                </p>
                        </div>
                    </div>

                    <div className="dog-show-edit-section">
                        {dogLink}
                        {postComposeForm}

                        {this.props.posts.map(post => (
                            <DogShowPost
                                key={post.id}
                                post={post}
                                currentUser={this.props.currentUser}
                                destroyPost={this.props.destroyPost}
                            />
                        ))}
                    </div>

                </div>
            </div>
           
        )
    }
}

export default withRouter(DogShow);