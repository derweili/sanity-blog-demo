import type { Meta, StoryObj } from '@storybook/react';

import Label from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'Label',
  }
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  args: {
    children: 'CTA Button',
  }
};