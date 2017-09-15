import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import {AppRouter} from "./infrastructure/AppRouter";

ReactDOM.render(
  <HashRouter>
      <AppRouter/>
  </HashRouter>,
  document.getElementById('root') as HTMLElement
);
