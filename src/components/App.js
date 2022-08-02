import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [submittedData, setSubmittedData] = useState(TASKS);

  function handleCategoryChange(text) {
    setSelectedCategory(text);
  }
  const fullTaskList = TASKS
  const itemsToDisplay = fullTaskList.filter((task) => {
    if (selectedCategory === "All") {
      return true    
    }
    if (task.category === selectedCategory) {
      return true     
    }
  });

  function onTaskFormSubmit(newTask) {
    const dataArray = [...submittedData, newTask];
    setSubmittedData(dataArray);
    fullTaskList.push(newTask)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleChange={handleCategoryChange}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={itemsToDisplay} categories={CATEGORIES}/>
    </div>
  );
}

export default App;
