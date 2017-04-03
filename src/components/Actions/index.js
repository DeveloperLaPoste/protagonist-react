import React from 'react';
import { Action } from '../';

export default function Actions({ actions }) {
  return (
    <div className="Actions-main">
      {actions.map((action, key) => (
        <Action action={action} key={key} />
      ))}
    </div>
  )
}

Actions.propTypes = {
  actions: React.PropTypes.array,
};
