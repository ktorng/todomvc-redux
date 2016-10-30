import React from 'react';

export default class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="http://github.com/ktorng">ktorng</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    );
  }
};
