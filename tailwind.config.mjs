/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      serif: ['Alegreya'],
    },
    extend: {},
  },
  daisyui: {
    // Add your daisy ui themes here
    themes: [
      {
        bang: {
          "primary": "#F2545B",
          "secondary": "#8D534B",
          "accent": "#FFC107",
          "neutral": "#6C757D",
          "base-100": "#F5E5C8",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
