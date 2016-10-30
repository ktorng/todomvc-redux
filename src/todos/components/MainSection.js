import React from 'react';

import TodoItem from './TodoItem';
import TodoTools from './TodoTools';

export default class MainSection extends React.PureComponent {
  // filter items according to their status
  getItems() {
    if (this.props.todoList) {
      return this.props.todoList.filter(item =>
        this.props.filter === 'all' |
        item.get('status') === this.props.filter
      );
    }
    return [];
  }

  getActiveCount() {
    if (this.props.todoList) {
      return this.props.todoList
        .filter(item => item.get('status') === 'active')
        .size;
    }
    return 0;
  }

  // check whether an item is completed
  isCompleted(item) {
    return item.get('status') === 'completed';
  }

  render() {
    const activeCount = this.getActiveCount();
    const completedCount = this.props.todoList.size - activeCount;

    return (
      <section className="main">
        <ul className="todo-list">
          {this.getItems().map(item =>
            <TodoItem
              key={item.get('id')}
              id={item.get('id')}
              text={item.get('text')}
              isCompleted={this.isCompleted(item)}
              isEditing={item.get('editing')}
              toggleComplete={this.props.toggleComplete}
              deleteItem={this.props.deleteItem}
              editItem={this.props.editItem}
            />
          )}
        </ul>
        <TodoTools
          activeCount={activeCount}
          completedCount={completedCount}
          filter={this.props.filter}
          changeFilter={this.props.changeFilter}
          clearCompleted={this.props.clearCompleted}
        />
      </section>
    );
  }
};
