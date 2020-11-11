import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Greet from './components/Greet';
import Hello from './components/Hello'

ReactDOM.render(
 <div>
   <App name='shahan mirza' age={14*2} />
 </div>,
//  React.createElement('div',null,React.createElement('h2',null,'child component')),
    //  <App />,
    // <Greet/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
