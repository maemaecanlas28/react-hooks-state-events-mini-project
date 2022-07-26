import React from "react";

function CategoryFilter ({ categories, selectedCategory, setSelectedCategory }) {
  
  const categoryButtons = categories.map(category => {
    return (
        <button 
          key={category} 
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => setSelectedCategory(category)}>
            {category}
        </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
