import React from 'react';
import { ActionHeading, ActionExample, ActionParameters } from '../';

export default function Action({ action }) {
  return (
    <div className="Action-main">
      <div>
        <ActionHeading name={action.name} method={action.method} uri={action.attributes.uriTemplate} />
        <ActionParameters parameters={action.parameters} />
        <ActionExample example={action.example} />
      </div>
    </div>
  );
}

Action.propTypes = {
  action: React.PropTypes.shape({
    name: React.PropTypes.string,
    example: React.PropTypes.object,
  })
};
