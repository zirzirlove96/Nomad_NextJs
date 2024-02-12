import { URL } from "../app/(home)/page";

async function getMovie(id: string) {
  console.log(`movie fetch : ${Date.now()}`);
  await new Promise((response) => {
    setTimeout(response, 3000);
  });

  const reponse = await fetch(`${URL}/${id}`);
  return reponse.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
