import { connect } from 'react-redux';
import Message from 'src/components/Messages/Message';

// ! deuxième paramètre facultatif "ownProps" : reçoit les props fournies au composant
// ! container par son parent
const mapStateToProps = (state, ownProps) => ({
  isOwnMessage: state.nickname === ownProps.author,
  userColor: state.userColor,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir : callback qui contient un appel à dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message);
