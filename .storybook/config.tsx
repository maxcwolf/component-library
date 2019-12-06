import React from 'react'
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from 'emotion-theming'
import { theme } from '../src/lib/theme/theme'

const ThemeDecorator = (story) => (<ThemeProvider theme={theme}>{story()}</ThemeProvider>)

const req = require.context("../src", true, /\.stories\.(mdx|[tj]sx?)$/)

const loadStories = () => {
  addDecorator(ThemeDecorator)
  req.keys().forEach(req);
}

configure(loadStories, module);
