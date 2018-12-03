import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
const todos = ["Learn React Properly", "Learn Redux", "Learn React Native", "Create a brand new app!"];


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="todo-container">
          <label htmlFor="new-todo">New todo:</label>
          <input type="text" placeholder="Type the new todo item" name="new-todo" id="new-todo" />
          {todos.map((todo, i) => (
            <TodoItem key={todos[i]}>{todo}</TodoItem>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
