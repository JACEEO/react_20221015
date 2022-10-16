import { useState } from "react";

export default function Counter() {
  // useState : 상태관리 hook
  const [count, setCount] = useState(0);

  const increaseNum = () => {
    // 함수형 업데이트 : set 함수의 인자로 콜백함수를 넣으면 콜백함수의 첫번째 인자로 최신 상태값을 전달
    setCount((num) => num + 1);
  };

  const decreaseNum = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increaseNum}>+1</button>
      <button onClick={decreaseNum}>-1</button>
    </div>
  );
}
