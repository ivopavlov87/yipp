import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions'

import SplashPosts from './splash_posts';

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.entities.posts.all).sort((a, b) => {
            return a.date < b.date ? 1 : -1
        })
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchUser: (id) => dispatch(fetchUser(id))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashPosts);