import ToDoContainer from "./components/ToDoContainer";
import "./App.css";

function App() {
  return (
    <>
      <div className="todo-container">
        <h2 className="list-title">My Daily To Do List</h2>
        <ToDoContainer></ToDoContainer>
      </div>
    </>
  );
}

export default App;
