import PropTypes from 'prop-types';
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
  resourceGroup: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    resources: PropTypes.array,
  }),
};

ResourceGroup.defaultProps = {
  resourceGroup: {},
};
