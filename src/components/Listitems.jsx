import React from "react";

const Listitems = ({
  title,
  id,
  deleteItem,
  editTodo,
  edit,
  value,
  setValue,
  saveEditTodo,
}) => {
  const editTodoTitle = () => {
    editTodo(id, title);
  };

  return (
    <div>
      <li className="todo">
        <label>
          <input className="checkbox" type="checkbox" />
          {edit == id ? (
            <div>
              <input
                onChange={(e) => setValue(e.target.value)}
                type="text"
                value={value}
              />
            </div>
          ) : (
            <span>{title}</span>
          )}
          {edit == id ? (
            <div>
              <button onClick={() => saveEditTodo(id)}>Save</button>
            </div>
          ) : (
            <div>
              <button onClick={() => deleteItem(id)}>Delete</button>
              <button onClick={editTodoTitle}>Edit</button>
            </div>
          )}
        </label>
      </li>
    </div>
  );
};

export default Listitems;
