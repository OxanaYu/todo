import React from "react";
import Listitems from "./Listitems";

const Todolist = ({
  todos,
  deleteItem,
  edit,
  editTodo,
  value,
  setValue,
  saveEditTodo,
}) => {
  return (
    <div>
      <ul>
        {todos.map((elem) => (
          <Listitems
            {...elem}
            key={elem.id}
            deleteItem={deleteItem}
            edit={edit}
            editTodo={editTodo}
            value={value}
            setValue={setValue}
            saveEditTodo={saveEditTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
