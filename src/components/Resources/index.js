import React from 'react';
import { Resource } from '../';

export default function Resources({ resources }) {
  return (
    <div className="Resources-main">
      {resources.map((resource, key) => (
        <Resource resource={resource} key={key} />
      ))}
    </div>
  );
}

Resources.propTypes = {
  resources: React.PropTypes.array.isRequired,
};
