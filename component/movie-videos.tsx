import { URL } from "../app/(home)/page";

async function getVideos(id: string) {
  console.log(`videos fetch : ${Date.now()}`);
  await new Promise((response) => {
    setTimeout(response, 2000);
  }); // 백엔드에서 5초 대기

  const reponse = await fetch(`${URL}/${id}/videos`);
  return reponse.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
