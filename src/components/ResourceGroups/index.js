import React from 'react';
import { ResourceGroup } from '../';

export default function ResourceGroups({ resourceGroups }) {
  return (
    <div className="ResourceGroups-main">
      {resourceGroups.map((resourceGroup, index) => <ResourceGroup resourceGroup={resourceGroup} key={index} />)}
    </div>
  );
}

ResourceGroups.propTypes = {
  resourceGroups: React.PropTypes.array,
};

ResourceGroups.defaultProps = {
  resourceGroups: [],
};
