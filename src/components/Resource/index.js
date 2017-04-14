import React from 'react';
import { Actions } from '../';

import './styles.css';

export default function Resource({ id, resource }) {
  return (
    <div id={id} className="Resource-main">
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
  id: React.PropTypes.string,
};

Resource.defaultProps = {
  id: '',
};
