import React from 'react';
import { withRouter } from 'react-router-dom';

class DogShow extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchDog(this.props.match.params.dogId)
    }

    render() {
        if (!this.props.dog || Object.keys(this.props.users) === 0) {
            return null;
        }
        const vaccinations = this.props.dog.vaccinations ? "Current" : "Not current"
        // debugger

        let owner;
        Object.values(this.props.users).forEach(user => {
            if (user._id === this.props.dog.user) {
                owner = user;
            }
        })

        let dogLink;
        if (this.props.currentUser && owner._id === this.props.currentUser) {
            dogLink = <div className='dog-links'>
                <Link to={`profile/dogs/${this.props.dog.id}/edit`}>Edit</Link>
                <button onClick={() => this.props.deleteDog(this.props.dog.id)}>Delete</button>
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
            </div>
        )
    }
}

export default withRouter(DogShow);