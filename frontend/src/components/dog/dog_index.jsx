import React from 'react';
import DogIndexItem from './dog_index_item';

class DogIndex extends React.Component {

    componentDidMount() {
        this.props.fetchDogs();
    }

    render() {
        let Alldogs;
        
        if (this.props.dogs.length === 0) {
            return (
                <p>There are no dogs</p>
            )
        } else {
            Alldogs = this.props.dogs.map(dog => {
                return (<DogIndexItem
                    key={dog._id}
                    dog={dog}
                // posts={this.props.posts} 
                />)
            }
            )
        }

        return (
            <div className="dog-index-container">
                <div className="filter-section">
                </div>
                <h3>DOG INDEX</h3>
                <div className="dog-index-item-list">
                    {Alldogs}
                </div>
            </div>
        )
    }
}

export default DogIndex;