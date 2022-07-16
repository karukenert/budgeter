module.exports = {
  root: true, // TODO: check if necessary
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/script-setup-uses-vars': 'error',
  },
  // TODO: check if env should be added
  // env: {
  //   node: true,
  //   es2021: true,
  // },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    // parserOptions: {  }, // TODO: check if necessary?
    sourceType: "module",
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
};

