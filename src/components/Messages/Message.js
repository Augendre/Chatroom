import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Message = ({
  author,
  content,
  isOwnMessage,
  userColor,
}) => {
  const classCss = classNames('message', { 'message--own': isOwnMessage });

  let style = {};
  if (isOwnMessage) {
    style = {
      color: userColor,
    };
  }

  return (
    <div className={classCss}>
      <div className="message__author">{author}</div>
      <div className="message__content" style={style}>{content}</div>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOwnMessage: PropTypes.bool.isRequired,
  userColor: PropTypes.string.isRequired,
};

export default Message;
