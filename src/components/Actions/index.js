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
  actions: React.PropTypes.array,
  uriTemplate: React.PropTypes.string,
};

Actions.defaultProps = {
  actions: [],
  uriTemplate: '',
};
