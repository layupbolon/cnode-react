import {render} from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './containers/App';
import 'github-markdown-css';

render(
    <App/>, document.getElementById('root') as HTMLElement);
