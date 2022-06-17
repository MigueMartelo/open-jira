module.exports = {
  tabWidth: 2,
  printWidth: 100,
  endOfLine: 'auto',
  arrowParens: 'avoid',
  trailingComma: 'es5',
  semi: true,
  useTabs: false,
  singleQuote: true,
  bracketSpacing: true,
  overrides: [
    {
      files: ['**/*.css', '**/*.scss', '**/*.html'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
