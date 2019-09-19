import { connect } from 'react-redux';
import { fetchDogs } from '../../actions/dog_actions';
import { selectDogsForUser } from '../../reducers/selectors'

import DogIndex from './dog_index';

const mapStateToProps = state => {
    const currentUser = state.session.user
    return {
        dogs: selectDogsForUser(state.entities.dogs, currentUser)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDogs: () => dispatch(fetchDogs()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogIndex);