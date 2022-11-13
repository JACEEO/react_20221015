import { atom, selector } from "recoil";

export const todoState = atom({
  key: "todoState",
  default: [
    {
      id: 1,
      text: "recoil",
      done: "true",
    },
    {
      id: 2,
      text: "recoil",
      done: "false",
    },
    {
      id: 3,
      text: "recoil",
      done: "false",
    },
  ],
});

export const undoneCount = selector({
  key: "undoneCount",

  get: ({ get }) => {
    const todos = get(todoState);
    return todos.filter((todos) => !todos.done).length;
  },
});
