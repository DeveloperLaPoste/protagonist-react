import React from 'react';
import { ActionHeading, ActionExamples, ActionParameters, Description } from '../';

export default function Action({ action, uriTemplate }) {
  return (
    <div className="Action-main">
      <ActionHeading name={action.name} method={action.method} uri={action.attributes.uriTemplate || uriTemplate} />
      <Description description={action.description} />
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
  uriTemplate: React.PropTypes.string,
};

Action.defaultProps = {
  action: {
    name: '',
    method: '',
    attributes: { uriTemplate: '' },
    parameters: [],
    examples: [],
  },
  uriTemplate: '',
};
