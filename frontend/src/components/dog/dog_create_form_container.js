import { connect } from 'react-redux';
import { createDog } from '../../actions/dog_actions';
import { createImage } from '../../actions/image_actions'

import DogForm from './dog_create_form';

const mapStateToProps = state => {
    let currentUserId;
    if (!state.session.user) {
        currentUserId = undefined
    } else {
        currentUserId = state.session.user.id
    }

    let errors = state.errors.dog
    return {
        errors,
        currentUserId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createDog: (dog) => dispatch(createDog(dog)),
        createImage: (imgObj) => dispatch(createImage(imgObj)) 
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(DogForm);