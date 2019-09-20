import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostCompose from '../posts/post_compose';

class DogShow extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchDog(this.props.match.params.dogId)
    }


    handleDelete(e) {
        e.preventDefault();
        this.props.deleteDog(this.props.dog.id);
        this.props.history.push('/profile/dogs');
    }

    render() {
        
        let postComposeThing;
        if (this.props.currentUser) {
            postComposeThing = (
                <PostCompose
                    currentUser={this.props.currentUser}
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
            </div>
        } else {
            dogLink = <div></div>
        }


        return (
            <div className="dog-show-container">
                <div className="dog-show-details">
                    <li>{this.props.dog.name}
                        </li>
                    <li>{owner.username}
                        </li>
                    <li>{this.props.dog.location}
                        </li>
                    <li>{this.props.dog.breed}
                        </li>
                    <li>{this.props.dog.dob}
                        </li>
                    <li>{this.props.dog.weight}
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
                The dog's id is: {this.props.dog.id}
            </div>
        )
    }
}

export default withRouter(DogShow);