import React from 'react';
import { mount } from 'enzyme';

import TaskCountFeedback from './TaskCountFeedback';

it('renders correctly (0 open tasks)', () => {
	const tasks = [{ isChecked: true }];

	const wrapper = mount(<TaskCountFeedback tasks={tasks} />);

	expect(wrapper).toMatchSnapshot();
});

it('renders correctly (1 open tasks)', () => {
	const tasks = [{ isChecked: false }];

	const wrapper = mount(<TaskCountFeedback tasks={tasks} />);

	expect(wrapper).toMatchSnapshot();
});
