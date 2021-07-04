import React, { Component } from "react";
import TaskList from "./TaskList";
import Complete from "./Complete";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      tasks: [],
      completedTasks: [],
    };
  }

  addTask = () => {
    const obj = {
      id: Math.random() * 1000,
      task: this.state.task,
    };

    this.setState({ task: "", tasks: [...this.state.tasks, obj] });
  };

  addToComplete = (task) => {
    const remaining = this.state.tasks.filter((t) => t.id !== task.id);
    this.setState({
      tasks: remaining,
      completedTasks: [...this.state.completedTasks, task],
    });
  };

  render() {
    return (
      <div className="main">
        <input
          type="text"
          placeholder="enter your task"
          className="task_input"
          value={this.state.task}
          onChange={(e) => this.setState({ task: e.target.value })}
        />
        <button className="btn" onClick={this.addTask}>
          Add Task
        </button>
        <div className="list">
          <div className="tasks">
            <h2>Pending Tasks:</h2>
            <TaskList
              tasks={this.state.tasks}
              onComplete={this.addToComplete}
            />
          </div>
          <div className="complete">
            <h2>Completed Task</h2>
            <Complete tasks={this.state.completedTasks} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
