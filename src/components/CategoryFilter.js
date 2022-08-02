import React from "react";

function CategoryFilter({categories, handleChange}) {
  function makesItSelected(e) {
    const cateList = document.querySelector(".categories")
    const cateSpecList = cateList.querySelectorAll("button")
    cateSpecList.forEach((cateSpec) => cateSpec.className = "")
    e.target.className = "selected"
    handleChange(e.target.innerHTML)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) =>  
      <button key={categories.indexOf(category)} onClick={makesItSelected}>{category}</button>
    )}
    </div>
  );
}

export default CategoryFilter;
