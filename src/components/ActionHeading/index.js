import PropTypes from 'prop-types';
import React from 'react';
import { Badge } from 'reactstrap';

import './styles.css';

export default function ActionHeading({ name, method, uri }) {
  const getColor = () => {
    switch (method.toUpperCase()) {
      case 'GET':
        return 'success';
      case 'POST':
        return 'default';
      case 'PATCH':
        return 'info';
      case 'PUT':
        return 'primary';
      case 'DELETE':
        return 'danger';
      default:
        return 'default';
    }
  };

  return (
    <h4 className="ActionHeading-main">
      {name && <div className="ActionHeading-name">{name}</div>}
      {method.trim() &&
      <Badge className={`ActionHeading-method ${method.toLowerCase()}`} color={getColor()}>{method}</Badge>}
      {uri.trim() && <code className="uri">{uri}</code>}
    </h4>
  );
}

ActionHeading.propTypes = {
  name: PropTypes.string,
  method: PropTypes.string,
  uri: PropTypes.string,
};

ActionHeading.defaultProps = {
  name: '',
  method: '',
  uri: '',
};
