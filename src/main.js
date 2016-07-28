import React from 'react';
import ReactDom from 'react-dom'
import Root from './Root';
import { createHistory, createHashHistory } from 'history';
const history =createHistory();
ReactDom.render(<Root history={history} />, document.getElementById('app'));
