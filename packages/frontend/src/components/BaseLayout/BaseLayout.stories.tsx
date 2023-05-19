import type { Meta, StoryObj } from '@storybook/react';

import BaseLayout from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BaseLayout> = {
	title: 'Components/BaseLayout',
	component: BaseLayout,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BaseLayout>;

export const Primary: Story = {
	args: {
		// add some basic content to the children prop
		children: (
			<>
				<h1>BaseLayout</h1>
				<p>
					You can use this component to wrap your content in a centered container with a max width.
				</p>
			</>
		),
}
};