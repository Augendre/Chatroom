import { connect } from 'react-redux';

import Chatroom from 'src/components/Chatroom';

import { connectWebsocket } from 'src/actions/chat';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  settingsOpen: state.settingsOpen,
  isAuthentified: state.nickname !== null,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  connect: () => {
    dispatch(connectWebsocket());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chatroom);
