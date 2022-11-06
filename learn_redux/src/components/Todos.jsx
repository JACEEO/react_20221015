import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Todos() {
  const [input, setInput] = useState("");
  const { todos } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => dispatch({ type: "ADD_TODO", text: input })}>
        등록
      </button>
      <ul>
        {todos.map((todo) => (
          <li>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
