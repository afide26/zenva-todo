import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import { Table, Checkbox, Button } from 'semantic-ui-react';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["Learn React Properly", "Learn Redux", "Learn React Native", "Create a brand new app!"]
    }
  }
  render() {
    const todos = this.state.todos;
    return (
      <div className="app">
        <div className="todo-container">
          <h1 className="site-header">Simple Todo App in React</h1>
          <label htmlFor="new-todo" style={{ display: "none" }}>New todo:</label>
          <input type="text" autoFocus className="new-todo" placeholder="Type the new todo item" name="new-todo" id="new-todo" />
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  <Checkbox />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {todos.map((todo, i) => (
                <TodoItem key={todos[i]}>{todo}</TodoItem>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
