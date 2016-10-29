import React, { Component } from 'react';
import { List, Map } from 'immutable';

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
          <section className="main">
            <ul className="todo-list">
              {this.getItems().map(item =>
                <li className="active" key={item.get('text')}>
                  <div className="view">
                    <input type="checkbox" className="toggle" />
                    <label htmlFor="todo">
                      {item.get('text')}
                    </label>
                    <button className="destroy"></button>
                  </div>
                </li>
              )}
            </ul>
          </section>
        </section>
      </div>
    );
  }
};
