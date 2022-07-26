import React from "react";
import Task from "./Task"

function TaskList({ arrayTasks, setArrayTasks, selectedCategory }) {

  const displayTasks = arrayTasks
  .filter(task => {
    if (selectedCategory === "All") {
      return true
    } 
    return selectedCategory === task.category
  })
  .map((task, index) => {
    return (
      <Task 
        key={index} 
        index={index}
        text={task.text} 
        category={task.category} 
        handleDelete={handleDelete} />
    )
  })

  function handleDelete (event, index) {
    event.preventDefault();
    const newArrayTasks = [...arrayTasks]
    newArrayTasks.splice(index, 1)
    setArrayTasks(newArrayTasks);
  }
  
  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;
