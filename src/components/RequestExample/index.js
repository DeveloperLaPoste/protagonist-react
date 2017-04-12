import React from 'react';
import { Description, RequestHeaders, Body, Schema } from '../';

import './styles.css';

export default function RequestExample({ request }) {
  const headers = request.headers && request.headers.length ? (
    <RequestHeaders headers={request.headers} />
  ) : <div className="RequestExample-noHeaders" />;
  const description = request.description ? <Description description={request.description} /> :
    (<div className="RequestExample-noDescription" />);
  const body = request.body ? <Body body={request.body} /> : <div className="RequestExample-noBody" />;
  const schema = request.schema ? <Schema schema={request.schema} /> : <div className="RequestExample-noSchema" />;

  return (
    <div className="RequestExample-main">
      <div className="RequestExample-heading">
        <strong>Requête <code>{request.name}</code></strong>
      </div>
      {headers}
      {description}
      {body}
      {schema}
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
