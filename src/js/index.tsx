import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import {AppRouter} from "./infrastructure/AppRouter";
import {Navigator} from "./infrastructure/Navigator";

ReactDOM.render(
  <HashRouter>
      <AppRouter navigator={new Navigator()}/>
  </HashRouter>,
  document.getElementById('root') as HTMLElement
);
