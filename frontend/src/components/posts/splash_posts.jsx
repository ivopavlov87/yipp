import React from 'react';
import { Link } from 'react-router-dom';

import './assets/splash_posts_index.css';

class SplashPosts extends React.Component {
    
    componentDidMount() {
        this.props.fetchPosts();
    }



    render() {

        const posts = this.props.posts.map(post => {
            return (
                <div className="splash-posts-index-item">
                    <li>{post.authorName}</li>
                    <li>says about <Link id='splash-dog-name'to={`/dogs/${post.dog}`}>{post.dogName}:</Link></li>
                    <br />
                    <li id='splash-post-text'>{post.text}</li>
                    <br />
                    <li>{post.authorName} gives {post.dogName}</li>
                    <li>a rating of {post.temperamentRating} Paws.</li>

                    <div>
                        <img src=""></img>
                        <img src=""></img>
                        <img src=""></img>
                    </div>
                </div>
            )

        })
        return (
            <div className="splash-posts-index">
                <p>Recent Posts</p>
                {posts}
            </div>
        )

    }
    
}

export default SplashPosts;