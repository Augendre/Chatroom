import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers/chatReducer';

import logMiddleware from 'src/middlewares/logMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import socketMiddleware from 'src/middlewares/socketMiddleware';

// combinaison devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    // Les actions sont interceptées
    // dans l'ordre où les middlewares sont listés ici
    logMiddleware,
    authMiddleware,
    socketMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
