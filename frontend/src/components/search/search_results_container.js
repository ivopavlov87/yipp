import { connect } from 'react-redux';
import { fetchDogs } from '../../actions/dog_actions';
import { fetchAllImages } from '../../actions/image_actions';

import SearchResults from './search_results'

const mapStateToProps = (state) => {
    return {
        dogs: Object.values(state.entities.dogs),
        images: state.entities.images
        // posts: Object.values(state.entities.posts)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDogs: () => dispatch(fetchDogs()),
        fetchImages: () => dispatch(fetchAllImages())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);