import React from 'react';
import { shallow } from 'enzyme';
import Markdown from './';

import { description } from '../../stories/data';

describe('Markdown converter', () => {
  it('renders without crashing without content', () => {
    const render = shallow(<Markdown />);
    const div = (
      <div dangerouslySetInnerHTML={{ __html: '' }} />
    );
    expect(render.contains(div)).toEqual(true);
  });

  it('renders without crashing with empty content', () => {
    const render = shallow(<Markdown markdown="" />);
    const div = (
      <div dangerouslySetInnerHTML={{ __html: '' }} />
    );
    expect(render.contains(div)).toEqual(true);
  });

  it('renders an HTML from Markdown', () => {
    const wrapper = shallow(<Markdown markdown={description} />);
    expect(wrapper.find('div').node.props.dangerouslySetInnerHTML.__html).not.toBe(''); // eslint-disable-line
  });
});
