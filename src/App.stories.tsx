import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import App from './App';

storiesOf('App/App', module)
  .addDecorator(story => (
    <>{story()}</>
  ))
  .add('default', () => {
    return <App />;
  });
