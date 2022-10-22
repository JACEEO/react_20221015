// import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react";

export default function Counter() {
  // useState : 상태관리 hook
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const increaseNum = () => {
    // 함수형 업데이트 : set 함수의 인자로 콜백함수를 넣으면 콜백함수의 첫번째 인자로 최신 상태값을 전달
    setCount((num) => num + 1);
  };

  const decreaseNum = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    // 컴포넌트 디드 마운트 , 디드 업데이트 와 같이 동작
    console.log("update");
  });

  useEffect(() => {
    //디드 마운트
    console.log("마운트");

    return () => {
      //언마운트
      console.log("언마운트");
    };
  }, []);

  useEffect(() => {
    // 두번째 인자로 의존성 [] 을 가짐 []의값이 변경되었을 때만 실행
    console.log([count]);
    document.title = `count:${count}`;
  }, [count]);

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <h2>
        {input}:{count}
      </h2>
      <button onClick={increaseNum}>+1</button>
      <button onClick={decreaseNum}>-1</button>
    </div>
  );
}
