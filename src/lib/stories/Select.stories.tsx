import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
//import { linkTo } from "@storybook/addon-links";
import { Select } from '../Select';
//import { Welcome } from "@storybook/react/demo";
// storiesOf("Welcome", module).add("to Storybook", () => <Welcome showApp={linkTo("Select")} />);

storiesOf('Select', module).add('with options', () => (
  <Select>
    <option>derp 1</option>
    <option>derp 2</option>
    <option>derp 3</option>
    <option>derp 4</option>
  </Select>
));
