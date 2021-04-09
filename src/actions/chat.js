// action types
export const CHANGE_INPUT_MESSAGE = 'CHANGE_INPUT_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const TOGGLE_SETTINGS_OPEN = 'TOGGLE_SETTINGS_OPEN';
export const CHANGE_FIELD_SETTINGS = 'CHANGE_FIELD_SETTINGS';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOG_USER = 'LOG_USER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const CONNECT_WEBSOCKET = 'CONNECT_WEBSOCKET';
export const SAVE_NEW_MESSAGE = 'SAVE_NEW_MESSAGE';
export const SAVE_COLOR = 'SAVE_COLOR';

// action creator
export const changeInputMessage = (newValue) => ({
  type: CHANGE_INPUT_MESSAGE,
  value: newValue,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const toggleSettingsOpen = () => ({
  type: TOGGLE_SETTINGS_OPEN,
});

export const changeFieldSettings = (identifier, newValue) => ({
  type: CHANGE_FIELD_SETTINGS,
  // *  === identifier: identifier et newValue; newValue,
  identifier,
  newValue,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const logUser = (nickname) => ({
  type: LOG_USER,
  nickname,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

export const connectWebsocket = () => ({
  type: CONNECT_WEBSOCKET,
});

export const saveNewMessage = (message) => ({
  type: SAVE_NEW_MESSAGE,
  message,
});

export const saveColor = (color) => ({
  type: SAVE_COLOR,
  color,
});
