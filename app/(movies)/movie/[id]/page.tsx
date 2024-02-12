import { Suspense } from "react";
import { URL } from "../../../(home)/page";
import MovieInfo from "../../../../component/movie-info";
import MovieVideos from "../../../../component/movie-videos";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  //const movie = await getMovie(id);
  //const videos = await getVideos(id);
  //Promise를 사용하여 병렬 수행
  //const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading videos info</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
