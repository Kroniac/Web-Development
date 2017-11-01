import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Container/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="Props In Stateful Components"/> , document.getElementById('root'));
registerServiceWorker();
