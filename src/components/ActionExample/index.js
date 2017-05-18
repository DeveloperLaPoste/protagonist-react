import PropTypes from 'prop-types';
import React from 'react';

import { RequestExample, ResponseExample } from '../';

export default function ActionExample({ example }) {
  const requestsResponses = example.requests && example.responses && example.requests.length > 0 &&
  example.requests.length <= example.responses.length ? (
    <div className="ActionExample-content">
      {example.requests.map((request, index) => (
        <div key={index}>
          <RequestExample request={request} />
          <ResponseExample response={example.responses[index]} />
        </div>
      ))}
    </div>
  ) : <div className="ActionExample-noContent" />;

  return (
    <div className="ActionExample-main">
      {requestsResponses}
    </div>
  );
}

ActionExample.propTypes = {
  example: PropTypes.shape({
    requests: PropTypes.array,
    responses: PropTypes.array,
  }),
};

ActionExample.defaultProps = {
  example: {
    requests: [],
    responses: [],
  },
};
