import styles from "./components/App.module.css" //importa los estilos para el componente App , el titulo
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  //importa los componentes necesarios para hacer el enrutamiento SPA
import { MovieDetails } from "./pages/MovieDetails"; //imorta el componente movie details 
import { LandingPage } from "./pages/LandingPage";  //importa el componente landing page con las peliculas

export function App(){
    return (
         <Router>  {/*debemos envolver todo en un router para poder usar este sistema de enrutamiento*/}
        <header>
          <Link to="/"> {/* vinculo en el titulo se regresa a la pagina inicial */}
            <h1 className={styles.title}>Movies</h1>
          </Link>
        </header>
        <main>
        <Switch> {/* switch con el contenido que se va a mostrar */}
          <Route exact path="/movies/:movieId"> {/* como es una ruta dinamica se usa EL hoke useparams */}
            <MovieDetails />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
        </main>
    </Router> 
    );
}


////CLASS COMPONENT ////////////////7777


// export class App extends React.Component {
//     render() {
//       return (
//         <div>
//              <header>
//                  <h1 className={styles.title}>Movies</h1>
//              </header>
//              <main>
//                  <MoviesGrid />
//              </main>
//          </div>
//       );
//     }
//   }

//   export class MoviesGrid extends React.Component {
//     render() {
//       return (
//         <ul className={styles.moviesGrid}>
//              {movies.map((movie) => (
//                  <MovieCard key={movie.id} movie={movie} />
//              ))}
//          </ul>
//       );
//     }
//   }

//   export class MovieCard extends React.Component {
//     render() {
//     const movie=this.props.movie;
    
//       const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
//       return (
//         <li className={styles.movieCard}>
//         <img width={230} height={345} className={styles.movieImage} src={imageUrl} alt={movie.title} />
//         <div>{movie.title}</div>
//         </li>
//       );
//     }
//   }


  



