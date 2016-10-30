import React from 'react';
import classNames from 'classnames';

export default class TodoTools extends React.PureComponent {
  renderFilterLink(filter) {
    const { filter: selectedFilter, changeFilter } = this.props;

    return (
      <a
        href="#"
        className={classNames({ selected: filter === selectedFilter })}
        onClick={() => changeFilter(filter)}
      >
        {filter.charAt(0).toUpperCase() + filter.slice(1)}
      </a>
    );
  }

  render() {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeCount || 'No'}</strong> {itemWord} left
        </span>
        <ul className="filters">
          {['all', 'active', 'completed'].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
      </footer>
    );
  }
};
