import { connect } from 'react-redux';
import { createDog } from '../../actions/dog_actions';

import DogForm from './dog_create_form';

const mapStateToProps = state => {
    let currentUserId;
    if (!state.session.user) {
        currentUserId = undefined
    } else {
        currentUserId = state.session.user.id
    }
    return {
        currentUserId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createDog: (dog) => dispatch(createDog(dog)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogForm);