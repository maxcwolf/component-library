import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '../src/lib/theme'

// Question: I had to move this to a seperate tsx file for it to work in config.ts... sup with that?
export const ThemeDecorator = (story) => (<ThemeProvider theme={theme}>{story()}</ThemeProvider>)
