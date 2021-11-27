import { useEffect, useState } from "react";
//import { useQuery } from "../hooks/useQuery.jsx";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import Empty from "./Empty";

export function MoviesGrid({search}) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIslLoading] = useState(true);
  const [hasMore, sethasMore] = useState(true);

  const [page, setPage] = useState(1);//estado inicial pagina 1

  //useLocation().search  =>  ?search={lo que busque}
  //URLsearchparams(?search={lo que busque}).get(search)={lo que busque}
  

  useEffect(() => {
    //llamada asincrona al servidor para consumir la API
    setIslLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
      get(searchUrl).then((data) => {
      //data se le pone cualquier nombre
      setMovies((prevMovies) => prevMovies.concat(data.results));
      sethasMore(data.page < data.total_pages);
      setIslLoading(false);
    });
  }, [search, page]); //poner search

  // if (isLoading) {
  //   return <Spinner></Spinner>;
  // }
  if (!isLoading && movies.length === 0) {
    return <Empty></Empty>
  }

  return (
    <InfiniteScroll
      dataLength={movies.length} //This is important field to render the next data
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage+1)}
      loader={<Spinner></Spinner>}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} /> //react recomienda poner una key en un listado
        ))}
      </ul>
    </InfiniteScroll>
  );
}

///////////////////7777

// import { useEffect, useState } from "react";
// import { get } from "../utils/httpClient";
// import { MovieCard } from "./MovieCard";
// import styles from "./MoviesGrid.module.css";

// export function MoviesGrid() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     get("/discover/movie").then((data) => {
//       setMovies(data.results);
//     });
//   }, []);
//   return (
//     <ul className={styles.moviesGrid}>
//       {movies.map((movie) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </ul>
//   );
// }
