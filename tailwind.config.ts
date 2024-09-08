import type { Config } from "tailwindcss";

const colors = {
  light: '#F8F8F8',
  dark: '#0D1117',
  linkedin: '#0E76A8',
  github: '#6E5494',
  instagram: '#C13584',
  x: '#00ACEE',
  telegram: '#24A1DE',
  mail: '#22594B',
  mango1: '#EF9A25',
  mango2: '#A92723',
  mango3: '#EF9B25C5',
  mango4: '#E75D24'
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        light: colors.light,
        dark: colors.dark,
        linkedin: colors.linkedin,
        github: colors.github,
        instagram: colors.instagram,
        x: colors.x,
        telegram: colors.telegram,
        mail: colors.mail,
        mango1: colors.mango1,
        mango2: colors.mango2,
        mango3: colors.mango3,
        mango4: colors.mango4
      },
      backgroundColor: {
        light: colors.light,
        dark: colors.dark,
        mango1: colors.mango1,
        mango2: colors.mango2,
        mango3: colors.mango3,
        mango4: colors.mango4
      },
      borderColor: {
        mango1: colors.mango1,
        mango2: colors.mango2,
        mango3: colors.mango3,
        mango4: colors.mango4
      },
      gradientColorStops: {
        mango1: colors.mango1,
        mango2: colors.mango2,
        mango3: colors.mango3,
        mango4: colors.mango4
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};
export default config;
