import { configure, addDecorator } from "@storybook/react";
import { htmlProps } from './excludedProps'
import { withInfo } from "@storybook/addon-info";
import { ThemeProvider } from 'emotion-theming'
import { ThemeDecorator } from './ThemeDecorator'

// automatically import all files ending in *.stories.tsx
const req = require.context("../src", true, /.stories.tsx$/);

function loadStories() {
  addDecorator(withInfo({
    inline: true,
    propTablesExclude: [ThemeProvider, ThemeDecorator],
    excludedPropTypes: htmlProps
  }));
  addDecorator(ThemeDecorator) // adding the ThemeDecorator after adding withInfo prevents the wrapping component to dispaly in storysource
  req.keys().forEach(req);
}

configure(loadStories, module);
