import { connect } from 'react-redux';

import { updateDog, fetchOneDog } from '../../actions/dog_actions';
import DogEditForm from './dog_edit_form';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.dog,
        dog: state.entities.dogs[ownProps.match.params.dogId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateDog: (dog) => dispatch(updateDog(dog)),
        fetchDog: (id) => dispatch(fetchOneDog(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogEditForm);