import { connect } from 'react-redux';

import { updateDog } from '../../actions/dog_actions';
import DogEditForm from './dog_edit_form';

const mapStateToProps = state => {
    return {
        currentUserId: state.session.user.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateDog: (dog) => dispatch(updateDog(dog))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(DogEditForm);