import React from 'react';
import Quote from './Quote';
import expect from 'expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount, shallow} from 'enzyme';
import { JestEnvironment } from '@jest/environment';


configure({ adapter: new Adapter() });

const props = {
  title: "Quote",
  action: jest.fn(() => console.log("action")),
  quote: "Some quote"
}

const component = shallow(<Quote {...props} />); // mount/render/shallow when applicable



describe('Renders Quote Component properly', () => {
  // elements
  const h2 = component.find(`[data-test-id="${props.title}"]`);
  const quote = component.find(`[data-test-id="${props.title}-p"]`);
  const button = component.find(`[data-test-id="${props.title}-button"]`);

  it('renders the h2 title', () => {
    expect(h2).toHaveLength(1);
    expect(h2.text()).toEqual(props.title);
  });
  it('renders the quote', () => {
    // console.log(component.find('h2').debug())
    expect(quote).toHaveLength(1);
    expect(quote.text()).toEqual(props.quote);
  });

  it('calls button action once when clicked', () => {
    button.simulate('click');
    expect(props.action.mock.calls.length).toBe(1);
  })
});
