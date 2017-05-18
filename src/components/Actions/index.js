import PropTypes from 'prop-types';
import React from 'react';
import { Action } from '../';

export default function Actions({ actions, uriTemplate }) {
  return (
    <div className="Actions-main">
      {actions.map((action, key) => (
        <Action action={action} key={key} uriTemplate={uriTemplate} />
      ))}
    </div>
  );
}

Actions.propTypes = {
  actions: PropTypes.array,
  uriTemplate: PropTypes.string,
};

Actions.defaultProps = {
  actions: [],
  uriTemplate: '',
};
