import React from 'react';
import { storiesOf } from '@kadira/storybook';
import RequestExample from './';

import { requestExample } from '../../stories/data';

const exampleWithoutName = Object.assign({}, requestExample, { name: '' });
const exampleWithBadName = Object.assign({}, requestExample, { name: ' ' });

storiesOf('RequestExample', module)
  .add('without props', () => (
    <RequestExample />
  ))
  .add('empty object', () => (
    <RequestExample request={{}} />
  ))
  .add('without name', () => (
    <RequestExample request={exampleWithoutName} />
  ))
  .add('with bad name', () => (
    <RequestExample request={exampleWithBadName} />
  ))
  .add('with an example', () => (
    <RequestExample request={requestExample} />
  ));
