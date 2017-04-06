import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Action from './';
import { action } from '../../stories/data';

storiesOf('Action', module)
  .add('without props', () => (
    <Action />
  ))
  .add('Nominal case', () => (
    <Action action={action} />
  ));
