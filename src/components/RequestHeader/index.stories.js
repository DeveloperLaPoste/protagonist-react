import React from 'react';
import { storiesOf } from '@kadira/storybook';
import RequestHeader from './';
import { action } from '../../stories/data';

storiesOf('RequestHeader', module)
  .add('without props', () => (
    <RequestHeader />
  ))
  .add('with null props', () => (
    <RequestHeader header={null} />
  ));
