import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import Posts from './posts';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.posts.all).sort((a,b) => {
      return a.date < b.date ? 1 : -1
    })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);