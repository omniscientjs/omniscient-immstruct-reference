import React from 'react';
import component from 'omniscient';

import {forceUpdateOn} from 'omniscient-mixins';
import data from '../structure';

let clockRef = data.reference('clock');

export default component('Clock', forceUpdateOn(clockRef), () =>
  <span>
    {clockRef.cursor().deref()}
  </span>).jsx;
