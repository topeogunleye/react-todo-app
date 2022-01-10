import React from 'react';

function TodoItem() {
  return <li> {this.props.todo.title}</li>;
}

export default TodoItem;
