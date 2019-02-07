import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Elegantime from './Elegantime';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Elegantime />, document.getElementById('root'));

serviceWorker.unregister();
