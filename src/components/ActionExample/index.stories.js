import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ActionExample from './';
import { action } from '../../stories/data';

storiesOf('ActionExample', module)
  .add('without props', () => (
    <ActionExample />
  ))
  .add('Nominal case', () => (
    <ActionExample example={action.examples[0]} />
  ));
