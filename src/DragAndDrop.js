import React, { useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import makeTaskCard from './taskCard';
import Editable from "./Editable";

export default class DragDrop extends React.Component {

  state = {
    todos: [
      {taskName: "math homework", category:"backburn"},
      {taskName: "practice", category:"todo"},
      {taskName: "shopping", category:"todo"},
      {taskName: "astral project", category:"completed"}
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
      if (todo.taskName == id){
        todo.category = cat;
      }
      return todo;
    });

    this.setState({
      ...this.state,
      todos
    })

  }

  handleInputChange = (input, taskName) => {

    this.setState(state => {
      const todos = state.todos.map((task, j) => {
        if (state.todos[j].taskName === taskName) {
          return {taskName: input, category: state.todos[j].category};
        } else {
          return {taskName: state.todos[j].taskName, category: state.todos[j].category};
        }
      });
      return {
        todos,
      };
    });
  }


    render(){
      var todos = {
        backburn: [],
        todo: [],
        ip: [],
        completed: []
      }


      this.state.todos.forEach ((task) => {

        todos[task.category].push(
          <Editable text={task.taskName}
          placeholder="Write a task name"
          type="input"
          //childRef={this.inputRef}
           key={task.taskName}
              onDragStart = {(e) => this.onDragStart(e, task.taskName)}
              draggable
              className = "draggable"
              >
              <input
                //ref={this.inputRef}
                type="text"
                name="task"
                placeholder="Write a task name"
                value={task.taskName}
                onChange={e => this.handleInputChange(e.target.value, task.taskName)}
                />
          </Editable>
          // <div>
          // <makeTaskCard task={this.task} onDragStart={this.onDragStart}/>
          // </div>
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

        <div className='completed droppable' onDragOver={(e)=>this.onDragOver(e)}
          onDrop = {(e) => this.onDrop(e, "completed")}>
          <span className="category-header">Completed</span>
          {todos.completed}
        </div>
        </div>
      </div>
      );
    }
}
