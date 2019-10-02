import { connect } from 'react-redux';
import { fetchDogs } from '../../actions/dog_actions';
import { fetchAllImages } from '../../actions/image_actions';
import { fetchDogPosts, fetchPosts } from '../../actions/post_actions';


import DogIndex from './dog_index'

const mapStateToProps = (state) => {
    // debugger;
    return {
        dogs: Object.values(state.entities.dogs),
        images: state.entities.images,
        posts: Object.values(state.entities.posts.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDogs: () => dispatch(fetchDogs()),
        fetchImages: () => dispatch(fetchAllImages()),
        fetchPosts: () => dispatch(fetchPosts()),
        fetchDogPosts: id => dispatch(fetchDogPosts(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DogIndex);