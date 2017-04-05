import React from 'react';
import { shallow } from 'enzyme';
import { RequestHeaders } from '../';

describe('RequestHeaders Element', () => {
  it('renders without crashing without content', () => {
    const render = shallow(<RequestHeaders />);
    const div = (
      <div className="RequestHeaders-main">
        <table className="table">
          <tbody />
        </table>
      </div>
    );
    expect(render.contains(div)).toEqual(true);
  });
});
