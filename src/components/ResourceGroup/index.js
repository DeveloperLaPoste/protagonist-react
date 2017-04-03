import React from 'react';
import { H2, Description, Resources } from '../';

export default function ResourceGroup({ resourceGroup }) {
  return (
    <div className="ResourceGroup-main">
      <H2>
        {resourceGroup.name}
      </H2>
      <Description>
        {resourceGroup.description}
      </Description>
      {!resourceGroup.resources && <div className="ResourceGroup-noContent" />}
      {!resourceGroup.resources && <div className="ResourceGroup-content">
        <Resources resources={resourceGroup.resources} />
      </div>}
    </div>
  );
}

ResourceGroup.propTypes = {
  resourceGroup: React.PropTypes.shape({
    name: React.PropTypes.string,
    description: React.PropTypes.string,
    resources: React.PropTypes.array,
  }).isRequired,
};
