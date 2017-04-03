import React from 'react';

import './styles.css';

export default function ActionParameter({ parameter }) {
  return (
    <div className="ActionParameter-main">
      <div className="ActionParameter-name">{parameter.name}</div>{' '}
      <code className="ActionParameter-type">{parameter.type}</code>{' '}
      {parameter.required && <span className="ActionParameter-required">(requis){' '}</span>}
      <span className="text-muted ActionParameter-example">
        <strong>Exemple:{' '}</strong>
        <span>{parameter.example}</span>
      </span>
    </div>
  );
}

ActionParameter.propTypes = {
  parameter: React.PropTypes.shape({
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    required: React.PropTypes.bool,
    example: React.PropTypes.string,
  }),
};
