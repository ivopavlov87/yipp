import { connect } from 'react-redux';
import { fetchDogs } from '../../actions/dog_actions';

import DogIndex from './dog_index'

const mapStateToProps = (state) => {
    return {
        dogs: Object.values(state.entities.dogs)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDogs: ()=> dispatch(fetchDogs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DogIndex);