import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

export default class DragDrop extends React.Component {
  state = {
    todos: [
      {task: "math homework", category:"backburn"},
      {task: "practice", category:"todo"},
      {task: "shopping", category:"todo"}
    ]
  }

  onDragOver = (e) => {
    e.preventDefault();
  }

  onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  }

  onDrop = (e, cat) => {
    let id = e.dataTransfer.getData("id");
    let todos = this.state.todos.filter((todo) => {
      if (todo.task == id){
        todo.category = cat;
      }
      return todo;
    });

    this.setState({
      ...this.state,
      todos
    })

  }
    render(){
      var todos = {
        backburn: [],
        todo: [],
        ip: []
      }

      this.state.todos.forEach ((task) => {
        todos[task.category].push(
          <div key={task.task}
              onDragStart = {(e) => this.onDragStart(e, task.task)}
              draggable
              className = "draggable"
              style = {{backgroundColor: "blue"}}
              >
              {task.task}
              </div>
        )
      })
      return(
        <div className= "container-drag">
        <h2 className="header">DRAG & DROP</h2>
          <div className= "categories">
        <div className="backburn droppable" onDragOver={(e)=>this.onDragOver(e)}
          onDrop = {(e) => this.onDrop(e, "backburn")}>
          <span className="category-header">Back Burner</span>
          {todos.backburn}
        </div>

        <div className='todo droppable' onDragOver={(e)=>this.onDragOver(e)}
          onDrop = {(e) => this.onDrop(e, "todo")}>
          <span className="category-header">To Do</span>
          {todos.todo}
        </div>

        <div className='ip droppable' onDragOver={(e)=>this.onDragOver(e)}
          onDrop = {(e) => this.onDrop(e, "ip")}>
          <span className="category-header">In Progress</span>
          {todos.ip}
        </div>
        </div>
      </div>
      );
    }
}
