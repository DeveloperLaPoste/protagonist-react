import React from 'react';

import './styles.css';

export default function ActionParameter({parameter}) {
  return (
    <div className="ActionParameter-main">
      <div className="ActionParameter-name">{parameter.name}</div>
      <code className="ActionParameter-type">{parameter.type}</code>
    </div>
  );
}

ActionParameter.propTypes = {
  parameter: React.PropTypes.shape({
    name: React.PropTypes.string,
    type: React.PropTypes.string,
  }),
};
