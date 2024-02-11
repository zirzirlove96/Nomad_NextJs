//client component에서 fetch

"use client";
import { useEffect, useState } from "react";

//metadata는 client component에서 사용X
/*export const metadata = {
  title: "HOME",
};*/

export default function Page() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };
  //초기에 한번만 불러오기
  useEffect(() => {
    getMovies();
  }, []);
  return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
}
