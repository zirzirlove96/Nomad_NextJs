import { Suspense } from "react";
import { URL } from "../../../(home)/page";
import MovieInfo, { getMovie } from "../../../../component/movie-info";
import MovieVideos from "../../../../component/movie-videos";
import { metadata } from "../../../layout";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id); //metadata를 만들기 위해 API 호출
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  //const movie = await getMovie(id);
  //const videos = await getVideos(id);
  //Promise를 사용하여 병렬 수행
  //const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return (
    <div>
      <Suspense fallback={<h1>Loading videos info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
