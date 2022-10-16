import { useState, useRef } from "react";

function InputText() {
  // 여러개의 unput 하나의 객체로 상태 관리
  const [inputs, setInputs] = useState({
    userName: "",
    email: "test@gmail.com",
  });

  // 상태값 비구조화 할당
  const { userName, email } = inputs;
  //특정 DOM 직접 접근할 때 사용.
  // => useRef() 호출
  const ref = useRef(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onRemove = () => {
    setInputs({ userName: "", email: "" });
    ref.current.focus();
  };

  return (
    <>
      <div>
        name :{userName}({email})
      </div>
      <input
        type="text"
        onChange={handleInput}
        value={userName}
        name="userName"
        ref={ref}
      />
      <input type="text" onChange={handleInput} name="email" value={email} />
      <button onClick={onRemove}>삭제</button>
    </>
  );
}

export default InputText;
