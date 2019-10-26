import { get } from 'styled-system';
import themeGet from '@styled-system/theme-get';
import { theme } from '../theme';

export const getTheme = (key: string): string => themeGet(key, get(theme, key));
