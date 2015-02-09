import React from 'react';
import component from 'omniscient';

import App from './components/app';
import data from './structure';

React.render(<App header={data.cursor('header')} />, document.body);
