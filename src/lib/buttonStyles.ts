import { css } from '@styled-system/css';
import themeGet from '@styled-system/theme-get';
import { get } from 'styled-system';
import { theme } from './theme';

export const buttonStyles = props =>
  css({
    position: 'relative',
    display: 'inline-block',
    padding: '6px 12px',
    color: get('colors.gray.9'),
    backgroundColor: get('colors.gray.1'),
    // For whatever reason, typescript is forcing me to use bracket notation on colors
    backgroundImage: `linear-gradient(-180deg, ${theme.colors['gray'][0]} 0%, ${theme.colors['button'].bg2} 90%)`,
    fontSize: 1, // TODO: refactor variants, this is unecessary if the variant has it.
    fontWeight: 'bold',
    lineHeight: '20px',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none',
    backgroundRepeat: 'repeat-x',
    backgroundPosition: '-1px -1px',
    backgroundSize: '110% 110%',
    border: `1px solid ${theme.colors['button'].border}`,
    borderRadius: '0.25em',
    appearance: 'none',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'button.hoverBg',
      backgroundImage: `linear-gradient(-180deg, ${theme.colors['button'].bg2} 0%, ${theme.colors['button'].hoverBg} 90%)`,
      backgroundPosition: '-0.5em center',
      borderColor: themeGet('colors.blackfade35')(props),
      textDecoration: 'none',
      backgroundRepeat: 'repeat-x',
    },
    '&:active': {
      backgroundColor: theme.colors['button'].activeBg,
      backgroundImage: 'none',
      boxShadow: `${theme.colors['blackfade15']} 0px 0.15em 0.3em inset`,
      borderColor: theme.colors['button'].border, //convert black to rbg here
    },
    // ${props =>
    //   props.disabled &&
    //   css`
    //     color: themeGet('colors.button.disabledColor') !important,
    //     backgroundColor: themeGet('colors.gray.1') !important,
    //     backgroundImage: "none" !important,
    //     borderColor: ${themeGet('colors.blackfade20')} !important,
    //     boxShadow: none !important,
    //     cursor: default,
    //   `}
    // '&:focus': {
    //   outline: none,
    //   boxShadow: ${themeGet('colors.button.focusShadow')} 0px 0px 0px 0.2em,
    // }
    // '&.grouped': {
    //   position: relative,
    //   border-right-width: 0,
    //   border-radius: 0,
    //   '&:first-child': {
    //     border-top-left-radius: ${themeGet('radii.1')}px,
    //     border-bottom-left-radius: ${themeGet('radii.1')}px,
    //   }
    //   '&:last-child': {
    //     border-right-width: 1px,
    //     border-top-right-radius: ${themeGet('radii.1')}px,
    //     border-bottom-right-radius: ${themeGet('radii.1')}px,
    //   }
    //   `&:focus,
    //   &:active,
    //   &:hover`: {
    //     border-right-width: 1px,
    //     + .grouped {
    //       border-left-width: 0,
    //     }
    //   }
    // }
    // &:focus,
    // &:active {
    //   z-index: 1,
    // }
  });
