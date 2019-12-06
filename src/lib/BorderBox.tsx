import styled from '@emotion/styled';
import { Box } from './Box';
import { border, BorderProps } from 'styled-system';

const BorderBox = styled(Box)<BorderProps>(border);

BorderBox.defaultProps = {
  border: '1px solid',
  borderColor: 'gray.2',
  borderRadius: 1,
};

BorderBox.displayName = 'BorderBox';

export { BorderBox };
