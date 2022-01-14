import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")

  function onSubmit(event) {
    event.preventDefault()
    const newItem = { 
      id: uuid(),
       name: itemName,
       category: itemCategory
      }
      props.onItemFormSubmit(newItem)
      event.target.reset()
  }

  return (
    <form className="NewItem" onSubmit={onSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={e => setItemName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={e => setItemCategory(e.target.value)}> 
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
