import React from 'react';
import component from 'omniscient';

import Clock from './clock';

export default component('Menu', ({header}) =>
  <div>
    <h1>{header.deref()}</h1>
    <Clock />
  </div>).jsx;
