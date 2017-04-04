import React from 'react';

import './styles.css';

export default function ResponseExample({ response }) {
  return (
    <div className="ResponseExample-main">
      <div className="ResponseExample-heading">
        <strong>Réponse <code>{response.name}</code></strong>
      </div>
    </div>
  );
}

ResponseExample.propTypes = {
  response: React.PropTypes.shape({
    name: React.PropTypes.string,
  }),
};
