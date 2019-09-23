import { connect } from 'react-redux';
import { fetchOneDog, deleteDog } from '../../actions/dog_actions';
import { fetchUsers } from '../../actions/user_actions';
import { composePost, fetchDogPosts, destroyPost } from '../../actions/post_actions';
import { fetchAllImages, createImage } from '../../actions/image_actions';
import { selectImagesForDog } from '../../reducers/selectors';

import { openModal } from '../../actions/modal_actions';

import DogShow from  './dog_show';

const mapStateToProps = (state, ownProps) => {
    if (state.session.user) {
        const dog = state.entities.dogs[ownProps.match.params.dogId]
        const currentUserId = state.session.user.id
        const users = state.entities.users
        const currentUser = state.session.user
        const posts = Object.values(state.entities.posts.dog)
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
        const dog = state.entities.dogs[ownProps.match.params.dogId]
        // const currentUserId = state.session.user.id
        const users = state.entities.users
        // const currentUser = state.session.user
        const posts = Object.values(state.entities.posts.user)
        const images = selectImagesForDog(state.entities.images, dog)

        return {
            dog: dog,
            users: users,
            // currentUserId: currentUserId,
            // currentUser: currentUser
            posts: posts,
            images: images
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDog: (id) => dispatch(fetchOneDog(id)),
        fetchUsers: () => dispatch(fetchUsers()),
        deleteDog: (id) => dispatch(deleteDog(id)),
        composePost: data => dispatch(composePost(data)),
        fetchDogPosts: id => dispatch(fetchDogPosts(id)),
        destroyPost: (postId) => dispatch(destroyPost(postId)),
        fetchImages: () => dispatch(fetchAllImages()),
        createImage: (imgObj) => dispatch(createImage(imgObj)),
        openModal: (modal) => dispatch(openModal(modal)) 
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(DogShow);