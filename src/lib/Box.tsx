import { compose, space, color, layout, SpaceProps, ColorProps, LayoutProps } from 'styled-system';
import styled from '@emotion/styled';

type Props = {
  as: string;
  ref: React.Ref<HTMLDivElement>;
  variant: string;
};

type BoxProps = SpaceProps & ColorProps & LayoutProps & Props;

export const Box = styled('div')<BoxProps>(compose(layout, space, color));
