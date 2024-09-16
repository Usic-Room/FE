import type { Preview } from "@storybook/react";
import "@/app/globals.css";
import { initialize, mswLoader } from "msw-storybook-addon";

initialize({ onUnhandledRequest: "warn" });

const preview: Preview = {
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },

  tags: ["autodocs", "autodocs"],
};

export default preview;
