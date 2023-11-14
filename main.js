import { movieList } from "./movielist.js";

// Search for movie posters on the movie db using the following api:
// https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=goonies
async function main() {

  const apiPrefix = 'https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=';
  const posterPrefix = 'http://image.tmdb.org/t/p/w500';

  console.log("export const moviePosterList = [");

  for (let i = 0; i < movieList.length; i++) {
    const movieName = movieList[i].name;
    const url = apiPrefix + movieName;

    const response = await fetch(url);
    const json = await response.json();

    if (json.results && json.results.length) {
      const posterUrl = posterPrefix + json.results[0].poster_path;

      const comma = (i < movieList.length - 1) ? ',' : '';

      console.log('  { "name" : "' + movieName + '", "poster": "' + posterUrl + '" }' + comma);
    }
  }

  console.log("];");
}

main();

