import React, { useState } from "react";
import "./ToDo.css"; 

interface ToDoItem {
  id: number;
  text: string;
  completed: boolean;
}

const ToDoContainer: React.FC = () => {
  const [inputToDo, setInputToDo] = useState("");
  const [submittedToDos, setSubmittedToDos] = useState<ToDoItem[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputToDo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputToDo.trim() !== "") {
      setSubmittedToDos((prevSubmittedToDos) => [
        ...prevSubmittedToDos,
        { id: Date.now(), text: inputToDo, completed: false },
      ]);
      setInputToDo("");
    }
  };

  const handleCheckboxChange = (id: number) => {
    setSubmittedToDos((prevSubmittedToDos) =>
      prevSubmittedToDos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          value={inputToDo}
          onChange={handleInputChange}
          placeholder="Type something..."
        />
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>

      {/* Display the submitted ToDos as checkboxes */}
      <ul className="list-container">
        {submittedToDos.map((todo) => (
          <li className="list-item" key={todo.id}>
            <label htmlFor={`todo-${todo.id}`}>
              <input
                className="strikethrough"
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => handleCheckboxChange(todo.id)}
              />
              <span className="todo-checkbox">
                <div className="list-item-text">{todo.text}</div>
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoContainer;
