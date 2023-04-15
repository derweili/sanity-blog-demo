import type { Meta, StoryObj } from '@storybook/react';

import MovieCard from './';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MovieCard> = {
  title: 'Components/MovieCard',
  component: MovieCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MovieCard>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Movie Title',
    description: 'Movie Description',
    year: '2021',
    url: '#movie-url',
    image: 'https://picsum.photos/seed/picsum/400'
  },
};
