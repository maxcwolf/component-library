import { configure, addDecorator } from "@storybook/react";
import { htmlProps } from './excludedProps'
import { withInfo } from "@storybook/addon-info";
import { ThemeProvider } from 'emotion-theming'
import { ThemeDecorator } from './ThemeDecorator'
import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
 

// automatically import all files ending in *.stories.tsx
const req = require.context("../src", true, /.stories.tsx$/);

function loadStories() {
  // addDecorator(withInfo({
  //   inline: true,
  //   propTablesExclude: [ThemeProvider, ThemeDecorator],
  //   excludedPropTypes: htmlProps
  // }));
  addParameters({
    docs: {
      container: DocsContainer,
      page: DocsPage,
    },
  });
  addDecorator(ThemeDecorator) // adding the ThemeDecorator after adding withInfo prevents the wrapping component to dispaly in storysource
  req.keys().forEach(req);
}

configure(loadStories, module);
