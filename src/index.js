import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Jobs from './components/Jobs/Jobs';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <Jobs />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
