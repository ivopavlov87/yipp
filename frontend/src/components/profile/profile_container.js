import { connect } from 'react-redux';
import { fetchUserPosts } from '../../actions/post_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserPosts: id => dispatch(fetchUserPosts(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);