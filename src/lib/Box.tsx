import styled from './theme';
import { compose, space, color, layout, SpaceProps, ColorProps, LayoutProps } from 'styled-system';

// ** Why the fuck does this interface not work!?!? **//
// interface BoxProps extends SpaceProps, ColorProps, LayoutProps {}

type BoxProps = SpaceProps & ColorProps & LayoutProps;

export const Box = styled('div')<BoxProps>(
  compose(
    layout,
    space,
    color,
  ),
);
