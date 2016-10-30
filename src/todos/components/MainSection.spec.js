import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { List, Map } from 'immutable';

import MainSection from './MainSection';

const {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithTag
} = TestUtils;

describe('MainSection', () => {
  const todoList = List.of(
    Map({ id: 1, text: 'React', status: 'active' }),
    Map({ id: 2, text: 'Redux', status: 'active' }),
    Map({ id: 3, text: 'Immutable', status: 'completed' })
  );

  it('renders a list with only the active items if the filter is active', () => {
    const filter = 'active';
    const component = renderIntoDocument(
      <MainSection filter={filter} todoList={todoList} />
    );
    const list = findRenderedDOMComponentWithClass(component, 'todo-list');

    expect(list.children.length).to.equal(2);
    expect(list.children[0].textContent).to.contain('React');
    expect(list.children[1].textContent).to.contain('Redux');
  });

  it('renders a list with only the completed items if the filter is completed', () => {
    const filter = 'completed';
    const component = renderIntoDocument(
      <MainSection filter={filter} todoList={todoList} />
    );
    const list = findRenderedDOMComponentWithClass(component, 'todo-list');

    expect(list.children.length).to.equal(1);
    expect(list.children[0].textContent).to.contain('Immutable');
  });

  it('renders a list with all of the items', () => {
    const filter = 'all';
    const component = renderIntoDocument(
      <MainSection filter={filter} todoList={todoList} />
    );
    const list = findRenderedDOMComponentWithClass(component, 'todo-list');

    expect(list.children.length).to.equal(3);
    expect(list.children[0].textContent).to.contain('React');
    expect(list.children[1].textContent).to.contain('Redux');
    expect(list.children[2].textContent).to.contain('Immutable');
  });
});
