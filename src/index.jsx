import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./reducer/store";
import CharactersContainer from './components/CharactersContainer';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CharactersContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);