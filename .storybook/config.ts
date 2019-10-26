import { htmlProps } from './excludedProps'
import React from 'react'
import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { ThemeProvider } from 'emotion-theming'
import { theme } from '../src/lib/theme'



// automatically import all files ending in *.stories.tsx
const req = require.context("../src", true, /.stories.tsx$/);

// const themeDecorator = (story) => (<ThemeProvider theme={theme}>{story()}</ThemeProvider>)

// addDecorator(themeDecorator)
function loadStories() {
  addDecorator(withInfo({
    excludedPropTypes: htmlProps
  }));
  req.keys().forEach(req);
}

configure(loadStories, module);
