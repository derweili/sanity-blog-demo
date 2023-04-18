import type { Meta, StoryObj } from '@storybook/react';

import MoviesArchiveView from './MoviesArchiveView';
import moviesData from '@data/sanity/fixtures/getMoviesData.json';
import { SanityMovie } from '@data';

const movies : SanityMovie[] = moviesData.result as any;
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MoviesArchiveView> = {
  title: 'Views/MoviesArchiveView',
  component: MoviesArchiveView,
  tags: ['autodocs'],
};


export default meta;
type Story = StoryObj<typeof MoviesArchiveView>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    movies
  }
};