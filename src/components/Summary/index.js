import React from 'react';

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
            <a href={`#resource-${key}`} key={key} style={itemStyle}>{resource.name}</a>
          ))}
        </div>
      ))}
    </div>
  );
}

Summary.propTypes = {
  resourceGroups: React.PropTypes.array,
};

Summary.defaultProps = {
  resourceGroups: [],
};
