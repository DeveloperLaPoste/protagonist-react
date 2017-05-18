import PropTypes from 'prop-types';
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
  action: PropTypes.shape({
    name: PropTypes.string,
    method: PropTypes.string,
    attributes: PropTypes.shape({
      uriTemplate: PropTypes.string,
    }),
    parameters: PropTypes.array,
    examples: PropTypes.array,
  }),
  uriTemplate: PropTypes.string,
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
