import React, { useEffect } from "react";
import Todolist from "./components/Todolist";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([{ id: 1, title: "First todo" }]);
  const [todoTitle, setTododtitle] = useState("");
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");
  // ! ============Create=======================
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        title: todoTitle,
        id: Date.now(),
      },
    ]);
    setTododtitle("");
  };

  // ! ============Read===================
  useEffect(() => {
    const data = localStorage.getItem("todos");
    setTodos(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //! ==============Delete=====================
  const deleteItem = (id) => {
    const updateTodos = todos.filter((elem) => elem.id !== id);
    setTodos(updateTodos);
  };

  // ! ============Edit===========================
  const editTodo = (id, value) => {
    setEdit(id);
    setValue(value);
  };

  const saveEditTodo = (id) => {
    const newTodo = todos.map((elem) => {
      if (elem.id === id) {
        elem.title = value;
      }
      return elem; //!выяснить
    });
    setTodos(newTodo);
    setEdit(null); //! выяснить
  };

  return (
    <div className="todo_wrapper">
      <div className="container">
        <h1>Todo app</h1>
        <div className="input-field">
          <form onSubmit={addTodo}>
            <input
              className="task_input"
              placeholder="enter your task"
              onChange={(e) => setTododtitle(e.target.value)}
              type="text"
              value={todoTitle}
            />
            <p>TodoName</p>
          </form>
        </div>
      </div>
      <Todolist
        todos={todos}
        deleteItem={deleteItem}
        value={value}
        setValue={setValue}
        edit={edit}
        editTodo={editTodo}
        saveEditTodo={saveEditTodo}
      />
    </div>
  );
};

export default App;
