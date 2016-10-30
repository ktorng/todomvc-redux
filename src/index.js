import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { List, Map } from 'immutable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './rootReducer';
import Todos from './todos';
import 'todomvc-app-css/index.css';

// instantiate redux store
const store = createStore(rootReducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    todoList: [
      {id: 1, text: 'React', status: 'active', editing: false},
      {id: 2, text: 'Redux', status: 'active', editing: false},
      {id: 3, text: 'Immutable', status: 'active', editing: false},
    ],
    filter: 'all'
  }
});

// initial render
renderWithHotReload(Todos);

// hot reload re-render
if (module.hot) {
  module.hot.accept('./todos', () => {
    const Todos = require('./todos').default;
    renderWithHotReload(Todos);
  });
}

function renderWithHotReload(App) {
  render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}
