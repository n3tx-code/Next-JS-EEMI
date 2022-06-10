import axios from "axios";
import { motion } from "framer-motion"

export async function getStaticPaths() {
  const url = "https://api.themoviedb.org/3/discover/movie?api_key=5816d3c43849695433b83810de80eccc&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  const { data } = await axios.get(url);
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
      movie: data,
    }
  };
}

export default function Card({ movie }) {
  return (
    <div className="movieWrapper">
      <motion.div animate={{ x: 0 }} initial={{ x: -700 }} transition={{ type: "spring", stiffness: 100 }} className="movieImageWrapper">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} className="movieImage" />
      </motion.div>
      <motion.div animate={{ x: 0 }} initial={{ x: 700 }} transition={{ type: "spring", stiffness: 100 }} className="movieDetailWrapper">
        <h1>{movie.original_title}</h1>
        <span className={`movieScore ${movie.vote_average > 7 ? "goodScore" : "badScore"}`}>{movie.vote_average}</span>
        {movie.genres.map(({ name }) => (
          <span key={movie.original_title + name} className="movieGenre">{name}</span>
        ))}
        <p className="movieOverview">
          {movie.overview}
        </p>
      </motion.div>
    </div>
  );
}
