import React from 'react';

export default function Description({ description }) {
  return (
    <p className="Description-main">
      {description}
    </p>
  );
}

Description.propTypes = {
  description: React.PropTypes.string,
};

Description.defaultProps = {
  description: '',
};
