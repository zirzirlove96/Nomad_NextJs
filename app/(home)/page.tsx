import Link from "next/link";
import Movie from "../../component/movie";
import styles from "../../style/home.module.css";

export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export const metadata = {
  title: "HOME",
};

async function getMovies() {
  await new Promise((response) => {
    setTimeout(response, 2000);
  }); // 백엔드에서 5초 대기

  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  //return JSON.stringify(movies);
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
