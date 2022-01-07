import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './CardMaker/CardMaker';
import './index.css'
import { TestCardMaker } from './TestPathern';


ReactDOM.render(
  <React.StrictMode>
    <Editor cardMaker={TestCardMaker}/>
  </React.StrictMode>,
  document.getElementById('root')
);


