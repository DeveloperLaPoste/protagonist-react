import React from 'react';
import { ActionParameter } from '../';

export default function ActionParameters({ parameters }) {
  const content = parameters && parameters.length ? (
    <div className="ActionParameters-content">
      <h4>Paramètres</h4>
      {parameters.map((parameter, key) => <ActionParameter parameter={parameter} key={key} />)}
    </div>
  ) : <div className="ActionParameters-noContent" />;
  return (
    <div className="ActionParameters-main">
      {content}
    </div>
  );
}

ActionParameters.propTypes = {
  parameters: React.PropTypes.array,
};
