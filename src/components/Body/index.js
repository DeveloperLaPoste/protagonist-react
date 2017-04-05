import React from 'react';

import { HighlightJS } from '../';

export default function Body({ body }) {
  return (
    <div className="Body-main">
      <h5>Corps</h5>
      <HighlightJS code={body} />
    </div>
  );
}

Body.propTypes = {
  body: React.PropTypes.string,
};

Body.defaultProps = {
  body: '',
};
