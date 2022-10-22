import React from "react";

function AddUser({ onCreate, inputs, handleInput, reset }) {
  const onClickSubmit = (e) => {
    e.preventDefault();
    onCreate(inputs);
    reset();
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
      <button>등록</button>
    </form>
  );
}
export default React.memo(AddUser);
