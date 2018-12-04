import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import { Table, Checkbox } from 'semantic-ui-react';
import Counter from './components/Counter';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{ title: 'Learn React', completed: false }, { title: 'Learn Redux', completed: false }, { title: 'Learn React Native', completed: false }, { title: 'Build a new web app!', completed: false }]
    }
  }


  render() {
    const todos = this.state.todos;
    return (
      <div className="app">
        <div className="todo-container">
          <h1 className="site-header">Simple Todo App in React</h1>
          <Counter />
          <label htmlFor="new-todo" style={{ display: "none" }}>New todo:</label>
          <input type="text" autoFocus className="new-todo" placeholder="What needs to be done?" name="new-todo" id="new-todo" />
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
                <TodoItem onChange={() => {
                  const { completed } = todo;
                  const [...todos] = this.state.todos;
                  todos[i] = {
                    ...todo, completed: !completed
                  }
                  this.setState({ todos })
                }} completed={todo.completed} key={todo["title"]}>{todo.title}</TodoItem>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;