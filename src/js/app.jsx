import React from 'react';
import ReactDOM from 'react-dom';

import Routers from './routers.jsx';
import '../styles/theme.less';
import '../styles/common.less';

ReactDOM.render(
  <div className="app">
    <Routers />
  </div>,
  document.getElementById('content')
);
