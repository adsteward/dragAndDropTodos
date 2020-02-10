import React from "react";
import Editable from './Editable';


export default class TaskCard extends React.Component{

  render(){
    return(
      <Editable text={this.props.taskName}
      placeholder="Write a task name"
      type="input"
       key={this.props.taskName}
          onDragStart = {(e) => this.props.onDragStart(e, this.props.taskName)}
          draggable
          className = "draggable"
          >
          <input
            type="text"
            name="task"
            placeholder="Write a task name"
            value={this.props.taskName}
            onChange={e => this.props.handleInputChange(e, this.props.taskName)}
            />
      </Editable>
    )
  }
}
