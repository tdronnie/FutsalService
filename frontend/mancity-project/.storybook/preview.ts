import type { Preview } from "@storybook/react";
import "../src/index.css";
import { withRouter } from "storybook-addon-remix-react-router";

const preview: Preview = {
  parameters: {
    // on으로 시작하는 모든 함수의 동작을 actions tab에서 확인할 수 있음
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withRouter],
};

export default preview;
