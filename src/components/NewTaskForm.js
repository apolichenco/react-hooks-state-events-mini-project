import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [submittedTask, setNewTask] = useState();
  const [submittedCategory, setNewCategory] = useState("Code");

  function handleTaskChange(event) {
    setNewTask(event.target.value);
  }

  function handleNewCategoryChange(event) {
    setNewCategory(event.target.value);
  }

function handleSubmit(e) {
  e.preventDefault()
  const newTask = {
    id: uuid(),
    text: submittedTask,
    category: submittedCategory,
  };
  onTaskFormSubmit(newTask)
}

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTaskChange}  />
      </label>
      <label>
        Category
        <select name="category" onChange={handleNewCategoryChange}>
          {categories.map((category) => {
            if (category === "All") {
              return false
            }
            else {
              return <option key={categories.indexOf(category)} value={category}>{category}</option>
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
