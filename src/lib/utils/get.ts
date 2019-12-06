import { get } from 'styled-system';
import themeGet from '@styled-system/theme-get';
import { theme } from '../theme/theme';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getTheme = (key: string): any => themeGet(key, get(theme, key));
