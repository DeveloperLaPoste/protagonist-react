import React from 'react';
import { RequestHeaders } from '../';

import './styles.css';

export default function RequestExample({ request }) {
  const headers = request.headers && request.headers.length ? (
    <RequestHeaders headers={request.headers} />
  ) : <div className="RequestExample-noHeaders" />;

  return (
    <div className="RequestExample-main">
      <div className="RequestExample-heading">
        <strong>Requête <code>{request.name}</code></strong>
      </div>
      {headers}
    </div>
  );
}

RequestExample.propTypes = {
  request: React.PropTypes.shape({
    name: React.PropTypes.string,
  }),
};

RequestExample.defaultProps = {
  request: {},
};
