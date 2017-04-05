import React from 'react';
import { shallow } from 'enzyme';
import { ApiTitle } from '../';

describe('ApiTitle Element', () => {
  it('renders without crashing without content', () => {
    const render = shallow(<ApiTitle title="" />);
    const div = <h1 className="Protagonist-title">{''}</h1>;
    expect(render.contains(div)).toEqual(true);
  });

  it('renders a h1 with a title', () => {
    const render = shallow(<ApiTitle title="API Test" />);
    const div = <h1 className="Protagonist-title">API Test</h1>;
    expect(render.contains(div)).toEqual(true);
  });

  it('renders a h1 with a title and a custom className', () => {
    const render = shallow(<ApiTitle title="API Test" className="class-test" />);
    const div = <h1 className="Protagonist-title class-test">API Test</h1>;
    expect(render.contains(div)).toEqual(true);
  });
});
