import { useState } from "react";

function AddUser({ onCreate }) {
  const [inputs, setInputs] = useState({
    name: "",
    age: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    // input 관리하는 함수 만들어보기
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    onCreate(inputs);
    setInputs({
      name: "",
      age: "",
    });
  };

  return (
    <form onSubmit={onClickSubmit}>
      <input
        type="text"
        onChange={handleInput}
        name="name"
        value={inputs.name}
      />
      <input
        type="number"
        onChange={handleInput}
        name="age"
        value={inputs.age}
      />
      <button onClick={onClickSubmit}>등록</button>
    </form>
  );
}
export default AddUser;
