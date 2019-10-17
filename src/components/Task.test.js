import React from 'react';
import { mount } from 'enzyme';

import Task from './Task';

it('renders correctly (unchecked)', () => {
	const wrapper = mount(
		<Task
			name='Test Task'
			clickHandler={() => {}}
			removeHandler={() => {}}
			isChecked={false}
		/>
	);

	expect(wrapper).toMatchSnapshot();
});

it('renders correctly (checked)', () => {
	const wrapper = mount(
		<Task
			name='Test Task'
			clickHandler={() => {}}
			removeHandler={() => {}}
			isChecked={true}
		/>
	);

	expect(wrapper).toMatchSnapshot();
});
