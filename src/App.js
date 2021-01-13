import React, { useCallback, useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const handleChange = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );

  const handleClear = useCallback(() => {
    setTodos([]);
  }, []);

  const handleClick = useCallback(() => {
    setTodos([{ id: new Date().getTime(), text }, ...todos]);
    setText("");
  }, [setTodos, text, todos, setText]);

  const handleDelete = useCallback(
    (todoId) => {
      const newTodos = todos.filter(({ id }) => id !== todoId);
      setTodos(newTodos);
    },
    [todos]
  );



  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} value={text} onChange={handleChange} type="text" />
      <button type="button" onClick={handleClick}>
        Add todo
      </button>
      <button type="button" onClick={handleClear}>
        Clear
      </button>
      <ul>
        {todos.map(({ id, text }) => (
          <li
            
            //style={{ border: "1px solid green", margin: "10px" }}
          >
            {text}
          <button type="button" className="button1"  key={id}
            onClick={() => handleDelete(id)}>X</button>
      
          </li>
        ))}
      </ul>
    </div>
  );
}
