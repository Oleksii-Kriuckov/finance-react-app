import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ArrayTikers from './store/GlobalData';
// import { Provider } from 'react-redux';

export const Context = createContext(null)

// store={store}
ReactDOM.render(
  <Context.Provider value={{
    tickers: new ArrayTikers()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
