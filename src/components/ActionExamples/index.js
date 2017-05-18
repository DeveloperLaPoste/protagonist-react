import PropTypes from 'prop-types';
import React from 'react';
import { ActionExample } from '../';

export default function ActionExamples({ examples }) {

  const content = examples && examples.length ? (
    <div className="ActionExamples-content">
      {examples.map((example, key) => <ActionExample example={example} key={key} />)}
    </div>
  ) : <div className="ActionExamples-noContent" />;

  return (
    <div className="ActionExample-main">
      {content}
    </div>
  );
}

ActionExamples.propTypes = {
  examples: PropTypes.array,
};
