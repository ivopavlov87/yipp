import { connect } from 'react-redux';
import { fetchDogs } from '../../actions/dog_actions';

import DogIndex from './dog_index'

const mapStateToProps = (state) => {
    return {
        dogs: state.entities.dogs
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DogIndex);