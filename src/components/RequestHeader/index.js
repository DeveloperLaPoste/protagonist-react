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
  header: React.PropTypes.shape({
    name: React.PropTypes.string,
    value: React.PropTypes.string,
  }),
};

RequestHeader.defaultProps = {
  header: null,
};
