import React from 'react';

import TodoItem from './TodoItem';

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

  // check whether an item is completed
  isCompleted(item) {
    return item.get('status') === 'completed';
  }

  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.getItems().map(item =>
            <TodoItem
              key={item.get('text')}
              text={item.get('text')}
              isCompleted={this.isCompleted(item)}
              isEditing={item.get('editing')}
              toggleComplete={this.props.toggleComplete}
              deleteItem={this.props.deleteItem}
              editItem={this.props.editItem}
            />
          )}
        </ul>
      </section>
    );
  }
};
