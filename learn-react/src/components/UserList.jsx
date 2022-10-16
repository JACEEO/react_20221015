import { useRef } from "react";
import { useState } from "react";
import AddUser from "./AddUser";

function UserList() {
  const [userList, setUserList] = useState([
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
  ]);
  // useRef로 값을 관리하면 값이 변경되어도 리렌더링 x
  // 특정값만 기억해놓고 사용
  const nextId = useRef(4);

  const onCreate = (inputs) => {
    const { name, age } = inputs;
    userList.concat();

    setUserList(
      //   ...userList,
      //   {
      //     id: nextId.current,
      //     name,
      //     age,
      //   },

      userList.concat({
        id: nextId.current,
        name,
        age,
      })
    );

    nextId.current++;
  };
  const onRemove = (id) => {
    //window.confirm : 확인버튼 클릭시 true 반환
    const ok = window.confirm("정말 삭제하시겠습니까?");
    if (ok) setUserList(userList.filter((user) => user.id !== id));
  };
  const onToggle = (id) => {
    setUserList(
      userList.map((user) =>
        // if (user.id === id) return { ...user, active: !user.active };
        // else return user;
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  return (
    <div>
      <AddUser onCreate={onCreate} />

      <h2>유저 목록</h2>
      <ul>
        {userList.map((user) => (
          // props 통해서 User 컴포넌트에 값 전달해서 반영하기
          <User
            key={user.id}
            user={user}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

function User({ user, onRemove, onToggle }) {
  const { name, age, id, active } = user;
  return (
    <li>
      <span
        style={{ color: active && "blue", cursor: "pointer" }}
        onClick={() => onToggle(id)}
      >
        {name}({age}세)
      </span>

      <button
        onClick={(e) => {
          // 이벤트 전파 (버블링)막는다
          //   e.stopPropagation();
          onRemove(id);
        }}
      >
        delete
      </button>
    </li>
  );
}

export default UserList;
