import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  // General
  {
    plugins: {
      vue: require('eslint-plugin-vue'),
    },
    typescript: true, vue: true,
    stylistic: {
      indent: "tab",
      quotes: "double"
    },
    rules: {
      "vue/block-order": ["error", {
        order: ["script", "template", "style"]
      }]
    }
  },

  // Vue
  {
    files: ["**/*.vue"],
    rules: {
      "style/indent": "off"
    }
  }
);
