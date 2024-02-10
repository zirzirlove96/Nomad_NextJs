const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export const metadata = {
  title: "HOME",
};

async function getMovies() {
  /*await new Promise((response) => {
    setTimeout(response, 5000);
  });*/ // 백엔드에서 5초 대기

  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return JSON.stringify(movies);
}
