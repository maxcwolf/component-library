import { FunctionInterpolation } from '@emotion/styled';
import {
  layout,
  zIndex,
  color,
  space,
  background,
  border,
  grid,
  position,
  shadow,
  typography,
  flexbox,
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  BordersProps,
  FlexboxProps,
  ShadowProps,
  GridProps,
  OpacityProps,
  OverflowProps,
  PositionProps,
  ZIndexProps,
  compose,
  ResponsiveValue,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  LetterSpacingProps,
} from 'styled-system';
import { customProps, CustomProps } from '../utils/transform';
import { PseudoProps } from '../utils/pseudo';
import { Omit } from '../utils/types';
import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import { Theme } from '../theme/theme';

export type CommonProps = SpaceProps & ColorProps & LayoutProps;

export const COMMON = compose(space, color, layout);

// Prevent some prop from getting to the underlying DOM element
const _shouldForwardProp = createShouldForwardProp([
  ...props,
  'd',
  'textDecoration',
  'pointerEvents',
  'visibility',
  'transform',
  'cursor',
  'fill',
  'stroke',
]);

/**
 * htmlWidth and htmlHeight is used in the <Image />
 * component to support the native `width` and `height` attributes
 */
const nativeHTMLPropAlias = ['htmlWidth', 'htmlHeight'];

export const shouldForwardProp = (prop: string) => {
  if (nativeHTMLPropAlias.includes(prop)) {
    return true;
  } else {
    return _shouldForwardProp(prop);
  }
};

// Compose all style functions into a single function
export const systemFn = compose(
  layout,
  color,
  space,
  background,
  border,
  grid,
  position,
  shadow,
  typography,
  flexbox,
  zIndex,
  customProps,
);

// Allow users pass the `isTruncated` prop from any component
export function truncate(props: { isTruncated?: boolean }): SystemProps | undefined {
  if (props.isTruncated) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    };
  }
}

// Type Definitions

// Modify the font size types from styled-system to include fontSizes in Theme
interface ModifiedFontSize {
  fontSize?: ResponsiveValue<keyof Theme['fontSizes']> | FontSizeProps['fontSize'];
}

// Modify the font weight types from styled-system to include fontWeight in Theme
interface ModifiedFontWeight {
  fontWeight?: ResponsiveValue<keyof Theme['fontWeights']> | FontWeightProps['fontWeight'];
}

// Modify the font line types from styled-system to include lineHeight in Theme
interface ModifiedLineHeight {
  lineHeight?: ResponsiveValue<keyof Theme['lineHeights']> | LineHeightProps['lineHeight'];
}

// Modify the font size types from styled-system to include letterSpacing in Theme
interface ModifiedLetterSpacing {
  letterSpacing?: ResponsiveValue<keyof Theme['letterSpacings']> | LetterSpacingProps['letterSpacing'];
}

// Replace the types in styled-system typography with modified types
type ModifiedTypographyProps = Omit<TypographyProps, 'fontWeight' | 'lineHeight' | 'fontSize' | 'letterSpacing'> &
  ModifiedFontSize &
  ModifiedFontWeight &
  ModifiedLineHeight &
  ModifiedLetterSpacing;

// All system props
export type SystemProps = ColorProps &
  LayoutProps &
  SpaceProps &
  ModifiedTypographyProps &
  PositionProps &
  BordersProps &
  FlexboxProps &
  ShadowProps &
  GridProps &
  OpacityProps &
  PseudoProps &
  OverflowProps &
  ZIndexProps &
  CustomProps;
