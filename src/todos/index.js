import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';
import MainSection from './components/MainSection';


export class Todos extends Component {
  getItems() {
    return todoList || [];
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <MainSection {...this.props} />
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

export default connect(mapStateToProps, actions)(Todos);
