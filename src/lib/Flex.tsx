import styled from '@emotion/styled';
import { flexbox } from 'styled-system';
import { Box } from './Box';

/**
 * Flex primitive
 *
 * @name Flex
 * @description Component for applying flex styles to its contents
 * @extends Box
 */
const Flex = styled(Box)(flexbox);

Flex.defaultProps = {
  display: 'flex',
};

Flex.displayName = 'Flex';

export { Flex };
