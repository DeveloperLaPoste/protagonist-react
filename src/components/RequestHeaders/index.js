import React from 'react';

import { RequestHeader } from '../';

export default function RequestHeaders({ headers }) {
  return (
    <div className="RequestHeaders-main">
      <h5>EnTêtes</h5>
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
  headers: React.PropTypes.array.isRequired,
};
