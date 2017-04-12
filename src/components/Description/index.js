import React from 'react';
import { Markdown } from '../';

import './styles.css';

export default function Description({ description }) {
  return (
    <div className="Description-main">
      <Markdown markdown={description} />
    </div>
  );
}

Description.propTypes = {
  description: React.PropTypes.string,
};

Description.defaultProps = {
  description: '',
};
