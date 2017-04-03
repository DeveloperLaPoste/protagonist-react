import React from 'react';

export default function Description(props) {
  return (
    <p className="description">{props.children}</p>
  );
}

Description.propTypes = {
  children: React.PropTypes.node,
};
