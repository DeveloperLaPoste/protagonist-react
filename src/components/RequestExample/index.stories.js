import React from 'react';
import { storiesOf } from '@kadira/storybook';
import RequestExample from './';

import { requestExample } from '../../stories/data';

storiesOf('RequestExample', module)
  .add('without props', () => (
    <RequestExample />
  ))
  .add('empty object', () => (
    <RequestExample request={{}} />
  ))
  .add('with an example', () => (
    <RequestExample request={requestExample} />
  ));
