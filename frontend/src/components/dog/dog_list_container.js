import { connect } from 'react-redux';
import { fetchDogs } from '../../actions/dog_actions';
import { selectDogsForUser } from '../../reducers/selectors'

import DogIndex from './dog_index';
import { fetchAllImages } from '../../actions/image_actions';

const mapStateToProps = state => {
    const currentUser = state.session.user.id
    return {
        dogs: selectDogsForUser(state.entities.dogs, currentUser),
        images: state.entities.images
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDogs: () => dispatch(fetchDogs()),
        fetchImages: () => dispatch(fetchAllImages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogIndex);