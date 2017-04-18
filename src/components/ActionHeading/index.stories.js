import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ActionHeading from './';
import { action } from '../../stories/data';

storiesOf('ActionHeading', module)
  .add('without props', () => (
    <ActionHeading />
  ))
  .add('with empty string props', () => (
    <ActionHeading method={''} name={''} uri={''} />
  ))
  .add('with only name', () => (
    <ActionHeading method={''} name={action.name} uri={''} />
  ))
  .add('with name and method', () => (
    <ActionHeading method={action.method} name={action.name} uri={''} />
  ))
  .add('with name and method and an not empty string for URI', () => (
    <ActionHeading method={action.method} name={action.name} uri={' '} />
  ))
  .add('with all props', () => (
    <ActionHeading method={action.method} name={action.name} uri={action.attributes.uriTemplate} />
  ));
