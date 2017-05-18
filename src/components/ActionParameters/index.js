import PropTypes from 'prop-types';
import React from 'react';
import { ActionParameter } from '../';

import './styles.css';

export default function ActionParameters({ parameters }) {
  const content = parameters && parameters.length ? (
    <div className="ActionParameters-content">
      <h4>Paramètres</h4>
      <table className="table">
        <tbody>{parameters.map(parameter => <ActionParameter parameter={parameter} key={parameter.name} />)}</tbody>
      </table>
    </div>
  ) : <div className="ActionParameters-noContent" />;
  return (
    <div className="ActionParameters-main">
      {content}
    </div>
  );
}

ActionParameters.propTypes = {
  parameters: PropTypes.array,
};

ActionParameters.defaultProps = {
  parameters: [],
};
