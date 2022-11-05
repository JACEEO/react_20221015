import MovieHeader from "./components/movie/MovieHeader";
import { Reset } from "styled-reset";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Movie from "./components/pages/Movie";
import TV from "./components/pages/TV.jsx";
import Home from "./components/pages/Home";
// import Post from "./components/practice/api/Post";
import Login from "./components/practice/api/Login";
import SignUp from "./components/practice/api/SignUp";
import Post from "./components/practice/api/Post";
import Button from "./components/common/Button";
import { removeCookie } from "./utils/cookie";

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
}
a{
    color: inherit;
    text-decoration: none;
    
}
`;

function App() {
  return (
    <div>
      <Reset />

      <GlobalStyle />
      <MovieHeader />
      <MainBlock>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie" element={<Movie />} />
          <Route path="tv" element={<TV />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="post" element={<Post />} />
        </Routes>
        {/* <Post /> */}
      </MainBlock>
      {/* <LogoutBtn>
        <Button text="Log out" onClick={() => removeCookie("access-token")} />
      </LogoutBtn> */}
    </div>
  );
}

const MainBlock = styled.main`
  padding: 50px 100px;
`;

const LogoutBtn = styled.div`
  position: fixed;
  width: 100px;
  right: 10px;
  top: 10px;
`;
export default App;

/*

CRUD => REST API

post : 정보 만들기
get : 정보 가져오기
put(전체) / patch(부분 수정) : 정보 수정
delete : 정보 삭제

js => fetch()

npm i -g json-server

json-server --watch db.json --port 8000

base url => 

*/
