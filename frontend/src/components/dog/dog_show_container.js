import { connect } from 'react-redux';
import { fetchOneDog, deleteDog } from '../../actions/dog_actions';
import { fetchUsers } from '../../actions/user_actions';

import DogShow from  './dog_show';

const mapStateToProps = (state, ownProps) => {
    const dog = state.entities.dogs[ownProps.match.params.dogId]
    const currentUser = state.session.user.id
    const users = state.entities.users

    return {
        dog: dog,
        users: users,
        currentUser: currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDog: (id) => dispatch(fetchOneDog(id)),
        fetchUsers: () => dispatch(fetchUsers()),
        deleteDog: (id) => dispatch(deleteDog(id))
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(DogShow);