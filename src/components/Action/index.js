import React from 'react';
import { ActionHeading, ActionExamples, ActionParameters } from '../';

export default function Action({ action }) {
  return (
    <div className="Action-main">
      <ActionHeading name={action.name} method={action.method} uri={action.attributes.uriTemplate} />
      <ActionParameters parameters={action.parameters} />
      <ActionExamples examples={action.examples} />
    </div>
  );
}

Action.propTypes = {
  action: React.PropTypes.shape({
    name: React.PropTypes.string,
    method: React.PropTypes.string,
    attributes: React.PropTypes.shape({
      uriTemplate: React.PropTypes.string,
    }),
    parameters: React.PropTypes.array,
    examples: React.PropTypes.array,
  }),
};

Action.defaultProps = {
  action: {
    name: '',
    method: '',
    attributes: { uriTemplate: '' },
    parameters: [],
    examples: [],
  },
};
