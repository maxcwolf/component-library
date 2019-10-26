import { compose, space, color, display, SpaceProps, ColorProps, DisplayProps } from 'styled-system';

export type CommonProps = SpaceProps & ColorProps & DisplayProps;

export const COMMON = compose(
  space,
  color,
  display,
);
