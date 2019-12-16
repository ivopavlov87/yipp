import { connect } from 'react-redux'
import { 
    fetchDogs,
    fetchDogsByDogname, 
    fetchDogsByLocation, 
    fetchDogsByBreed 
} from '../../actions/dog_actions'

import Search from './search'

const mapDispatchToProps = dispatch => {
    return {
        fetchDogs: () => dispatch(fetchDogs()),
        searchByDogname: (dogname) => dispatch(fetchDogsByDogname(dogname)),
        searchByLocation: (location) => dispatch(fetchDogsByLocation(location)),
        searchByBreed: (breed) => dispatch(fetchDogsByBreed(breed))
    };
};

export default connect(null, mapDispatchToProps)(Search);
