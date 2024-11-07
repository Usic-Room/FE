import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        "purple-AC25FF": "#AC25FF",
        "purple-8D67AB": "#8D67AB",
        "purple-B49BC8": "#B49BC8",

        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        bermuda: "#78dcca",
        "bubble-gum": "#ff77e9",

        "gray-D9DADC": "#D9DADC",
        "gray-878787": "#878787",
        "gray-6A6A6A": "#6A6A6A",
        "gray-727272": "#727272",

        "black-121212": "#121212", // main page's layer background
        "black-1F1F1F": "#1F1F1F", // main page's component background

        "green-27856A": "#27856A",

        "blue-283EA3": "#283EA3",
        "blue-1E3264": "#1E3264",
        "blue-7358FF": "#7358FF",
        "blue-9CF0E1": "#9CF0E1",

        "red-E8115B": "#E8115B",

        "pink-F037A5": "#F037A5",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradi2ent(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
