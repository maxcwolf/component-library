import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
//import { linkTo } from "@storybook/addon-links";
import { Box } from '../Box'
import { FileInput } from '../FileInput';
import { theme } from '../theme';
//import { Welcome } from "@storybook/react/demo";
// storiesOf("Welcome", module).add("to Storybook", () => <Welcome showApp={linkTo("FileInput")} />);

storiesOf('FileInput', module)
  .add(
    'Default',
    () => (
    <Box m={5} p={2} maxWidth='50%'>
      <FileInput>
        Drop A File
      </FileInput>
    </Box>
    )
  )
