import React from 'react';
import ReactDOM from 'react-dom/client';
import {HookProvider} from 'hook-ui-kit';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <HookProvider 
      network={'mainnet'}
      colorMode={'dark'}
      ><App /></HookProvider>
);