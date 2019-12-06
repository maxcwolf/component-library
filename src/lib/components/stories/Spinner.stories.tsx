import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Spinner } from '../Spinner';

const stories = storiesOf('Spinner', module);

stories.add('Default', () => <Spinner />);
