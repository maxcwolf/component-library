import { ThemeContext } from '@emotion/core';
import { useContext } from 'react';
import { Theme } from './theme';

export const useTheme = () => {
  const theme = useContext(ThemeContext as React.Context<Theme>);
  if (!theme) {
    throw new Error('useTheme must be wrapped in ThemeProvider');
  }
  return theme;
};
