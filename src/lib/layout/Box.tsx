import * as React from 'react';
import styled, { FunctionInterpolation } from '@emotion/styled';
import { Omit } from '../utils/types';
import { systemFn, shouldForwardProp, SystemProps, truncate } from '../constants/system';
import { pseudo } from '../utils/pseudo';

type BoxHTMLProps<T> = React.RefAttributes<T> & Omit<React.HTMLAttributes<T>, 'color'>;

export type BoxProps<P = {}, T = HTMLElement> = SystemProps &
  BoxHTMLProps<T> &
  P & {
    as?: React.ElementType;
    isTruncated?: boolean;
  };

const StyledBox = styled('div', {
  shouldForwardProp,
})(systemFn, pseudo as FunctionInterpolation<object>, truncate as FunctionInterpolation<any>);

export const Box = React.forwardRef(<P, T extends HTMLElement>(props: BoxProps<P, T>, ref: React.Ref<T>) => (
  <StyledBox ref={ref} {...props} />
)) as <P, T = HTMLElement>(props: BoxProps<P, T>) => React.ReactElement<BoxProps<P, T>>;

//export const Box = styled('div', { shouldForwardProp })<BoxProps>(systemFn);
