import React from 'react';
import { mount } from 'enzyme';

import TaskInput from './TaskInput';

it('renders correctly', () => {
	const wrapper = mount(<TaskInput dispatch={() => {}} />);

	expect(wrapper).toMatchSnapshot();
});
