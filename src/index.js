import '@babel/polyfill';

import { app } from 'hyperapp';
import actions from './actions';
import view from './views';
import state from './state';

app(state, actions, view, document.body);
