import { Preview } from "@storybook/react";
import Theme from '../src/theme'
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    }
  },
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],  
};

export default preview;
