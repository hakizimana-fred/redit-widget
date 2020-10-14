import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



const WidgetDivs = document.querySelectorAll('.reddit_widget')

WidgetDivs.forEach(Div => {
  const dataAttributes = Div.dataset.subreddit
  ReactDOM.render(
    
    <React.StrictMode>
      <App  dataAttributes={ dataAttributes }/>
    </React.StrictMode>,
    Div
  );
})

