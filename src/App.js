import "./styles.css";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

export default function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  function submitHandler(e) {
    // e.preventDefault();
    let input_val = document.getElementById("item-input").value;
    if (input_val.trim()) {
      setItems((prev) => [...prev, input_val]);
      setText("");
    }
  }

  function changeInput(e) {
    setText(e.target.value);
  }
  return (
    <div className="App">
      <h1 style={{ color: "#008000" }}>Item List Manager</h1>
      <input
        id="item-input"
        value={text}
        onChange={changeInput}
        type="text"
        placeholder="Enter item"
        style={{
          padding: "5px",
          margin: "5px",
          width: "200px",
          marginRight: "10px",
        }}
      />
      <br />
      <button
        onClick={() => submitHandler(this)}
        style={{
          width: "25%",
          backgroundColor: "#008000",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
          padding: "10px",
        }}
      >
        Add Item
      </button>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              background: "#f9f9f9",
              margin: "5px 0",
              padding: "10px",
              border: "1px solid #008000",
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
