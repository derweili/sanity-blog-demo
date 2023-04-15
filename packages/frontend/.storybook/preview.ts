import type { Preview } from "@storybook/react";
import { MockedProvider } from '@apollo/client/testing';

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
  }
};

export default preview;
