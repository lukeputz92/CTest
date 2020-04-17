import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';

const tasksReducer = (state =[], action) => {
  switch(action.type) {
    case 'ADD_TASK':
      let index = state.findIndex(task => task.title === action.task.title);
      if(index === -1)
          return [...state, action.task];
      return state.map(
        task => task.title === action.task.title ? {title: task.title, answers: {...task.answers, ...action.task.answers} } : task);
      default:
        return state;

  }
}

const store = createStore(tasksReducer);

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
