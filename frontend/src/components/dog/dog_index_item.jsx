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
                <div className="dog-index-item-container">
                    <Link to={`/dogs/${this.props.dog.id}`}><img src={imageUrl} alt="" /></Link>
                    <div className="dog-index-item-details">
                        <li><Link to={`/dogs/${this.props.dog.id}`}>{this.props.dog.name}</Link></li>
                        <li>Ratings</li>
                        <li>{this.props.dog.breed}</li>
                        <li>{dogAge}</li>
                        <li>{this.props.dog.size}</li>
                    </div>
                </div>
            </div>
        )
    }
}

export default DogIndexItem;