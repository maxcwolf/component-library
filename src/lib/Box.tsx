import { compose, space, color, layout, SpaceProps, ColorProps, LayoutProps } from 'styled-system';
import css, { get } from '@styled-system/css';
import styled from './theme';

type Props = {
  as: string;
  ref: React.Ref<HTMLDivElement>;
  variant: string;
};

type BoxProps = SpaceProps & ColorProps & LayoutProps & Props;

const variant = ({ theme, variant, __themeKey = 'variants' }) =>
  css(get(theme, __themeKey + '.' + variant, get(theme, variant)));

export const Box = styled('div')<BoxProps>(
  variant,
  compose(
    layout,
    space,
    color,
  ),
);
