import { connect } from 'react-redux';
import { fetchOneDog, deleteDog } from '../../actions/dog_actions';
import { fetchUsers } from '../../actions/user_actions';
import { composePost } from '../../actions/post_actions';

import DogShow from  './dog_show';

const mapStateToProps = (state, ownProps) => {
    if (state.session.user) {
        const dog = state.entities.dogs[ownProps.match.params.dogId]
        const currentUserId = state.session.user.id
        const users = state.entities.users
        const currentUser = state.session.user

        return {
            dog: dog,
            users: users,
            currentUserId: currentUserId,
            currentUser: currentUser
        }
    } else {
        const dog = state.entities.dogs[ownProps.match.params.dogId]
        // const currentUserId = state.session.user.id
        const users = state.entities.users
        // const currentUser = state.session.user

        return {
            dog: dog,
            users: users,
            // currentUserId: currentUserId,
            // currentUser: currentUser
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDog: (id) => dispatch(fetchOneDog(id)),
        fetchUsers: () => dispatch(fetchUsers()),
        deleteDog: (id) => dispatch(deleteDog(id)),
        composePost: data => dispatch(composePost(data))
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(DogShow);