/** @type { import('@storybook/react').Preview } */

import { withThemeByDataAttribute } from '@storybook/addon-styling'
import { themes } from '@storybook/theming'

import "@cesarneo/react/dist/index.css"
import "../src/tailwind.css"

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    }
  },
};

preview.decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
    attributeName: 'data-mode',
  }),
]

export default preview;
