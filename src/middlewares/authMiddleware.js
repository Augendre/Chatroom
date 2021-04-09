import axios from 'axios';

import {
  SUBMIT_LOGIN,
  LOG_USER,
  logUser,
  hideLoader,
  saveColor,
} from 'src/actions/chat';

/* MIDDLEWARE RESPONSABLE DE L'AUTHENTIFICATION */
const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans authMiddleware: ', action);
  switch (action.type) {
    case SUBMIT_LOGIN: {
      // Accès au store donc au state
      const { settingsEmail, settingsPassword } = store.getState();

      // on envoie une requête de type POST vers le serveur d'authentification
      axios.post('http://localhost:3001/login', {
        email: settingsEmail,
        password: settingsPassword,
      })
        .then((response) => {
          // mettre à jour le nickname sans le state en utilisant la réponse
          store.dispatch(logUser(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(hideLoader());
        });

      next(action);
      break;
    }

    case LOG_USER: {
      const { loggedUserEmail } = store.getState();

      axios.get(`http://localhost:3001/theme/${loggedUserEmail}`)
        .then((response) => {
          store.dispatch(saveColor(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default authMiddleware;
