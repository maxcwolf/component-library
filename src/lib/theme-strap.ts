import { Theme } from 'styled-system';

export const baseColors = {
  white: '#fff',
  black: '#000',
  gray: [
    '#fff', // 0 index
    '#f8f9fa',
    '#e9ecef',
    '#dee2e6',
    '#ced4da',
    '#adb5bd',
    '#6c757d',
    '#495057',
    '#343a40',
    '#212529',
  ],
  blue: '#007bff',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#e83e8c',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#28a745',
  teal: '#20c997',
  cyan: '#17a2b8',
  // gray: gray[6],
};

export const colors = {
  ...baseColors,
  grayDark: baseColors.gray[8],
  text: baseColors.gray[9],
  background: baseColors.white,
  primary: baseColors.blue,
  secondary: baseColors.gray[6],
  muted: baseColors.gray[3],
  success: baseColors.green,
  info: baseColors.cyan,
  warning: baseColors.yellow,
  danger: baseColors.red,
  light: baseColors.gray[1],
  dark: baseColors.gray[8],
  textMuted: baseColors.gray[6],
};

export const space = [0, 0.25, 0.5, 1, 1.5, 3].map(n => n + 'rem');

export const breakpoints = ['576px', '768px', '992px', '1200px'];

export const fonts = {
  body:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  heading: 'inherit',
  monospace: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  sans: this.body,
};

export const fontWeights = {
  body: 400,
  heading: 500,
  bold: 700,
  light: 300,
  normal: this.body,
  display: this.light,
};

export const fontSizes = [
  '0.75rem', // '80%',
  '0.875rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '1.75rem',
  '2rem',
  '2.5rem',
  '3.5rem',
  '4.5rem',
  '5.5rem',
  '6rem',
];

export const lineHeights = {
  body: 1.5,
  heading: 1.2,
};

export const sizes = {
  // container widths
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1140,
};

export const radii = {
  default: '0.25rem',
  sm: '0.2rem',
  lg: '0.3rem',
  pill: '50rem',
};

export const shadows = {
  default: '0 .5rem 1rem rgba(0, 0, 0, .15)',
  sm: '0 .125rem .25rem rgba(0, 0, 0, .075)',
  lg: '0 1rem 3rem rgba(0, 0, 0, .175)',
};

export const bootstrap: Theme = {
  breakpoints,
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  sizes,
  shadows,
  radii,
};

export default bootstrap;
