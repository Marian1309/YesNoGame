/** @type {import('prettier').Config} */

const isTailwind = process.env.TAILWIND;

const prettierConfig = {
  printWidth: 90,
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  jsxSingleQuote: false,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  useTabs: false,
  quoteProps: 'as-needed',
  endOfLine: 'auto',
  proseWrap: 'always',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',

    '<THIRD_PARTY_MODULES>',

    '^@/types',
    '^@/types/(.*)$',

    '^@/lib/(.*)$',
    '^@/context/(.*)$',
    '^@/components/(.*)$',

    '^@/assets/(.*)$',

    '^../',
    '^./'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports']
};

const withTailwind = {
  ...prettierConfig,
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss']
};

module.exports = isTailwind ? withTailwind : prettierConfig;
