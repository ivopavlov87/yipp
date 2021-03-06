import { connect } from 'react-redux';
import { fetchPost, updatePost } from '../../actions/post_actions';
import PostEdit from './post_edit';

const mapStateToProps = (state, ownProps) => {
    // debugger;
    return {
    post: state.entities.posts.all[ownProps.match.params.id],
    currentUser: state.session.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPost: id => dispatch(fetchPost(id)),
    updatePost: post => dispatch(updatePost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit)