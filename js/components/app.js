import React from 'react';
import component from 'omniscient';

import Menu from './menu';

export default component('App', ({ header }) =>
  <div>
    <Menu header={header} />
    <p>Some text.</p>
  </div>).jsx;
