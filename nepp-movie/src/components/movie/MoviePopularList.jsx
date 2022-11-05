import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPopularMovieList } from "../../utils/movie_api";
import MoviePopularItem from "./MoviePopularItem";
import Title from "./Title";
function MoviePopularList() {
  const [popularList, setPopularList] = useState([]);
  useEffect(() => {
    getPopularMovieList().then((res) => setPopularList(res.data.results));
  }, []);

  console.log(popularList);
  return (
    <div>
      <Title title="인기 영화" />
      <MovieListBlock>
        {popularList.map((movie) => (
          <MoviePopularItem key={movie.id} movie={movie} />
        ))}
      </MovieListBlock>
    </div>
  );
}

const MovieListBlock = styled.ul`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
`;

export default MoviePopularList;
