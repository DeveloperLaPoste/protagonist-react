import PropTypes from 'prop-types';
import React from 'react';

import './styles.css';

export default function ResourceGroupTitle({ className, title }) {
  return (
    <h2 className={`protagonist-subtitle ${className ? className : ''}`.trim()}>
      {title}
    </h2>
  );
}

ResourceGroupTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};
