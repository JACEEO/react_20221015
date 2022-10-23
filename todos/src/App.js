import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import useTodoReducer from "./hooks/useTodoReducer";
import { darken } from "polished";

// 글로벌 스타일 적용
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li{
    list-style: none;
  }


`;

function App() {
  const [todos, dispatch] = useTodoReducer();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider
        theme={{
          colors: {
            main: "#53b5ed",
            active: darken(0.1, "#53b5ed"),
          },
        }}
      >
        <AppBlock>
          <TodoTemplate name="sasdsad">
            <TodoHeader todos={todos} />
            <TodoList todos={todos} dispatch={dispatch} />
            <TodoInput dispatch={dispatch} />
          </TodoTemplate>
        </AppBlock>
      </ThemeProvider>
    </>
  );
}

const AppBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: #f4f4f4;
`;

export default App;
