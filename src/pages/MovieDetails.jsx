import styles from "./MovieDetails.module.css"
import {  useParams } from "react-router"; //use params para enrutamiento dinamico de las peliculas
import { useEffect, useState } from "react"; //isar hooks para el estado de este componente
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieDetails() {
    const { movieId } = useParams();
    const [isLoading, setIslLoading] = useState(true);
    const [movie, setMovie] = useState(null);//crea el estado del componente y lo inicializa en null
    
   

    useEffect(() =>{ //siempre que lo usamos abrimos llaves y dentro una funcion de flecha , una 
        //vez que se renderiza el componente se ejecuta lo que esta dentro de la funcion
        setIslLoading(true);
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
            setIslLoading(false);
        });
    },[movieId]); 

    if (isLoading){
        return <Spinner></Spinner>
    }

    // if(!movie){  //para que no se renderize la primera vez ya que primero se tiene que consumir la API
    //     return null;
    // }


    //const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    const imageUrl = getMovieImg(movie.poster_path,500);
    // console.log(movie.genres.map(function(genres) {
    //     return genres.name;
    //  }))
    return (
    <div className={styles.detailsContainer}>
        <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
        <div className={`${styles.col} ${styles.MovieDetails}`}>
            <p className={styles.firstItem}>
                <strong>Title:</strong> {movie.title}
            </p>
            <p>
                <strong>Genres:</strong>{" "}
                {movie.genres.map(genres => genres.name).join(", ")}
            </p>
            <p>
                <strong>Description:</strong> {movie.overview}
            </p>
        </div>
    </div>);
}