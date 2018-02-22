import PropTypes from 'prop-types';
import React from 'react';

import './styles.css';

export default function ResourceHeading({ name }) {
  return (
    <h3 className="ResourceHeading-main">
      {name && <div className="ResourceHeading-name">{name}</div>}
    </h3>
  );
}

ResourceHeading.propTypes = {
  name: PropTypes.string,
};

ResourceHeading.defaultProps = {
  name: '',
};
