import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { AppRouter } from "./infrastructure/AppRouter";
import { Navigator } from "./infrastructure/Navigator";
ReactDOM.render(React.createElement(HashRouter, null,
    React.createElement(AppRouter, { navigator: new Navigator() })), document.getElementById('root'));
//# sourceMappingURL=index.js.map