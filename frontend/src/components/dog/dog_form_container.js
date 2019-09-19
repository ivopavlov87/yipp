import { connect } from 'react-redux';
import { createDog } from '../../actions/dog_actions';

import DogForm from './dog_form';

const mapStateToProps = state => {
    return {
        currentUserId: state.session.user.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createDog: (dog) => dispatch(createDog(dog)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogForm);