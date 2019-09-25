import React from 'react';
import { Link } from 'react-router-dom';

import './assets/splash_posts_index.css';
import logo from './assets/yipp-favicon.png';

class SplashPosts extends React.Component {
    
    componentDidMount() {
        this.props.fetchPosts();
    }



    render() {

        const posts = this.props.posts.map(post => {
            return (
                <div className="splash-posts-index-item">
                    <li>{post.authorName}</li>
                    <li id='splash-post'>says about <Link id='splash-dog-name'to={`/dogs/${post.dog}`}>{post.dogName}:</Link></li>
                    <li id='splash-post-text'>{post.text}</li>
                    <li id='post-rating'>{post.authorName} gives {post.dogName} a rating of <span id='temper'>{post.temperamentRating} yipps.</span></li>
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