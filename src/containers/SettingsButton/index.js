import { connect } from 'react-redux';

import SettingsButton from 'src/components/SettingsButton';

import { toggleSettingsOpen } from 'src/actions/chat';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  settingsOpen: state.settingsOpen,
});
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  toggleSettingsOpen: () => {
    dispatch(toggleSettingsOpen());
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsButton);
