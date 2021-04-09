import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import './settingsButton.scss';

const SettingsButton = ({ toggleSettingsOpen, settingsOpen }) => {
  const cssClass = className('settings-button', { 'settings-button--open': settingsOpen });

  return (
    <button
      className={cssClass}
      type="button"
      onClick={toggleSettingsOpen}
    >
      +
    </button>
  );
};

SettingsButton.propTypes = {
  // pas de paramètre
  toggleSettingsOpen: PropTypes.func.isRequired,
  settingsOpen: PropTypes.bool.isRequired,
};

export default SettingsButton;
