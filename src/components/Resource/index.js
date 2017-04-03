import React from 'react';
import { ResourceTitle } from '../'

export default function Resource({ resource }) {
  return (
    <div className="Resource-main">
      <ResourceTitle title={resource.name} />
    </div>
  );
}

Resource.propTypes = {
  resource: React.PropTypes.shape({
    name: React.PropTypes.string,
  }),
};
