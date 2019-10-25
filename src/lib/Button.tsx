import styled from '@emotion/styled';
import { COMMON } from './constants/system';
import theme from './theme';
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

interface Props {
  as?: ['button', 'a', 'summary', 'input'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
  disabled?: boolean;
  fontSize?: FontSizeProps;
  onClick?: () => void;
  theme?: Theme;
  variant?: string;
}

type StyleProps = SpaceProps & ColorProps & DisplayProps & LayoutProps;

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

const Button = styled('button')<Props & StyleProps>(
  variants,
  compose(
    fontSize,
    COMMON,
    layout,
  ),
);

Button.defaultProps = {
  theme,
  variant: 'medium',
};

export { Button };
