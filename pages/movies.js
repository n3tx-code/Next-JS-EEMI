import Link from "next/link";
import axios from "axios";
import { motion } from "framer-motion"

import styles from "./movies.module.css";

export async function getStaticProps() {
  const { data } = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=5816d3c43849695433b83810de80eccc&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate");
  return {
    props: {
      movies: data.results
    }
  };
}

export default function Home({ movies }) {
  return (
    <>
      <h1 className={styles.moviesPageTitle}>Movies</h1>
      <motion.div animate={{ scale: [0.3, 1], }} transition={{ duration: 0.7 }} className={styles.moviesWrapper}>
        {movies.map(({ id, original_title, release_date, poster_path }) => (
          <motion.div whileHover={{ scale: 1.1 }} key={id} className={styles.movie}>
            <Link href={`/movie/${id}`}>
              <a>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} className={styles.movieImage} />
              </a>
            </Link>
            <Link href={`/movie/${id}`}>
              <a className={styles.movieTitleLink}>
                <h3>{original_title}</h3>
              </a>
            </Link>
            <em>{release_date}</em>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
