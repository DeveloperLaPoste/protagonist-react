import PropTypes from 'prop-types';
import React from 'react';

import './styles.css';

export default function RequestHeader({ header }) {
  return header ? (
    <tr className="RequestHeader-row">
      <td>
        <pre><code><span className="hljs-attribute">{header.name}:</span></code></pre>
      </td>
      <td>
        <pre><code>{header.value}</code></pre>
      </td>
    </tr>
  ) : (
    <div className="RequestHeader-noContent" />
  );
}

RequestHeader.propTypes = {
  header: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  }),
};

RequestHeader.defaultProps = {
  header: null,
};
