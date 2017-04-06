import React from 'react';
import { Badge } from 'reactstrap';

import './styles.css';

export default function ActionHeading({ name, method, uri }) {
  const getColor = () => {
    switch (method.toUpperCase()) {
      case 'GET':
        return 'success';
      case 'POST':
        return 'danger';
      case 'PATCH':
        return 'info';
      case 'PUT':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <h4 className="ActionHeading-main">
      {name && <div className="ActionHeading-name">{name}</div>}
      {method && <Badge className="ActionHeading-method" color={getColor()}>{method}</Badge>}
      {uri && <code className="uri">{uri}</code>}
    </h4>
  );
}

ActionHeading.propTypes = {
  name: React.PropTypes.string,
  method: React.PropTypes.string,
  uri: React.PropTypes.string,
};

ActionHeading.defaultProps = {
  name: '',
  method: '',
  uri: '',
};
