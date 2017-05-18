import PropTypes from 'prop-types';
import React from 'react';

import { RequestHeader } from '../';

export default function RequestHeaders({ headers }) {
  return (
    <div className="RequestHeaders-main">
      {headers && headers.length > 0 && <h5>EnTêtes</h5>}
      <table className="table">
        <tbody>{
          headers.map(header => (
            <RequestHeader header={header} key={header.name} />
          ))
        }</tbody>
      </table>
    </div>
  );
}

RequestHeaders.propTypes = {
  headers: PropTypes.array,
};

RequestHeaders.defaultProps = {
  headers: [],
};
