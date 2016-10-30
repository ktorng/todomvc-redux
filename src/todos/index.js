import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainSection from './components/MainSection';


export class Todos extends Component {
  getItems() {
    return todoList || [];
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <MainSection todoList={this.props.todoList} filter={this.props.filter} />
        </section>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    todoList: state.todos.get('todoList'),
    filter: state.todos.get('filter')
  };
}

export default connect(mapStateToProps)(Todos);
