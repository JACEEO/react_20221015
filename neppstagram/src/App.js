import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import Login from "./components/pages/Login";
import styled, { createGlobalStyle } from "styled-components";
import SigninForm from "./components/login/SigninForm";
import Post from "./components/pages/Post";
import PostList from "./components/post/PostList";
import PostDetail from "./components/post/PostDetail";
import AppBlock from "./AppBlock";
import Edit from "./components/edit/Edit";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <Block>
      <InnerBlock>
        <Routes>
          <Route path="/accounts" element={<Login />}>
            <Route path="login" element={<LoginForm />}></Route>
            <Route path="signin" element={<SigninForm />}></Route>
          </Route>
          <Route path="/" element={<AppBlock />}>
            <Route path="/post" element={<Post />}>
              <Route path="" element={<PostList />} />
              <Route path=":id" element={<PostDetail />} />
            </Route>
          </Route>

          <Route path="edit" element={<Edit />} />
        </Routes>
      </InnerBlock>
      <GlobalStyle />
    </Block>
  );
}
const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const InnerBlock = styled.div`
  width: 200px;
  height: 500px;
  border: 1px solid #bbb;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default App;
