import React from 'react';
import PropTypes from 'prop-types';

import { Send, Terminal } from 'react-feather';

import './form.scss';

const Form = ({ message, setMessage, submitMessage }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // trim : supprime les espaces en trop au début et à la fin
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
    if (message.trim().length > 0) {
      submitMessage();
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        placeholder="Saisissez votre message..."
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button className="form__button-submit" type="submit">
        <Send size="70%" />
      </button>
    </form>
  );
};

Form.propTypes = {
  message: PropTypes.string.isRequired,
  // paramètre : nouvelle valeur
  setMessage: PropTypes.func.isRequired,
  // pas de parmètres
  submitMessage: PropTypes.func.isRequired,
};

export default Form;
