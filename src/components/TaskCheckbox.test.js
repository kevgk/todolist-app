import React from 'react';
import { mount } from 'enzyme';

import TaskCheckbox from './TaskCheckbox';

it('renders correctly (unchecked)', () => {
	const wrapper = mount(
		<TaskCheckbox clickHandler={() => {}} isChecked={false} />
	);

	expect(wrapper).toMatchSnapshot();
});

it('renders correctly (checked)', () => {
	const wrapper = mount(
		<TaskCheckbox clickHandler={() => {}} isChecked={true} />
	);

	expect(wrapper).toMatchSnapshot();
});
