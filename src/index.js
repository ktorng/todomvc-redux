import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Todos from './todos';
import '../node_modules/todomvc-app-css/index.css';

renderWithHotReload(Todos);

if (module.hot) {
  module.hot.accept('./todos', () => {
    const Todos = require('./todos').default;
    renderWithHotReload(Todos);
  });
}

function renderWithHotReload(App) {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
}
