import styled from './theme';
import { Box } from './Box';

interface SvgProps {
  as: string;
  xmlns: string;
  children: SVGPathElement;
  viewBox: string;
}

const Svg = styled(Box)<SvgProps>({
  as: 'svg',
  xmlns: 'http://www.w3.org/2000/svg',
});

Svg.defaultProps = {
  width: 1,
  height: 1,
  viewBox: '0 0 24 24',
};

Svg.displayName = 'Svg';

export { Svg };
