import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@chakra-ui/storybook-addon", "storybook-addon-apollo-client", "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  webpackFinal: async config => {
    const aliases = ['components', 'views', 'styles', 'data', 'theme'];
    // add resolve aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases.reduce((acc, alias) => {
        acc[`@${alias}`] = require("path").resolve(__dirname, "../src", alias);
        return acc;
      }, {})
    };
    return config;
  }
};
export default config;