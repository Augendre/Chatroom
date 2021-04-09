import { CONNECT_WEBSOCKET, SEND_MESSAGE, LOG_USER, saveNewMessage } from 'src/actions/chat';

const SERVER_URL = 'http://localhost:3001';

let socket;

const socketMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le socketMiddleware: ', action);
  switch (action.type) {
    case CONNECT_WEBSOCKET: {
      // console.log('On va se connecter à la websocket');

      // Ouverture du canal de comminucation
      socket = window.io(SERVER_URL);

      next(action);
      break;
    }

    case LOG_USER:
      // Ecouteur d'évènement
      socket.on('send_message', (message) => {
        // Enregistrement du message dans le state.messages => action
        store.dispatch(saveNewMessage(message));
      });

      next(action);
      break;

    case SEND_MESSAGE: {
      const { nickname, inputMessage } = store.getState();

      const message = {
        author: nickname,
        content: inputMessage,
      };

      socket.emit('send_message', message);

      next(action);
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default socketMiddleware;
