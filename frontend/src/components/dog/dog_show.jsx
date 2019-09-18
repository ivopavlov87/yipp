import React from 'react';
import dog_index_container from './dog_index_container';
import { withRouter } from 'react-router-dom';

class DogShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchDog(this.props.match.params.dogId)
    }

    render() {
        if (!this.props.dog) {
            return null;
        }
        return (
            <div className="dog-show-container">
                <div className="dog-show-details">
                    {this.props.dog.name}
                    {/* {this.props.dog.user.name} */}
                    {this.props.dog.location}
                    {this.props.dog.breed}
                    {this.props.dog.dob}
                    {this.props.dog.weight}
                    {this.props.dog.size}
                    {this.props.dog.energy}
                    {this.props.dog.vaccinations}
                </div>
            </div>
        )
    }
}

export default withRouter(DogShow);