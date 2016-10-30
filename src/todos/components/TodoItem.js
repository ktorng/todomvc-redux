import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    return (
      <li className="todo">
        <div className="view">
          <input type="checkbox" className="toggle" />
          <label htmlFor="todo">
            {this.props.text}
          </label>
          <button className="destroy"></button>
        </div>
      </li>
    );
  }
};
