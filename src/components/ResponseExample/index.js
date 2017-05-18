import PropTypes from 'prop-types';
import React from 'react';
import { RequestHeaders, Description, Body, Schema } from '../';

import './styles.css';

export default function ResponseExample({ response }) {
  const headers = response.headers && response.headers.length ? (
    <RequestHeaders headers={response.headers} />
  ) : <div className="ResponseExample-noHeaders" />;

  const description = response.body ? (
    <Description description={response.description} />
  ) : <div className="ResponseExample-noDescription" />;

  const body = response.body ? (
    <Body body={response.body} />
  ) : <div className="ResponseExample-noBody" />;

  const schema = response.schema ? (
    <Schema schema={response.schema} />
  ) : <div className="ResponseExample-noSchema" />;

  return (
    <div className="ResponseExample-main">
      <div className="ResponseExample-heading">
        <strong>Réponse <code>{response.name}</code></strong>
      </div>
      {headers}
      {description}
      {body}
      {schema}
    </div>
  );
}

ResponseExample.propTypes = {
  response: PropTypes.shape({
    name: PropTypes.string,
    headers: PropTypes.array,
    body: PropTypes.string,
  }),
};

ResponseExample.defaultProps = {
  response: {},
};
