import styled from '@emotion/styled';
import { typography } from 'styled-system';
import { Box } from './Box';

/**
 * Text primitive
 *
 * @name Text
 * @description Component for applying typography props to its contents
 * @extends Box
 */
const Text = styled(Box)(typography);

Text.defaultProps = {
  as: 'span',
  color: 'bodytext',
};

Text.displayName = 'Text';

export { Text };
