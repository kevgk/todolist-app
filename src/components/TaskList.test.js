import React from 'react';
import { mount } from 'enzyme';

import TaskList from './TaskList';

it('renders correctly (no tasks)', () => {
	const tasks = [{ id: '0', name: 'Test Task 1', isChecked: false }];
	const wrapper = mount(<TaskList tasks={tasks} />);

	expect(wrapper).toMatchSnapshot();
});

it('renders correctly (1 unchecked task)', () => {
	const tasks = [{ id: '0', name: 'Test Task 1', isChecked: false }];
	const wrapper = mount(<TaskList tasks={tasks} />);

	expect(wrapper).toMatchSnapshot();
});

it('renders correctly (1 checked task)', () => {
	const tasks = [{ id: '0', name: 'Test Task 1', isChecked: true }];
	const wrapper = mount(<TaskList tasks={tasks} />);

	expect(wrapper).toMatchSnapshot();
});
