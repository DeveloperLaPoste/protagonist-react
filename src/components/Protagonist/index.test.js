import React from 'react';
import { shallow } from 'enzyme';
import Protagonist from '../';

it('renders without crashing without content', () => {
  const render = shallow(<Protagonist source={null} />);
  const div = (
    <div className="Protagonist-main">
      <div className="Protagonist-noContent" />
    </div>
  );
  // console.log(render);
  expect(render.contains(div)).toEqual(true);
});
