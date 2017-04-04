import React from 'react';
import { Actions } from '../';

import './styles.css';

export default function Resource({ resource }) {
  return (
    <div className="Resource-main">
      <Actions actions={resource.actions} />
    </div>
  );
}

Resource.propTypes = {
  resource: React.PropTypes.shape({
    name: React.PropTypes.string,
    description: React.PropTypes.string,
    uriTemplate: React.PropTypes.string,
  }).isRequired,
};
