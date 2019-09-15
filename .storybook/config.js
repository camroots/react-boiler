import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import '../src/index.css';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
