import React from 'react';

import { RequestHeader } from '../';

export default function RequestHeaders({ headers }) {
  return (
    <div className="RequestHeaders-main">
      <h5>EnTêtes</h5>
      <pre>
        <code>
        {headers.map((header, key) => (
          <RequestHeader header={header} key={key} />
        ))}
        </code>
      </pre>
    </div>
  );
}

RequestHeaders.propTypes = {
  headers: React.PropTypes.array.isRequired,
};
