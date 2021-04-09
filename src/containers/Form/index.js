import { connect } from 'react-redux';

import { changeInputMessage, sendMessage } from 'src/actions/chat';

import Form from 'src/components/Form';

const mapStateToProps = (state) => ({
  message: state.inputMessage,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir : callback qui contient un appel à dispatch
  setMessage: (newValue) => {
    dispatch(changeInputMessage(newValue));
  },
  submitMessage: () => {
    dispatch(sendMessage());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
