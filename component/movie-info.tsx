import Link from "next/link";
import { URL } from "../app/(home)/page";
import styles from "../style/movie-info.module.css";

async function getMovie(id: string) {
  console.log(`movie fetch : ${Date.now()}`);
  // await new Promise((response) => {
  //   setTimeout(response, 3000);
  // });

  const reponse = await fetch(`${URL}/${id}`);
  return reponse.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  //return <h6>{JSON.stringify(movie)}</h6>;
  console.log(movie);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} className={styles.poster}></img>
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.original_title}</h1>
        <h3>- {movie.vote_average.toFixed(1)}</h3>
        <a href={movie.homepage} target={"_blank"}>
          HomePage &rarr;
        </a>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
