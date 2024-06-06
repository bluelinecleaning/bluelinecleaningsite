import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    },
    extend: {
      colors: {
        blueBranding: '#007FA3'
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'open-services': {
          '0%': { transform: 'scaleY(0) scaleX(0)' },
          '100%': { transform: 'scaleY(1) scaleX(1)' },
        },
        'blur': {
          '0%': { filter: "blur(3px)" },
          '100%': { filter: "blur(0px)" }
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in forwards',
        'close-menu': 'close-menu 0.5s ease-in-out forwards',
        'open-services': 'open-services 0.5s ease-in-out forwards',
        'close-services': 'close-services 0.5s ease-in-out forwards',
        'blur': 'blur 1s linear'
      }
    },
  },
  plugins: [],
};
export default config;
