// import logo from "./logo.svg";
import {
  useState,
  useRef,
  useCallback,
  createContext,
  useReducer,
} from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import useInputs from "./hooks/useInputs";
import useInputReducer from "./hooks/userInputReducer";
export const UserDispatchContext = createContext(null);
export const UserStateContext = createContext(null);
// 컴포넌트 : 하나의 조각
function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER": {
      const { inputs, id } = action;
      return [...state, { inputs, id }];
    }
    case "REMOVE_USER": {
      const { id } = action;
      return state.filter((user) => user.id !== id);
    }
    case "TOGGLE_USER": {
      const { id } = action;
      return state.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      );
    }
    default:
      return state;
  }
}
const initialUserList = [
  {
    id: 1,
    name: "황보석",
    age: 30,
    active: true,
  },
  {
    id: 2,
    name: "제이스",
    age: 30,
    active: false,
  },
  {
    id: 3,
    name: "제리",
    age: 30,
    active: false,
  },
];

// const boxStyle = { backgroundColor: "red", color: "#FFF" };

function App() {
  const [inputs, handleInput, reset] = useInputReducer({ name: "", age: 0 });
  // const text = "react";
  const [userList, dispatch] = useReducer(reducer, initialUserList);
  // useRef로 값을 관리하면 값이 변경되어도 리렌더링 x
  // 특정값만 기억해놓고 사용
  const nextId = useRef(4);

  // const userCount = userList.length;

  // console.log(userCount);

  const onCreate = useCallback((inputs) => {
    dispatch(
      // useCallback 을 사용할 때 함수형 업데이트를 사용하면 의존성에서 제거할 수 있다.
      { type: "CREATE_USER", inputs, id: nextId.current }
    );

    nextId.current++;
  }, []);

  const onRemove = useCallback((id) => {});
  //window.confirm : 확인버튼 클릭시 true 반환
  //   const ok = window.confirm("정말 삭제하시겠습니까?");
  //   if (ok)
  //     setUserList((userList) => userList.filter((user) => user.id !== id));
  // }, []);

  const onToggle = (id) => {
    // setUserList(
    //   userList.map((user) =>
    //     // if (user.id === id) return { ...user, active: !user.active };
    //     // else return user;
    //     user.id === id ? { ...user, active: !user.active } : user
    //   )
    // );
  };

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
      <UserDispatchContext.Provider value={dispatch}>
        <UserStateContext.Provider value={userList}>
          <AddUser
            onCreate={onCreate}
            inputs={inputs}
            dispatch={dispatch}
            handleInput={handleInput}
            reset={reset}
          />
          <UserList userList={userList} />
        </UserStateContext.Provider>
      </UserDispatchContext.Provider>
    </>
  );
}

export default App;
