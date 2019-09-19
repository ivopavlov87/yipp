import { connect } from 'react-redux';
import { createDog } from '../actions/dog_actions';

import DogForm from './dog_form';

const mapStateToProps = state => {
    return {
        

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogForm);