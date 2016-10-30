import React, { Component } from 'react';
import { List, Map } from 'immutable';

import MainSection from './components/MainSection';

const todoList = List.of(
  Map({id: 1, text: 'React', status: 'active', editing: false}),
  Map({id: 2, text: 'Redux', status: 'active', editing: false}),
  Map({id: 3, text: 'Immutable', status: 'completed', editing: false})
);

export default class Todos extends Component {
  getItems() {
    return todoList || [];
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <MainSection todoList={todoList} />
        </section>
      </div>
    );
  }
};
