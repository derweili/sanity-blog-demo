import type { Meta, StoryObj } from '@storybook/react';

import MoviesArchiveView from './MoviesArchiveView';
import { MoviesDocument } from '@data/graphql/generated/graphql';

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
  args: {},
};

Primary.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: MoviesDocument
        },
        result: {
          data: {
            allMovie: [
              ...Array.from({ length: 5 }).map((_, i) => ({
                  _id: "movie_78",
                  _type : "movie",
                  title: 'Movie 1',
                  __typename: "Movie",
                  description: 'Description 1',
                  releaseDate: '2021-01-01',
                  reatedAt: '2021-01-01',
                  slug: {
                    _type: 'slug',
                    current: 'movie-1'
                  },
                  poster: {
                    _type: 'image',
                    asset: {
                      url: `https://picsum.photos/seed/pic${i}/400`
                    }
                  }
              }))
            ]
          },
        },
      }
    ]
  }
};

export const ErrorStory: Story = {
  name: 'Error',
  args: {},
};

ErrorStory.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: MoviesDocument
        },
        error: new Error('Something went wrong')
      }
    ]
  }
};

export const Loading: Story = {
  args: {},
};

Loading.parameters = {
  apolloClient: {
    mocks: [
      {
        delay: 999999999999999,
        request: {
          query: MoviesDocument
        },
        result: {
          data: {
            allMovie: []
          }
        }
      }
    ]
  }
};