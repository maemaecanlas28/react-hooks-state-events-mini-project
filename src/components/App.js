import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [arrayTasks, setArrayTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={ CATEGORIES } 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} />
      <NewTaskForm 
        categories={ CATEGORIES }  
        arrayTasks={arrayTasks} 
        onTaskFormSubmit={setArrayTasks} />
      <TaskList   
        arrayTasks={ arrayTasks } 
        setArrayTasks={ setArrayTasks }
        selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
