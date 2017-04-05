import React from 'react';
import { storiesOf } from '@kadira/storybook';
import RequestHeaders from './';

storiesOf('RequestHeaders', module)
  .add('without headers', () => (
    <RequestHeaders headers={[]} />
  ))
  .add('one header', () => (
    <RequestHeaders headers={[{ name: 'Accept', value: 'application/json' }]} />
  ))
  .add('two header', () => (
    <RequestHeaders
      headers={[
        { name: 'Accept', value: 'application/json' },
        { name: 'charset', value: 'utf8' },
      ]}
    />
  ));
