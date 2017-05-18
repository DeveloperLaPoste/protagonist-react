import PropTypes from 'prop-types';
import React from 'react';

export default function ResourceTitle({ title, className }) {
  return (
    <h3 className={`ResourceTitle-title ${className ? className : ''}`}>
      {title || ''}
    </h3>
  );
}

ResourceTitle.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
