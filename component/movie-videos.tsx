import { URL } from "../app/(home)/page";
import styles from "../style.movie-videos.module.css";

async function getVideos(id: string) {
  console.log(`videos fetch : ${Date.now()}`);
  // await new Promise((response) => {
  //   setTimeout(response, 2000);
  // }); // 백엔드에서 5초 대기

  const reponse = await fetch(`${URL}/${id}/videos`);
  return reponse.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  //return <h6>{JSON.stringify(videos)}</h6>;
  //console.log(videos);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.key}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title={video.name}
        ></iframe>
      ))}
    </div>
  );
}
