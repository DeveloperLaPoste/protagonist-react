import PropTypes from 'prop-types';
import React from 'react';
import { Link } from '../';

const itemStyle = {
  display: 'flex',
  flexDirection: 'column',
};

export default function Summary({ resourceGroups }) {
  return (
    <div className="Summary-main" style={{ marginBottom: '1em' }}>
      <h3>Sommaire</h3>
      {resourceGroups.map((resourceGroup, index) => (
        <div className="Summary-resource" key={index}>
          <h4>{resourceGroup.name}</h4>
          {resourceGroup.resources.map((resource, key) => (
            <Link
              href=""
              activeClass="Summary-active"
              style={itemStyle}
              to={resource.name}
              spy
              smooth
              offset={50}
              duration={500}
              key={key}
            >
              {resource.name}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

Summary.propTypes = {
  resourceGroups: PropTypes.array,
};

Summary.defaultProps = {
  resourceGroups: [],
};
