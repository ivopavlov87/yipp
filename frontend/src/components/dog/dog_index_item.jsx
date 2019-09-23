import React from 'react';
import { Link } from 'react-router-dom';

import { formatAge } from '../../util/time_util'

// import { selectPostsForDog } from '../../reducers/selectors';

class DogIndexItem extends React.Component {

    render() {
        // const postsForDog = selectPostsForDog(this.props.posts, this.props.dog)
        // const sum = 0 
        // postsForDog.forEach(post => {
        //     sum += post.temperamentRating
        // })
        // const ratings = sum / postsForDog.length;

        const dogAge = formatAge(this.props.dog.dob)
        
        let imageUrl;

        if (this.props.images.length === 0) {
            imageUrl = ''
        } else {
            imageUrl = `/api/images/${this.props.images[0].filename}` 
        }
        return (
            <div className="dog-index-item">
                <div className="dog-index-item-details">
                    <Link to={`/dogs/${this.props.dog.id}`}><img src={imageUrl} alt="" /></Link>
                    <div className="dog-index-item-details-stats">
                        <p>
                            <Link to={`/dogs/${this.props.dog.id}`}>{this.props.dog.name}</Link>
                        </p>
                        <p>Ratings</p>

                        <p>{this.props.dog.breed}
                        </p>
                        <p>{dogAge}
                        </p>
                        <p>
                        {this.props.dog.size}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DogIndexItem;