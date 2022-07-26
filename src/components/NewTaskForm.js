import React, {useState} from "react";

function NewTaskForm({ categories, arrayTasks, onTaskFormSubmit }) {

  const [details, setDetails] = useState("Details")
  const [selectedCategory, setSelectedCategory] = useState("")

  const categorySelect = categories
  .filter(category => {
      if (category === "All") {
        return false
      }
      else {
        return true
      }
  })
  .map((category, index) => {
    return (
      <option key={index} value={category}>{category}</option>
    )
  })

  console.log(categorySelect)

  function handleDetailsChange (event) {
    setDetails(event.target.value)
  }

  function handleCategoriesChange (event) {
    setSelectedCategory(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()
    const formData = {
      text: details,
      category: selectedCategory
    }
    const dataArray = [...arrayTasks, formData]
    onTaskFormSubmit(dataArray);
    setDetails("");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="Details">
        Details
        <input 
          type="text" 
          name="Details"
          placeholder="Insert task here ..."
          onChange={handleDetailsChange}
          value={details} />
      </label>
      <label htmlFor="Category">
        Category
        <select name="Category" onChange={handleCategoriesChange}>
          {categorySelect}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
