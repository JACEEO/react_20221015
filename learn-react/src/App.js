// import logo from "./logo.svg";
import "./App.css";
// import MyComponent from "./components/MyComponents";
// import Counter from "./components/Counter";
import InputText from "./components/InputText";
import UserList from "./components/UserList";

// 컴포넌트 : 하나의 조각

// const boxStyle = { backgroundColor: "red", color: "#FFF" };
function App() {
  // const text = "react";
  return (
    /* 
      jsx :JS 로 UI를 작성할 때 직관적으로 표현하기 위해서 사용.

       1. 닫혀 있는 태그를 사용해야 한다.
       2. 하나의 태그로 감싸야 된다. => <></>(Fragment)를 통해서 부모 요소 없이 감쌀 수 있다.
       3. JS 값을 포함시킬 때는 {}안에 표현식을 넣는다.
       4. 클래스는 className 속성을 사용.
       5. style 적용은 style 속성에 객체를 넣는다. => CSS 속성은 카멜케이스로 작성한다.

    */

    <>
      {/* <MyComponent title="Component" active />
      <MyComponent />
      <div className="box" style={boxStyle}>
        {text}
      </div> */}

      {/* <Counter /> */}
      {/* <InputText /> */}

      <UserList />
    </>
  );
}

export default App;
