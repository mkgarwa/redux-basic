import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AutoComplete from './autocomplete';
import { Header } from './header';
import { Container } from "@mui/material";
import {Provider} from 'react-redux';
import store from './store';
import Todo from './todo';

store.subscribe(() => store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Container>
        <Header />
        <App />
        <AutoComplete />
        <Todo />
      </Container>
    </Provider>
  </React.StrictMode>
);
