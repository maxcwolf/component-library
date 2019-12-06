/** @jsx jsx */
import { jsx, keyframes } from '@emotion/core';
import { forwardRef } from 'react';
import { Box, BoxProps } from '../layout/Box';
import { Hidden } from '../layout/Hidden';
import { Merge } from '../utils/types';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Move this to theme.components.Spinner
const sizes = {
  xs: '0.75rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
};

type Sizes = keyof typeof sizes;

export interface SpinnerOptions {
  /**
   * The size of the spinner
   */
  size?: Sizes | BoxProps['size'];
  /**
   * The color of the empty area in the spinner
   */
  emptyColor?: BoxProps['borderColor'];
  /**
   * The color of the spinner
   */
  color?: BoxProps['borderColor'];
  /**
   * The thickness of the spinner
   * @example
   * ```jsx
   * <Spinner thickness="4px"/>
   * ```
   */
  thickness?: string;
  /**
   * The speed of the spinner.
   * @example
   * ```jsx
   * <Spinner speed="0.2s"/>
   * ```
   */
  speed?: string;
  /**
   * For accessibility, it's important to add a fallback loading text.
   * This text will be visible to screen readers.
   */
  label?: string;
}

export type SpinnerProps = Merge<BoxProps, SpinnerOptions>;

export const Spinner: React.FC<SpinnerProps> = forwardRef(
  (
    {
      size = 'md',
      label = 'Loading...',
      thickness = '2px',
      speed = '0.45s',
      color,
      emptyColor = 'transparent',
      ...props
    }: SpinnerProps,
    ref: React.Ref<HTMLElement>,
  ) => (
    <Box
      ref={ref}
      display="inline-block"
      borderWidth={thickness}
      borderColor="currentColor"
      borderBottomColor={emptyColor}
      borderLeftColor={emptyColor}
      borderStyle="solid"
      rounded="full"
      color={color}
      animation={`${spin} ${speed} linear infinite`}
      size={size}
      {...props}
    >
      {label && <Hidden>{label}</Hidden>}
    </Box>
  ),
);
