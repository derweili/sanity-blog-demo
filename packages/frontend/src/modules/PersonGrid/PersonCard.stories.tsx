import type { Meta, StoryObj } from '@storybook/react';

import PersonCard from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PersonCard> = {
  title: 'Components/PersonCard',
  component: PersonCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PersonCard>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    name: 'Lindsey James',
    avatar: 'https://picsum.photos/seed/picsum/200/200',
    username: 'lindseyjames',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eu ante. Sed euismod, nisl nec ultricies lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eu ante.',
    labels: ['My label', 'My other label'],
    ctaPrimary: {
      label: 'Follow',
      href: 'https://google.com',
    },
    ctaSecondary: {
      label: 'More',
      href: 'https://google.com',
    },
  }
};

export const NoAvatar: Story = {
  args: {
    ...Primary.args,
    avatar: undefined,
  }
};
