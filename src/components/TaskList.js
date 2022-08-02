import React from "react";
import Task from "./Task.js"

function TaskList({tasks}) {

  return (
    <div className="tasks">
      {tasks.map((task) =>  
      <Task key={tasks.indexOf(task)} text={task.text} category={task.category}/>
      )}
    </div>
  );
}

export default TaskList;






// const [selectedCategory, setSelectedCategory] = useState("All");
// function handleCategoryChange(event) {
//   setSelectedCategory(event.target.innerHTML);
// }

// const itemsToDisplay = items.filter((item) => {
//   if (selectedCategory === "All") {
//     return true    
//   }
//   if (item.category === selectedCategory) {
//     return true     
//   }
// });