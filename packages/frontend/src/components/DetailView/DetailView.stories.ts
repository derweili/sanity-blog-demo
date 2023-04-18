import type { Meta, StoryObj } from '@storybook/react';

import DetailView from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DetailView> = {
  title: 'Components/DetailView',
  component: DetailView,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DetailView>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'WALL·E',
    subtitle: '2008',
    shortDescription: 'A robot named WALL·E discovers a new purpose in life when he meets a sleek search robot named EVE.',
    description: 'A robot named WALL·E discovers a new purpose in life when he meets a sleek search robot named EVE.',
    image: 'https://picsum.photos/seed/picsum/900/900',
    labelsHeading: 'Genres',
    labels: ['Animation', 'Adventure', 'Family', 'Sci-Fi'],
    detailsHeading: 'Details',
    details: [
      {
        label: 'Release Date',
        value: '2008-06-22 02:00',
      },
      {
        label: 'Popularity',
        value: '19,020593',
      },
    ]
  },
};

export const WithoutImage: Story = {
  args: {
    ...Primary.args,
    image: undefined,
  },
};
