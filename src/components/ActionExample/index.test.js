import React from 'react';
import { shallow } from 'enzyme';
import { ActionExample, RequestExample, ResponseExample } from '../';
import { action } from '../../stories/data';

describe('ActionExample Element', () => {
  it('renders without crashing without content', () => {
    const render = shallow(<ActionExample />);
    const div = (
      <div className="ActionExample-main">
        <div className="ActionExample-noContent" />
      </div>
    );
    expect(render.contains(div)).toEqual(true);
  });

  it('renders an ActionExample', () => {
    const example = action.examples[0];
    const render = shallow(<ActionExample example={example} />);
    const divs = [
      <RequestExample request={example.requests[0]} />,
      <ResponseExample response={example.responses[0]} />,
    ];
    expect(render.contains(divs)).toEqual(true);
  });
});
