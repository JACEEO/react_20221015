import MovieHeader from "./components/movie/MovieHeader";
import { Reset } from "styled-reset";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Movie from "./components/pages/Movie";
import TV from "./components/pages/TV.jsx";
import Home from "./components/pages/Home";

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
        </Routes>
      </MainBlock>
    </div>
  );
}

const MainBlock = styled.main`
  padding: 50px 100px;
`;
export default App;
