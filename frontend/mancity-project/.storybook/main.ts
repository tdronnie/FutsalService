import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-storysource",
    "@storybook/addon-measure",
    "@storybook/addon-outline",
    "@storybook-addon-remix-react-router",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
    // autodocs: 'tags', 를 true로 두면
    // stories에 tags: ["autodocs"], 안적어도 됨
  },
};
export default config;
