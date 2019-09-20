import { connect } from 'react-redux';
import { fetchOneDog, deleteDog } from '../../actions/dog_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchAllImages } from '../../actions/image_actions';
import { selectImagesForDog } from '../../reducers/selectors';

import DogShow from  './dog_show';

const mapStateToProps = (state, ownProps) => {
    const dog = state.entities.dogs[ownProps.match.params.dogId]
    const currentUserId = state.session.user.id
    const users = state.entities.users
    const images = selectImagesForDog(state.entities.images, dog)

    return {
        dog: dog,
        users: users,
        currentUserId: currentUserId,
        images: images
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDog: (id) => dispatch(fetchOneDog(id)),
        fetchUsers: () => dispatch(fetchUsers()),
        deleteDog: (id) => dispatch(deleteDog(id)),
        fetchImages: () => dispatch(fetchAllImages())
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(DogShow);