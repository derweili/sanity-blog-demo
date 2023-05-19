import type { Meta, StoryObj } from '@storybook/react';

import CtaButton from './';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CtaButton> = {
  title: 'Components/CtaButton',
  component: CtaButton,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'CTA Button',
    href: '#',
  }
};

export default meta;

type Story = StoryObj<typeof CtaButton>;

export const Primary: Story = {
  args: {
    children: 'CTA Button',
  }
};