import React from "react"
import TodoItem from "./TodoItem";

const TodosList = ({ todos, handleChangeProps, deleteTodoProps, setUpdate}) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  )
}
export default TodosList