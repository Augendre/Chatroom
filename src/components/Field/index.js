
import React from 'react';
import PropTypes from 'prop-types';
import classNamess from 'classnames';

import './field.scss';

/**
 * A field to be used inside a form : label and input
 */
const Field = ({
  identifier,
  label,
  type,
  value,
  changeField,
}) => {
  const handleChange = (event) => {
    const { value: inputValue, name } = event.target;
    changeField(name, inputValue);
  };

  return (
    <div className="field">
      <input
        className={
          classNamess(
            'input',
            { 'input--typed': value.length > 0 },
          )
        }
        id={identifier}
        name={identifier}
        type={type}
        value={value}
        onChange={handleChange}
      />
      <label
        className="label"
        htmlFor={identifier}
      >
        {label}
      </label>
    </div>
  );
};

Field.propTypes = {
  /** identifier for the input : used both for name and id => must be unique */
  identifier: PropTypes.string.isRequired,
  /** text used as label */
  label: PropTypes.string.isRequired,
  /** type of the input */
  type: PropTypes.string,
  /** text used as value for the input */
  value: PropTypes.string,
  /** called when onChange event is received by the input, two parameters :
   * - identifier
   * - new value
   */
  changeField: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
  value: '',
};

export default Field;
