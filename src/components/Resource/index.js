import PropTypes from 'prop-types';
import React from 'react';
import { Element } from 'react-scroll';

import { Actions, Description } from '../';

import './styles.css';

export default function Resource({ id, resource }) {
  return (
    <div id={id} className="Resource-main">
      <Description description={resource.description} />
      <Element name={resource.name}>
        <Actions actions={resource.actions} uriTemplate={resource.uriTemplate} />
      </Element>
    </div>
  );
}

Resource.propTypes = {
  resource: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    uriTemplate: PropTypes.string,
  }).isRequired,
  id: PropTypes.string,
};

Resource.defaultProps = {
  id: '',
};
