import React from 'react';
import { shallow } from 'enzyme';
import Protagonist, { ApiTitle, Description, ResourceGroups } from '../';

describe('Protagonist Element', () => {
  it('renders without crashing without content', () => {
    const render = shallow(<Protagonist source={null} />);
    const div = (
      <div className="Protagonist-main">
        <div className="Protagonist-noContent" />
      </div>
    );
    expect(render.contains(div)).toEqual(true);
  });

  it('renders if doc is an empty object', () => {
    const render = shallow(<Protagonist source={{}} />);
    const children = [
      <ApiTitle title="" className="" />,
      <Description description="" />,
      <ResourceGroups resourceGroups={[]} />,
    ];
    expect(render.contains(children)).toEqual(true);
  });
});
