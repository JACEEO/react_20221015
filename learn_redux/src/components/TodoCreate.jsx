import { useDispatch } from "react-redux";
import { addTodo } from "../state/reducers/todos";
import { useState } from "react";

function TodoCreate() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const createTodo = () => {
    dispatch(addTodo(input));
  };

  return (
    <div>
      <input type="text" onChange={handleInput} />
      <button onClick={createTodo}>등록</button>
    </div>
  );
}

export default TodoCreate;
