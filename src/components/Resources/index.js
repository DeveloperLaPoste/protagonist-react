import PropTypes from 'prop-types';
import React from 'react';
import { Resource } from '../';

window.summaryItems = {};

export default function Resources({ resources }) {
  return (
    <div className="Resources-main">
      {resources.map((resource, key) => (
        <Resource id={`resource-${key}`} resource={resource} key={key} />
      ))}
    </div>
  );
}

Resources.propTypes = {
  resources: PropTypes.array,
};

Resources.defaultProps = {
  resources: [],
};
