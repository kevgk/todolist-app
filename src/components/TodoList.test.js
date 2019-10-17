import React from 'react';
import { mount } from 'enzyme';

import TodoList from './TodoList';

it('renders correctly', () => {
	const wrapper = mount(<TodoList />);

	expect(wrapper).toMatchSnapshot();
});
