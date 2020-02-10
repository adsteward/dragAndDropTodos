import React from 'react';
import ReactDOM from 'react-dom';
import Editable from "./Editable";
import DragAndDrop from "./DragAndDrop";
import TaskCard from "./taskCard";



export default function makeTaskCard(props){
  ReactDOM.render(
    <TaskCard taskName={props.task.taskName} onDragStart={props.onDragStart} e={this.e}
    handleInputChange={props.handleInputChange} />,
    document.getElementById('root')
  );
    // <Editable text={props.task.taskName}
    // placeholder="Write a task name"
    // type="input"
    //  key={props.task.taskName}
    //     onDragStart = {(e) => props.this.onDragStart(e, props.task.taskName)}
    //     draggable
    //     className = "draggable"
    //     >
    //     <input
    //       type="text"
    //       name="task"
    //       placeholder="Write a task name"
    //       value={props.task.taskName}
    //       //onChange={e => props.this.handleInputChange(e, props.task.taskName)}
    //       />
    // </Editable>




}
