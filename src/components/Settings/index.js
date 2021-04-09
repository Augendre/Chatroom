import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';

import './settings.scss';

const Settings = ({
  email,
  password,
  changeValue,
  submitLogin,
}) => {
  const handleChange = (identifier, newValue) => {
    changeValue(identifier, newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitLogin();
  };

  return (
    <form className="settings" onSubmit={handleSubmit}>
      <Field
      // Il est important de nommer identifier exactement comme dans le state
      // Important pour la gestion dans le reducer
        identifier="settingsEmail"
        label="Adresse e-mail"
        changeField={handleChange}
        value={email}
      />
      <Field
        identifier="settingsPassword"
        label="Mot de passe"
        changeField={handleChange}
        type="password"
        value={password}
      />
      <button type="submit">OK</button>
    </form>
  );
};

Settings.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  // pas de paramètre
  submitLogin: PropTypes.func.isRequired,
};

export default Settings;
