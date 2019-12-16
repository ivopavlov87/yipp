import { connect } from 'react-redux';
import { fetchOneDog, deleteDog } from '../../actions/dog_actions';
import { fetchUsers, createFavorite } from '../../actions/user_actions';
import { composePost, fetchPosts } from '../../actions/post_actions';
import { fetchAllImages, createImage } from '../../actions/image_actions';
import { selectImagesForDog } from '../../reducers/selectors';
import { selectPostsForDog } from '../../reducers/selectors'

import { openModal } from '../../actions/modal_actions';

import DogShow from  './dog_show';

const mapStateToProps = (state, ownProps) => {
    if (state.session.isAuthenticated) {
        const dogId = ownProps.match.params.dogId
        const dog = state.entities.dogs[dogId]
        const currentUserId = state.session.user.id
        const users = state.entities.users
        const currentUser = state.session.user
        const posts = selectPostsForDog(state.entities.posts.all, dogId)
        const images = selectImagesForDog(state.entities.images, dog)

        return {
            dog: dog,
            users: users,
            currentUserId: currentUserId,
            currentUser: currentUser,
            posts: posts,
            images: images
        }
    } else {
        const dogId = ownProps.match.params.dogId
        const dog = state.entities.dogs[dogId]
        const users = state.entities.users
        const posts = selectPostsForDog(state.entities.posts.all, dogId)
        const images = selectImagesForDog(state.entities.images, dog)
        const currentUser = null

        return {
            currentUser: currentUser,
            dog: dog,
            users: users,
            posts: posts,
            images: images
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchDog: (id) => dispatch(fetchOneDog(id)),
        fetchUsers: () => dispatch(fetchUsers()),
        deleteDog: (id) => dispatch(deleteDog(id)),
        composePost: data => dispatch(composePost(data)),
        
        fetchImages: () => dispatch(fetchAllImages()),
        createImage: (imgObj) => dispatch(createImage(imgObj)),
        createFavorite: (id) => dispatch(createFavorite(id)),
        openModal: (modal) => dispatch(openModal(modal)) 
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(DogShow);