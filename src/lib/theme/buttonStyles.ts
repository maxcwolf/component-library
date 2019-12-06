import { useTheme } from './useTheme';
import { Theme } from './theme';
import { useColorMode } from './colorMode';
import { ButtonOptions } from '../components/Button';
import { SystemProps } from '../constants/system';

// TODO: Move all these to theme object
// Under theme.components.Button = {root: "", variants: "", sizes: ""}

const grayGhostStyle: { [k in 'light' | 'dark']: SystemProps } = {
  light: {
    color: 'inherit',
    _hover: {
      bg: 'gray.1',
    },
    _active: {
      bg: 'gray.2',
    },
  },
  dark: {
    color: 'whiteAlpha.9',
    _hover: {
      bg: 'whiteAlpha.2',
    },
    _active: {
      bg: 'whiteAlpha.3',
    },
  },
};

const ghostVariantProps = ({ color, colorMode, theme }: VariantStyleProps): SystemProps => {
  const result: { [k: string]: SystemProps } =
    color === 'gray'
      ? grayGhostStyle
      : {
          light: {
            color: `${color}.5`,
            bg: 'transparent',
            _hover: {
              bg: `${color}.2`,
            },
            _active: {
              bg: `${color}.1`,
            },
          },
          dark: {
            color: `${color}.2`,
            bg: 'transparent',
            _hover: {
              bg: `${color}.1`,
            },
            _active: {
              bg: `${color}.3`,
            },
          },
        };

  return result[colorMode];
};

////////////////////////////////////////////////////////////

const outlineVariantProps = (props: VariantStyleProps): SystemProps => {
  const { color, colorMode } = props;
  const borderColor = { light: 'gray.2', dark: 'whiteAlpha.3' };

  return {
    border: '1px',
    borderColor: color === 'gray' ? borderColor[colorMode] : 'current',
    ...ghostVariantProps(props),
  };
};

////////////////////////////////////////////////////////////

const graySolidStyle = {
  light: {
    bg: 'gray.1',
    _hover: {
      bg: 'gray.2',
    },
    _active: {
      bg: 'gray.3',
    },
  },
  dark: {
    bg: 'whiteAlpha.2',
    _hover: {
      bg: 'whiteAlpha.3',
    },
    _active: {
      bg: 'whiteAlpha.4',
    },
  },
};

const solidVariantProps = ({ color, colorMode }: VariantStyleProps): SystemProps => {
  const style: { [k: string]: SystemProps } =
    color === 'gray'
      ? graySolidStyle
      : {
          light: {
            bg: `${color}.5`,
            color: 'white',
            _hover: {
              bg: `${color}.6`,
            },
            _active: {
              bg: `${color}.7`,
            },
          },
          dark: {
            bg: `${color}.1`,
            color: 'gray.8',
            _hover: {
              bg: `${color}.3`,
            },
            _active: {
              bg: `${color}.4`,
            },
          },
        };

  return style[colorMode];
};

////////////////////////////////////////////////////////////

const linkVariantProps = ({ color, colorMode }: VariantStyleProps): SystemProps => {
  const _color = { light: `${color}.5`, dark: `${color}.2` };
  const _activeColor = { light: `${color}.7`, dark: `${color}.5` };
  return {
    p: 0,
    height: 'auto',
    lineHeight: 'normal',
    color: _color[colorMode],
    _hover: {
      textDecoration: 'underline',
    },
    _active: {
      color: _activeColor[colorMode],
    },
  };
};

////////////////////////////////////////////////////////////

const disabledProps: SystemProps = {
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
};

////////////////////////////////////////////////////////////

const sizes = {
  lg: {
    height: 12,
    minWidth: 12,
    fontSize: 'lg',
    px: 6,
  },
  md: {
    height: 10,
    minWidth: 10,
    fontSize: 'md',
    px: 4,
  },
  sm: {
    height: 8,
    minWidth: 8,
    fontSize: 'sm',
    px: 3,
  },
  xs: {
    height: 6,
    minWidth: 6,
    fontSize: 'xs',
    px: 2,
  },
};

const sizeProps = ({
  size,
}: {
  size: keyof typeof sizes;
}): {
  height: number;
  minWidth: number;
  fontSize: string;
  px: number;
} => sizes[size];

////////////////////////////////////////////////////////////

const focusProps: SystemProps = {
  _focus: {
    boxShadow: 'outline',
  },
};

////////////////////////////////////////////////////////////

const unstyledStyle: SystemProps = {
  userSelect: 'inherit',
  bg: 'none',
  border: 0,
  color: 'inherit',
  display: 'inline',
  fontFamily: 'inherit',
  lineHeight: 'inherit',
  m: 0,
  p: 0,
  textAlign: 'inherit',
};

////////////////////////////////////////////////////////////

const variantProps = (props: VariantStyleProps) => {
  switch (props.variant) {
    case 'solid':
      return solidVariantProps(props);
    case 'ghost':
      return ghostVariantProps(props);
    case 'link':
      return linkVariantProps(props);
    case 'outline':
      return outlineVariantProps(props);
    case 'unstyled':
      return unstyledStyle;
    default:
      return {};
  }
};

////////////////////////////////////////////////////////////

const baseProps: SystemProps = {
  display: 'inline-flex',
  appearance: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 250ms',
  userSelect: 'none',
  position: 'relative',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  lineHeight: '1.2',
  outline: 'none',
};

////////////////////////////////////////////////////////////

interface VariantStyleProps extends UseButtonStyleProps {
  colorMode: 'light' | 'dark';
  theme: Theme;
}

type RequiredButtonOptions = Required<ButtonOptions>;

interface UseButtonStyleProps {
  color: RequiredButtonOptions['variantColor'];
  variant: RequiredButtonOptions['variant'];
  size: RequiredButtonOptions['size'];
}

export const useButtonStyle = (props: UseButtonStyleProps): SystemProps => {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const _props = { ...props, colorMode, theme };
  return {
    ...baseProps,
    ...sizeProps(_props),
    ...focusProps,
    ...disabledProps,
    ...variantProps(_props),
  };
};
