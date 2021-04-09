import { connect } from 'react-redux';

import Settings from 'src/components/Settings';

import { changeFieldSettings, submitLogin } from 'src/actions/chat';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  email: state.settingsEmail,
  password: state.settingsPassword,
});
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  changeValue: (identifier, newValue) => {
    dispatch(changeFieldSettings(identifier, newValue));
  },
  submitLogin: () => {
    dispatch(submitLogin());
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
