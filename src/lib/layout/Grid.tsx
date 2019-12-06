import React, { forwardRef } from 'react';
import { SystemProps } from '../constants/system';
import { Box, BoxProps } from './Box';

export interface GridOptions {
  templateColumns?: SystemProps['gridTemplateColumns'];
  gap?: SystemProps['gridGap'];
  rowGap?: SystemProps['gridRowGap'];
  columnGap?: SystemProps['gridColumnGap'];
  autoFlow?: SystemProps['gridAutoFlow'];
  autoRows?: SystemProps['gridAutoRows'];
  autoColumns?: SystemProps['gridAutoColumns'];
  templateRows?: SystemProps['gridTemplateRows'];
  templateAreas?: SystemProps['gridTemplateAreas'];
  area?: SystemProps['gridArea'];
  column?: SystemProps['gridColumn'];
  row?: SystemProps['gridRow'];
}

export type GridProps<P, T> = BoxProps<P, T> & GridOptions;

export const Grid = forwardRef(function Grid<P, T extends HTMLElement>(
  {
    gap,
    rowGap,
    columnGap,
    autoFlow,
    autoRows,
    autoColumns,
    templateRows,
    templateColumns,
    templateAreas,
    area,
    column,
    row,
    ...props
  }: GridProps<P, T>,
  ref: React.Ref<T>,
) {
  return (
    <Box
      ref={ref}
      display="grid"
      gridArea={area}
      gridTemplateAreas={templateAreas}
      gridGap={gap}
      gridRowGap={rowGap}
      gridColumnGap={columnGap}
      gridAutoColumns={autoColumns}
      gridColumn={column}
      gridRow={row}
      gridAutoFlow={autoFlow}
      gridAutoRows={autoRows}
      gridTemplateRows={templateRows}
      gridTemplateColumns={templateColumns}
      {...props}
    />
  );
}) as <P, T>(props: GridProps<P, T>) => React.ReactElement<GridProps<P, T>>;
