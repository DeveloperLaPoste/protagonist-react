import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Description from './';

import { description } from '../../stories/data';

storiesOf('Description', module)
  .add('without props', () => (
    <Description />
  ))
  .add('empty string', () => (
    <Description description={''} />
  ))
  .add('with markdown', () => (
    <Description description={description} />
  ));
