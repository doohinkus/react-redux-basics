import React from 'react';
import Quote from './Quote';
import expect from 'expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount, shallow} from 'enzyme';


configure({ adapter: new Adapter() });

const props = {
  title: "Quote",
  action: () => console.log("action"),
  quote: "Some quote"
}

const component = shallow(<Quote {...props} />); // mount/render/shallow when applicable


describe('Renders Quote Component properly', () => {
  const h2 = component.find('h2');
  it('renders the h2 title', () => {
    // console.log(component.find('h2').debug())
    expect(h2).toHaveLength(1);
    expect(h2.text()).toEqual(props.title);
  })
})
