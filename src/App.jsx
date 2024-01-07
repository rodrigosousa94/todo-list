import React, { useState } from "react";

import "./App.css"

function App() {
  const [inputText, setInputText] = useState("");

  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function removeItem(indexToRemove) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => index !== indexToRemove);
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Adicionar</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <li key={index}>{todoItem}
            <button onClick={() => removeItem(index)}>x</button>
            </li>
            
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
