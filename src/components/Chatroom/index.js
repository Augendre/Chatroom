// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Form from 'src/containers/Form';
import Messages from 'src/containers/Messages';
import Settings from 'src/containers/Settings';
import SettingsButton from 'src/containers/SettingsButton';
import Loader from 'src/components/Loader';

import './chatroom.scss';

// == Composant
const Chatroom = ({
  settingsOpen,
  isAuthentified,
  loading,
  connect,
}) => {
  useEffect(() => {
    // Lancer la connexion au websocket
    connect();
  }, []); // [] effet exécuté seulement après le premier rendu du composant

  return (
    <div className="app">
      <Messages />
      {isAuthentified && <Form />}
      <SettingsButton />
      {settingsOpen && <Settings />}
      {loading && <Loader />}
    </div>
  );
};

Chatroom.propTypes = {
  settingsOpen: PropTypes.bool.isRequired,
  isAuthentified: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  connect: PropTypes.func.isRequired,
};

// == Export
export default Chatroom;
