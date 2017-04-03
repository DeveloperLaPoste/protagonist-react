import React from 'react';
import { ResourceTitle, Description } from '../'

export default function Resource({ resource }) {
  return (
    <div className="Resource-main">
      <ResourceTitle title={resource.name} />
      <Description description={resource.description} />
    </div>
  );
}

Resource.propTypes = {
  resource: React.PropTypes.shape({
    name: React.PropTypes.string,
    description: React.PropTypes.string,
  }),
};
