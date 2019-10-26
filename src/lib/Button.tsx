import styled from './theme';
import { COMMON } from './constants/system';
import {
  compose,
  variant,
  layout,
  fontSize,
  FontSizeProps,
  Theme,
  SpaceProps,
  ColorProps,
  DisplayProps,
  LayoutProps,
} from 'styled-system';
import { buttonStyles } from './buttonStyles';

interface ButtonProps {
  as?: ['button', 'a', 'summary', 'input'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
  disabled?: boolean;
  fontSize?: FontSizeProps;
  onClick?: () => void;
  theme?: Theme;
  variant?: string;
}

type SystemProps = SpaceProps & ColorProps & DisplayProps & LayoutProps;

const variants = variant({
  variants: {
    small: {
      fontSize: 0,
    },
    medium: {
      fontSize: 1,
    },
    large: {
      fontSize: 2,
    },
  },
});

const Button = styled('button')<ButtonProps & SystemProps>(
  buttonStyles,
  variants,
  // `compose` is used based on styled-system's recommendation here: https://styled-system.com/guides/migrating/#compose
  compose(
    fontSize,
    COMMON,
    layout,
  ),
);

Button.defaultProps = {
  variant: 'medium',
};

export { Button };
