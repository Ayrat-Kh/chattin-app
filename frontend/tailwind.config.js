// const plugin = require("tailwindcss/plugin");

// const prevSiblingCheckedPlugin = plugin(function ({ addVariant, e }) {
//   addVariant("prev-sibling:checked", ({ container }) => {
//     container.walkRules((rule) => {
//       rule.selector = `:checked ~ .prev-sibling\\:checked\\:${rule.selector.slice(1)}`;
//       console.log('rule.selector')
//     });
//   });
// });

// const prevSiblingCheckedAfterPlugin = plugin(function ({ addVariant, e }) {
//   addVariant("after:prev-sibling:checked", ({ container }) => {
//     container.walkRules((rule) => {
//       rule.selector = `:checked ~ .after\\:prev-sibling\\:checked\\:${rule.selector.slice(1)}`;
//     });
//   });
// });

// const afterPlugin = plugin(function ({ addVariant, e }) {
//   addVariant("after", ({ container }) => {
//     container.walkRules((rule) => {
//       rule.selector = `after\\:${rule.selector.slice(1)}`;
//     });
//   });
// });

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/sections/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      dropShadow: {
        gray: '0 0 0.2rem grey',
      }
    },
  },
  variants: {
    extend: {}
  },
  plugins: []
}
