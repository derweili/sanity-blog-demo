import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Theme/Colors',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

const colorPlaceholder = css`
  width: 100%;
  height: 100%;
  min-height: 100px;
  background-color: #e6e6e6;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  display: grid;
  place-items: center;

  &.primary {
    background-color: var(--c-primary);
  }

  &.secondary {
    background-color: var(--c-secondary);
  }

  &.tertiary {
    background-color: var(--c-tertiary);
  }
`

export const Colors : Story = {
  render: () => (
    <div>
      <div className= { colorPlaceholder + ' primary'}> Primary </div>
      <div className = { colorPlaceholder + ' secondary'}> Secondary </div>
      <div className = { colorPlaceholder + ' tertiary'}> Tertiary </div>
    </div>
  )
};