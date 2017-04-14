import React from 'react';
import { ResourceGroupTitle, Description, Resources } from '../';

export default function ResourceGroup({ resourceGroup }) {
  const resources = resourceGroup.resources ? (
    <div className="ResourceGroup-content">
      <Resources resources={resourceGroup.resources} />
    </div>
  ) : <div className="ResourceGroup-noContent" />;

  return (
    <div className="ResourceGroup-main">
      <ResourceGroupTitle title={resourceGroup.name} />
      <Description description={resourceGroup.description} />
      {resources}
    </div>
  );
}

ResourceGroup.propTypes = {
  resourceGroup: React.PropTypes.shape({
    name: React.PropTypes.string,
    description: React.PropTypes.string,
    resources: React.PropTypes.array,
  }),
};

ResourceGroup.defaultProps = {
  resourceGroup: {},
};
