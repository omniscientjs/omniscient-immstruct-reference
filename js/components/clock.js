import React from 'react';
import component from 'omniscient';

import {forceUpdateOn} from 'omniscient-mixins';
import data from '../structure';

let clockRef = data.reference('clock');

// The forceUpdateOn mixin will forceUpdate the component every time the clock reference changes.
export default component('Clock', forceUpdateOn(clockRef), () =>
  <span>
    {clockRef.cursor().deref()}
  </span>).jsx;
