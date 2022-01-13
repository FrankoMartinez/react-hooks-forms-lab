import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [newItem, setNewItem] = useState("")
  const [changeCategory, setChangeCategory] = useState("Produce")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function onSearchChange(event) {
    setSearch(event.target.value)
  }

  const itemsSearched = itemsToDisplay.filter((item) => {
    if (item.name.includes(search)) {
      return item
    }
  })

  function handleNewItemChange(event) {
    setNewItem(event.target.value)
    console.log(newItem)
  }

  function onSelectChange(event) {
    setChangeCategory(event.target.value)
    console.log(changeCategory)
  }

  function onItemFormSubmit(event) {
    event.preventDefault()
    console.log(newItem)
  }

  return (
    <div className="ShoppingList">
      <ItemForm handleNewItemChange={handleNewItemChange} onSelectChange={onSelectChange} onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsSearched.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
