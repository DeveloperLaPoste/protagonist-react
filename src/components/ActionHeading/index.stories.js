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
  .add('with all props (default)', () => (
    <ActionHeading method={action.method} name={action.name} uri={action.attributes.uriTemplate} />
  ))
  .add('with all props (POST method)', () => (
    <ActionHeading method="POST" name={action.name} uri={action.attributes.uriTemplate} />
  ))
  .add('with all props (DELETE method)', () => (
    <ActionHeading method="DELETE" name={action.name} uri={action.attributes.uriTemplate} />
  ))
  .add('with all props (PUT method)', () => (
    <ActionHeading method="PUT" name={action.name} uri={action.attributes.uriTemplate} />
  ))
  .add('with all props (PATCH method)', () => (
    <ActionHeading method="PATCH" name={action.name} uri={action.attributes.uriTemplate} />
  ))
