import React from 'react';

import './loader.scss';

const Loader = () => (
  <div className="loader-container">
    <div className="loading">
      <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
        <circle cx="170" cy="170" r="160" stroke="#13405d" />
        <circle cx="170" cy="170" r="135" stroke="#2980b9" />
        <circle cx="170" cy="170" r="110" stroke="#13405d" />
        <circle cx="170" cy="170" r="85" stroke="#2980b9" />
      </svg>
    </div>
  </div>
);

export default Loader;
