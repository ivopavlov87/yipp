import { connect } from 'react-redux';
import { composePost, fetchDogPosts } from '../../actions/post_actions';
import PostCompose from './post_compose';



const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    // newPost: state.entities.posts.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composePost: data => dispatch(composePost(data))

    // fetchDogPosts: (dogId) => dispatch(fetchDogPosts(dogId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCompose);