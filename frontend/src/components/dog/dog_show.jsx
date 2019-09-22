import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostCompose from '../posts/post_compose';
import DogShowPost from './dog_show_post_box';

import { formatAge } from '../../util/time_util'

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
        
        let postComposeThing;
        if (this.props.currentUser && this.props.dog) {
            postComposeThing = (
                <PostCompose
                    currentUser={this.props.currentUser}
                    dog={this.props.dog}
                    dogId={this.props.dog.id}
                    dogName={this.props.dog.name}
                    composePost={this.props.composePost}
                    history={this.props.history}
                    // match={this.props.match}
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
            dogLink = <div className='dog-links'>
                <Link to={`${this.props.dog.id}/edit`}>Edit</Link>
                <button onClick={this.handleDelete.bind(this)}>Delete</button>
                <br/>
                <div>Upload a photo:</div>
                <input type="file" name="image" onChange={this.uploadImage.bind(this)}/>
            </div>
        } else {
            dogLink = <div></div>
        }

        const dogImages = this.props.images.map(image => {
            return <img key={image._id} src={`/api/images/${image.filename}`} alt=""/>
        })

        return (
            <div className="dog-show-container">
                <div className="dog-show-details">
                    <div>
                        {dogImages}
                    </div>
                    <li>{this.props.dog.name}
                        </li>
                    <li>{this.props.dog.gender}
                    </li>
                    <li>{owner.username}
                        </li>
                    <li>{this.props.dog.location}
                        </li>
                    <li>{this.props.dog.breed}
                        </li>
                    <li>{dogAge}
                        </li>
                    <li>{this.props.dog.weight} lb
                        </li>
                    <li>{this.props.dog.size}
                        </li>
                    <li>{this.props.dog.energy}
                        </li>
                    <li>
                        {vaccinations}
                    </li>
                </div>
                {dogLink}
                <br/>
                {postComposeThing}
                The dog's name is: {this.props.dog.name}
                <br />
                The dog's id is: {this.props.dog.id}
                <br/>
                {this.props.posts.map(post => (
                    <DogShowPost
                        key={post.id}
                        post={post}
                        currentUser={this.props.currentUser}
                        destroyPost={this.props.destroyPost}
                    />
                ))}
            </div>
        )
    }
}

export default withRouter(DogShow);