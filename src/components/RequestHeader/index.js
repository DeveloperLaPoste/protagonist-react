import React from 'react';

import './styles.css';

export default function RequestHeader({ header }) {
  return (
    <tr className="RequestHeader-row">
      <td>
        <pre><code><span className="hljs-attribute">{header.name}:</span></code></pre>
      </td>
      <td>
        <pre><code>{header.value}</code></pre>
      </td>
    </tr>
  );
}

RequestHeader.propTypes = {
  header: React.PropTypes.shape({
    name: React.PropTypes.string,
    value: React.PropTypes.string,
  }).isRequired,
};
