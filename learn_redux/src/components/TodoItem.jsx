import styled from "styled-components";

import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../state/reducers/todos";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <TodoBlock
      style={{
        color: todo.done && "red",
        userSelect: "none",
        cursor: "pointer",
      }}
    >
      <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>remove</button>
    </TodoBlock>
  );
}

const TodoBlock = styled.div`
  list-style: none;
  padding: 10px 0;
  button {
    border: none;
    outline: none;
    background-color: none;
  }
`;

export default TodoItem;
