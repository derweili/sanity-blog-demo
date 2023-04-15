import type { Preview } from "@storybook/react";
import { MockedProvider } from '@apollo/client/testing';
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
    },
    chakra: {
      theme: {

      }
    },
    apolloClient: {
      MockedProvider
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
