import { css } from '@styled-system/css';
import { getTheme } from './utils/get';
import { theme } from './theme/theme';

export const buttonStyles = css({
  position: 'relative',
  display: 'inline-block',
  px: 3,
  py: 2,
  padding: '6px 12px',
  color: getTheme('colors.gray.9'),
  backgroundColor: getTheme('colors.gray.1'),
  // For whatever reason, when inside a template literal, getTheme needs theme curried
  // backgroundImage: `linear-gradient(-180deg, ${getTheme('colors.gray.0')(theme)} 0%, ${getTheme('colors.button.bg2')(
  //   theme,
  // )} 90%)`,
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
    backgroundColor: getTheme('colors.button.hoverBg'),
    backgroundImage: `linear-gradient(-180deg, ${theme.colors['button'].bg2} 0%, ${theme.colors['button'].hoverBg} 90%)`,
    backgroundPosition: '-0.5em center',
    borderColor: getTheme('colors.blackfade35'),
    textDecoration: 'none',
    backgroundRepeat: 'repeat-x',
  },
  '&:active': {
    backgroundColor: getTheme('colors.button.activeBg'),
    backgroundImage: 'none',
    boxShadow: `${theme.colors['black']} 0px 0.15em 0.3em inset`,
    borderColor: getTheme('colors.button.border'), //convert black to rbg here
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
