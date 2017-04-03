import React from 'react';

import './styles.css';

export default function H2(props) {
  return (
    <h2 {...props} className={`protagonist-subtitle ${props.className ? props.className : ''}`.trim()}>
      {props.children}
    </h2>
  );
}

H2.propTypes = {
  children: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.node]),
  className: React.PropTypes.string,
};
