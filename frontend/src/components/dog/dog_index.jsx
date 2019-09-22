import React from 'react';
import DogIndexItem from './dog_index_item';
import { selectImagesForDog } from '../../reducers/selectors';

class DogIndex extends React.Component {

    componentDidMount() {
        // debugger
        this.props.fetchImages();
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
                
                const images = selectImagesForDog(this.props.images, dog) 

                return (<DogIndexItem
                    key={dog.id}
                    dog={dog}
                    images={images}
                // posts={this.props.posts} 
                />)
            }
            )
        }

        return (
            <div className="dog-index-container">
                <div className="filter-section">
                </div>
                <h3>My Dogs:</h3>
                <div className="dog-index-item-list">
                    {Alldogs}
                </div>
            </div>
        )
    }
}

export default DogIndex;