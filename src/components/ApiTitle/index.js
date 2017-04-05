import React from 'react';

import './styles.css';

export default function ApiTitle({ className, title }) {
  return (
    <h1 className={`Protagonist-title ${className}`.trim()}>
      {title}
    </h1>
  );
}

ApiTitle.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
};

ApiTitle.defaultProps = {
  className: '',
  title: '',
};
