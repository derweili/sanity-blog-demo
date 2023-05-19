import type { StorybookConfig } from "@storybook/nextjs";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  core: {
    "builder": "@storybook/builder-webpack5"
  },
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  webpackFinal: async (config, { configType }) => {

    const aliases = ['components', 'modules', 'views', 'styles', 'data', 'theme'];

    // add typescript import aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases.reduce((acc, alias) => {
        acc[`@${alias}`] = require("path").resolve(__dirname, "../src", alias);
        return acc;
      }, {})
    };

    // console.log(config.module.rules);

    // find tsx rule
    const tsxRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('file.tsx')
    );

    // add linaria loader
    tsxRule.use.push({
      loader: '@linaria/webpack-loader',
      // options: {
      //   sourceMap: configType !== 'PRODUCTION',
      // },
      options: {
        sourceMap: configType !== 'PRODUCTION'
      },
    });


    // /**
    //  * Add @linaria loader to storybook webpack config
    //  */
    // config.module.rules.push({
    //   test: /\.(js|jsx|ts|tsx)$/,

    // config.module.rules.push({
    //   test: /\.(js|jsx|ts|tsx)$/,
    //   exclude: /node_modules/,

    //   // include only files in src folder
    //   include: require("path").resolve(__dirname, "../src"),

    //   use: [{
    //     loader: '@linaria/webpack-loader',
    //     options: {
    //       sourceMap: configType !== 'PRODUCTION',
    //     },
    //   }],
    // });

    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg')
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack')
    });

    return config
  }
};
export default config;