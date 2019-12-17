import React from 'react';
import DogIndexItem from './dog_index_item';
import { selectImagesForDog, selectPostsForDog } from '../../reducers/selectors';

import NavBarContainer from '../nav/navbar_container';

import './assets/dog-index.css';


class DogIndex extends React.Component {

    componentDidMount() {
        this.props.fetchImages();
        this.props.fetchPosts();
    }

    render() {
        let Alldogs;
        
        if (this.props.dogs.length === 0) {
            return (
                <div>
                    <NavBarContainer />
                    <p>There are no dogs</p>
                </div>
            )
        } else {
            Alldogs = this.props.dogs.map(dog => {
              
                const images = selectImagesForDog(this.props.images, dog)
                const posts = selectPostsForDog(this.props.posts, dog)

                return (<DogIndexItem
                    key={dog.id}
                    dog={dog}
                    images={images}
                    posts={posts}
                    firstPost={posts[0]}
                />)
            }
            )
        }

        return (
            <div>
                <NavBarContainer />
                <div className="dog-index">
                    <div className='all-dogs'>All Dogs</div>
                    <div className="dog-index-container">
                        {Alldogs}
                    </div>
                </div>
            </div>

        )
    }
}

export default DogIndex;