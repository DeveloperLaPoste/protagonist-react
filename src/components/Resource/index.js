import React from 'react';
import { ResourceTitle, Description, URITemplate, Actions } from '../'

import './styles.css';

export default function Resource({ resource }) {
  return (
    <div className="Resource-main">
      {/*<ResourceTitle title={resource.name} />*/}
      {/*<Description description={resource.description} />*/}
      {/*<URITemplate uri={resource.uriTemplate} />*/}
      <Actions actions={resource.actions} />
    </div>
  );
}

Resource.propTypes = {
  resource: React.PropTypes.shape({
    name: React.PropTypes.string,
    description: React.PropTypes.string,
    uriTemplate: React.PropTypes.string,
  }),
};
