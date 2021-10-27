module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/sections/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      dropShadow: {
        gray: '0 0 0.2rem grey',
      },
    },
    colors: {
      blue: {
        DEFAULT: '#3B82F6',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      gray: {
        light: '#D1D5DB',
        DEFAULT: '#4B5563',
      },
      red: {
        DEFAULT: '#DC2626',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
