import React from 'react';
// import { Badge } from 'reactstrap';

export default function URITemplate({ uri }) {
  return (
    <h4>{uri}</h4>
  )
}

URITemplate.propTypes = {
  uri: React.PropTypes.string,
};
