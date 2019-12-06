import * as React from 'react';
import { Box, BoxProps } from '../layout/Box';
import { icons } from '../icons';
import { Theme } from '../theme/theme';

interface IconOptions {
  /**
   * The name of the icon.
   */
  name?: keyof Theme['icons'];
  /**
   * The role of the icon. `presentation` or `img`
   */
  role?: 'presentation' | 'img';
}

export type IconProps<P = {}> = BoxProps<P, SVGElement> & IconOptions & React.SVGAttributes<SVGElement>;

export const Icon: React.FC<IconProps> = React.forwardRef(function Icon<P>(
  { size = '1em', name, color = 'currentColor', role = 'presentation', focusable = 'false', ...props }: IconProps<P>,
  ref: React.Ref<SVGElement>,
) {
  const element: JSX.Element = name ? icons[name].path : <></>;
  const viewBox = name ? icons[name] && icons[name].viewBox : '0 0 24 24';

  return (
    <Box<{}, SVGElement>
      ref={ref}
      as="svg"
      size={size}
      color={color}
      flexShrink="0"
      display="inline-block"
      verticalAlign="middle"
      viewBox={viewBox}
      focusable={focusable}
      role={role}
      {...props}
    >
      {element}
    </Box>
  );
});
