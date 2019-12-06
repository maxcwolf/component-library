import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button';

const stories = storiesOf('Button', module);

stories.add('Default', () => <Button>Default Button</Button>);

stories.add('With Icon', () => <Button leftIcon="check">Default Button</Button>);

stories.add('Loading', () => (
  <Button isLoading={true} loadingText="Loading">
    Loading
  </Button>
));
