import { connect } from 'react-redux';
import { fetchUserPosts, destroyPost } from '../../actions/post_actions';
import { fetchUser } from "../../actions/user_actions";
import { fetchDogs } from "../../actions/dog_actions";
import { fetchAllImages } from '../../actions/image_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  let favs;
  const a = state.entities.users.favoriteDogs
  if (a ){
    favs = Object.values(a);
  }else{
    favs = [];
  };

  // debugger;
  return {
    posts: Object.values(state.entities.posts.user),
    currentUser: state.session.user,
    favoriteDogs: favs,
    images: state.entities.images,
    dogs: Object.values(state.entities.dogs),
    // favoriteDogs: Object.values(state.session.user.favoriteDogs)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserPosts: id => dispatch(fetchUserPosts(id)),
    fetchUser: id => dispatch(fetchUser(id)),
    destroyPost: postId => dispatch(destroyPost(postId)),
    fetchImages: () => dispatch(fetchAllImages()),
    fetchDogs: () => dispatch(fetchDogs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);