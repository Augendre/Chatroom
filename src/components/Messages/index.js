import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Message from 'src/containers/Messages/Message';
import './messages.scss';

const Messages = ({ messages }) => {
  const refMessagesContainer = useRef(null);

  // application d'un effet chaque fois que messages change de valeur
  useEffect(() => {
    // Scroll sur le conteneur des messages pour afficher le bas du conteneur
    refMessagesContainer.current.scrollTo({
      top: refMessagesContainer.current.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div className="messages" ref={refMessagesContainer}>
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </div>
  );
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Messages;
