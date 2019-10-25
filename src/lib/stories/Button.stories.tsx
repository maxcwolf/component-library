import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
//import { linkTo } from "@storybook/addon-links";
import { Button } from '../Button';
//import { Welcome } from "@storybook/react/demo";
// storiesOf("Welcome", module).add("to Storybook", () => <Welcome showApp={linkTo("Button")} />);

storiesOf('Button', module)
  .add(
    'with text',
    () => (
      <Button color="blue" onClick={action('clicked')}>
        Hello Button
      </Button>
    ),
    { info: { inline: true } },
  )
  .add(
    'with some emoji',
    () => (
      <Button color="papayawhip" onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    ),
    { info: { inline: true } },
  );
