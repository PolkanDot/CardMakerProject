import React from 'react';
import ReactDOM from 'react-dom';
import FunCardMaker from './CardMaker/CardMaker';
import { TestCardMaker } from './TestPathern';


ReactDOM.render(
  <React.StrictMode>
    <FunCardMaker cardMaker={TestCardMaker}/>
  </React.StrictMode>,
  document.getElementById('root')
);


