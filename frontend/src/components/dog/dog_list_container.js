import { connect } from 'react-redux';
import { fetchDogs, fetchUserDogs } from '../../actions/dog_actions';
import { selectDogsForUser } from '../../reducers/selectors'

import DogList from './dog_list';

const mapStateToProps = state => {
    const currentUser = state.session.user
    return {
        dogs: selectDogsForUser(state.entities.dogs, currentUser),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDogs: () => dispatch(fetchDogs()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogList);