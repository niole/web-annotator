import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import View from './View';

const mount = document.createElement('div');
mount.setAttribute('id', 'web-annotator-app-mount');

document.addEventListener('DOMContentLoaded', () => {
  // @ts-ignore
  document.body.append(mount);
  ReactDOM.render(<View />, mount);
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
