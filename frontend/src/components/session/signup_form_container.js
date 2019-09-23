import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    formType: 'signup',
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);