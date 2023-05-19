import { css, cx } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Theme/Typography',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;


const typographyStoryWrapper = css`
  padding: 20px;
  display: grid;
  grid-gap: 20px;
`

export const Typography : Story = {
  render: () => (
    <div className={cx(typographyStoryWrapper)}>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        consectetur, velit eu aliquam dictum, libero urna ultrices arcu, eu
        tincidunt nisi libero vitae nunc. Donec euismod, nisl eget ultricies
        ultrices, nunc nunc aliquet nunc, vitae aliquam nunc nisl quis nunc.
        Donec euismod, nisl eget ultricies ultrices, nunc nunc aliquet nunc,
        vitae aliquam nunc nisl quis nunc.
      </p>
    </div>
  )
};