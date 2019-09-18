import React from 'react';

// import { selectPostsForDog } from '../../reducers/selectors';

class DogIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const postsForDog = selectPostsForDog(this.props.posts, this.props.dog)
        // const sum = 0 
        // postsForDog.forEach(post => {
        //     sum += post.temperamentRating
        // })
        // const ratings = sum / postsForDog.length;
        return (

            <div className="dog-index-item-container">
                <div className="dog-index-item-details">
                    <ul>
                        <li>
                        {this.props.dog.name}
                        </li>
                        <li>Ratings</li>

                        <li>{this.props.dog.breed}
                        </li>
                        <li>{this.props.dog.dob}
                        </li>
                        <li>
                        {this.props.dog.size}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default DogIndexItem;