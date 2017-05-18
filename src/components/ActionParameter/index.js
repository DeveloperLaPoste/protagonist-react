import PropTypes from 'prop-types';
import React from 'react';

import './styles.css';

export default function ActionParameter({ parameter }) {
  return (
    <tr className="ActionParameter-main">
      <td className="ActionParameter-name">
        {parameter.name}
      </td>
      <td className="ActionParameter-type">
        <code>{parameter.type}</code>
        {parameter.required && <span className="ActionParameter-required">(requis){' '}</span>}
      </td>
      <td className="text-muted ActionParameter-example">
        {parameter.example && <strong>Exemple:{' '}</strong>}
        {parameter.example && <span>{parameter.example}</span>}
      </td>
    </tr>
  );
}

ActionParameter.propTypes = {
  parameter: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool,
    example: PropTypes.string,
  }).isRequired,
};
