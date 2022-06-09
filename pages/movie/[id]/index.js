import axios from "axios";
import { motion } from "framer-motion"


export async function getStaticPaths() {
  const url = "https://api.themoviedb.org/3/discover/movie?api_key=5816d3c43849695433b83810de80eccc&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  const { data } = await axios.get(url);
  console.log(data);
  return {
    paths: data.results.map(({ id }) => `/movie/${id}`),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=5816d3c43849695433b83810de80eccc&language=en-US`
  );

  return {
    props: {
      movie: data
    }
  };
}

export default function Card({ movie }) {
  console.log(movie);

  return (
    <div>
      <h2>{movie.original_title}</h2>
    </div>
  );
}
