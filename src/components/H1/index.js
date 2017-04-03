import React from 'react';

import './styles.css';

export default function H1(props) {
  return (
    <h1 {...props} className={`protagonist-title ${props.className ? props.className : ''}`.trim()}>
      {props.children}
    </h1>
  );
}

H1.propTypes = {
  children: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.node]),
  className: React.PropTypes.string,
};
