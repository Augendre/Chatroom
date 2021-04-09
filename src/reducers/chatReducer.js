import {
  CHANGE_INPUT_MESSAGE,
  SEND_MESSAGE,
  TOGGLE_SETTINGS_OPEN,
  CHANGE_FIELD_SETTINGS,
  LOG_USER,
  SUBMIT_LOGIN,
  HIDE_LOADER,
  SAVE_NEW_MESSAGE,
  SAVE_COLOR,
} from 'src/actions/chat';

const initialState = {
  messages: [],
  inputMessage: '',
  // la variable n'a pas de valeur
  nickname: null,
  // Indication si les settings sont ouverts ou pas
  settingsOpen: true,
  settingsEmail: '',
  settingsPassword: '',
  loading: false,
  loggedUserEmail: '',
  userColor: '',
};

const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_MESSAGE:
      return {
        ...state,
        inputMessage: action.value,
      };

    case SEND_MESSAGE:
      return {
        ...state,
        inputMessage: '',
      };

    case SAVE_NEW_MESSAGE: {
      const newMessage = action.message;

      const messagesUpdated = [
        // déversement des messages actuels
        ...state.messages,
        // ajout du nouveau message
        newMessage,
      ];

      return {
        ...state,
        messages: messagesUpdated,
      };
    }

    case TOGGLE_SETTINGS_OPEN:
      return {
        ...state,
        settingsOpen: !state.settingsOpen,
      };

    case CHANGE_FIELD_SETTINGS: {
      // Objectif : changer la valeur de settingsEmail ou de settingsPassword
      const target = action.identifier;

      return {
        ...state,
        // * variable dynamique => [target] sera soit = à settingsEmail ou settingsPassword
        // http://eloquentcode.com/computed-property-names-in-javascript
        [target]: action.newValue,
      };

      // === sans variable intermédiaire
      /*
      return {
        [action.identifier]: action.newValue,
      };
      */
    }

    case LOG_USER:
      return {
        ...state,
        nickname: action.nickname,
        // on masque Settings
        settingsOpen: false,
      };

    case SUBMIT_LOGIN:
      return {
        ...state,
        loading: true,
        loggedUserEmail: state.settingsEmail,
      };

    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };

    case SAVE_COLOR:
      return {
        ...state,
        userColor: action.color,
      };

    default: return state;
  }
};

export default chatReducer;
