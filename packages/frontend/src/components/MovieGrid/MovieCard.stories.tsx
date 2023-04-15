import type { Meta, StoryObj } from '@storybook/react';

import MovieGrid from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MovieGrid> = {
  title: 'Components/MovieGrid',
  component: MovieGrid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MovieGrid>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    // create 4 children
    children: Array.from({ length: 4 }).map((_, i) => (
      <div key={i}>Movie Card {i + 1}</div>
    )),
  },
};
