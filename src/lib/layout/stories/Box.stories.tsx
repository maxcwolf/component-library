import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../';

const stories = storiesOf('Box', module);

stories.add('Default', () => <Box fontWeight="medium">I am a box</Box>);

stories.add('Hover', () => (
  <Box color="xoiBlue" fontWeight="medium" _hover={{ bg: 'gray.4', color: 'white' }}>
    Hover over me
  </Box>
));

stories.add('as prop', () => (
  <Box
    rounded="sm"
    as="img"
    margin={[3, 4]}
    src="https://media.licdn.com/dms/image/C560BAQEjl8wgM0DW5Q/company-logo_200_200/0?e=2159024400&v=beta&t=LFZD2_kjaJPHp8DtFzkM5Z0lZyeTpBdrLBe_cr5_Bu8"
  />
));
