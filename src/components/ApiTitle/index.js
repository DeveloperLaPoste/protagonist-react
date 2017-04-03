import React from 'react';

import './styles.css';

export default function ApiTitle({ className, title }) {
  return (
    <h1 className={`protagonist-title ${className ? className : ''}`.trim()}>
      {title}
    </h1>
  );
}

ApiTitle.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
};
