import styled, { keyframes } from "styled-components";
import {
  AiFillCheckCircle,
  AiOutlineCheckCircle,
  AiFillDelete,
} from "react-icons/ai";
import { css } from "styled-components";
import { useState } from "react";
import { TODO_TYPES, useTodoDispatch } from "../hooks/useTodoReducer";

function TodoItem({ todo }) {
  const { id, text, done } = todo;
  const [remove, setRemove] = useState(false);
  const dispatch = useTodoDispatch();

  const onToggle = () => {
    dispatch({ type: TODO_TYPES.TOGGLE_TODO, id, done });
  };

  const onDelete = () => {
    setTimeout(() => {
      dispatch({ type: TODO_TYPES.DELETE_TODO, id });
    }, 200);
    setRemove(true);
  };

  return (
    <ItemBlock remove={remove}>
      <ChechBox onClick={onToggle}>
        {done ? (
          <AiFillCheckCircle size={20} />
        ) : (
          <AiOutlineCheckCircle size={20} />
        )}
      </ChechBox>
      <TodoText onClick={onToggle} done={done}>
        {text}
      </TodoText>
      <AiFillDelete
        color="grey"
        onClick={onDelete}
        onMouseOver={({ target }) => (target.style.color = "red")}
        onMouseOut={({ target }) => (target.style.color = "grey")}
        cursor="pointer"
      />
    </ItemBlock>
  );
}

const slideOut = keyframes`
  to{
    transform: translateX(100%);
  }
`;

const ItemBlock = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
  ${({ remove }) =>
    remove &&
    css`
      animation: ${slideOut} 0.25s;
    `}
`;

const ChechBox = styled.div`
  color: ${({ theme }) => theme.colors.main};
  cursor: pointer;
`;

const TodoText = styled.p`
  flex: 1;
  font-size: 0.8rem;
  margin-left: 5px;
  cursor: pointer;
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
      color: #aaa;
    `}
`;
export default TodoItem;
