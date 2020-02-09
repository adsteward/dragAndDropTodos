import React from 'react';
import Editable from "./Editable";
import DragAndDrop from "./DragAndDrop";



export default function makeTaskCard(props){
  return (
    <Editable text={props.task.taskName}
    placeholder="Write a task name"
    type="input"
     key={props.task.taskName}
        onDragStart = {(e) => props.this.onDragStart(e, props.task.taskName)}
        draggable
        className = "draggable"
        >
        <input
          type="text"
          name="task"
          placeholder="Write a task name"
          value={props.task.taskName}
          //onChange={e => props.this.handleInputChange(e, props.task.taskName)}
          />
    </Editable>
  )


}
