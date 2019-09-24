import React from 'react';
import DogIndexItem from './dog_index_item';
import { selectImagesForDog, selectPostsForDog } from '../../reducers/selectors';

class DogIndex extends React.Component {

    componentDidMount() {
        // debugger
        this.props.fetchImages();
        this.props.fetchDogs();
        this.props.fetchPosts();
    }

    render() {
        let Alldogs;
        
        if (this.props.dogs.length === 0) {
            return (
                <p>There are no dogs</p>
            )
        } else {
            Alldogs = this.props.dogs.map(dog => {
                // debugger;
                const images = selectImagesForDog(this.props.images, dog)
                // debugger;
                // console.log(this.props.posts)
                const posts = selectPostsForDog(this.props.posts, dog)

                return (<DogIndexItem
                    key={dog.id}
                    dog={dog}
                    images={images}
                    // fetchDogPosts={this.props.fetchDogPosts}
                    posts={posts}
                    firstPost={posts[0]}
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