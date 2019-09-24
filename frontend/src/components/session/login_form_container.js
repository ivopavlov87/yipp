import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = ({errors}) => {
  return {
    formType: 'login',
    errors: errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);