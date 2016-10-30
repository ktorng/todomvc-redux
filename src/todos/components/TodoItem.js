import React from 'react';
import classNames from 'classnames';

import TodoTextInput from './TodoTextInput';

export default class TodoItem extends React.PureComponent {
  render() {
    const itemClass = classNames({
      'todo': true,
      'completed': this.props.isCompleted,
      'editing': this.props.isEditing
    });

    return (
      <li className={itemClass}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle" 
            defaultChecked={this.props.isCompleted}
          />
          <label htmlFor="todo">
            {this.props.text}
          </label>
          <button className="destroy"></button>
        </div>
        <TodoTextInput />
      </li>
    );
  }
};
