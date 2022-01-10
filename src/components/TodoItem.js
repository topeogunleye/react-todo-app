import React from 'react';

class TodoItems extends React.Component {
  render() {
    return <li>{this.props.todo.title}</li>;
  }
}

export default TodoItems;
