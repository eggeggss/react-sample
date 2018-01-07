import React from 'react';
import { shallow } from 'enzyme';

import TodoItem from './TodoItem';

const props = {
  id: 1,
  done: true,
  toggleItem: jest.fn(),
};

const text = 'text123';

const wrapper = shallow(<TodoItem {...props}>{text}</TodoItem>);

it('should render class', () => {

  expect(wrapper.hasClass('todo-item')).toBe(true);
  expect(wrapper.hasClass('done')).toBe(true);
});

// yarn run test

it('should render text', () => {
  expect(wrapper.text()).toBe(text);
});


it('should call toggleitem after clicked', () => {
  wrapper.simulate('click');
  expect(props.toggleItem).toHaveBeenCalledTimes(1);
});

it('should match snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});
