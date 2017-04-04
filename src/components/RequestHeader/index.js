import React from 'react';

export default function RequestHeader({ header }) {
  return (
    <div>
      <span>{header.name}</span>
      {' '}
      <span>{header.value}</span>
    </div>
  );
}

RequestHeader.propTypes = {
  header: React.PropTypes.shape({
    name: React.PropTypes.string,
    value: React.PropTypes.string,
  }),
};
