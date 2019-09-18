import { connect } from 'react-redux';
import { fetchOneDog } from '../../actions/dog_actions';

import DogShow from  './dog_show';

const mapStateToProps = (state, ownProps) => {
    return {
        dog: state.entities.dogs[ownProps.match.params.dogId]

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDog: (id) => dispatch(fetchOneDog(id))
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(DogShow);