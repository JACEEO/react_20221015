import React from "react";

//함수형 컴포넌트 비구조화 할당*
function MyComponent({ title, active }) {
  return (
    <div style={{ color: active && "red" }}>
      {active && <b>active</b>} Hello {title}
    </div>
  );
}

// props default
MyComponent.defaultProps = {
  title: "React!!!",
  color: "green",
};

export default MyComponent;
