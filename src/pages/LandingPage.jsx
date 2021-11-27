import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage(){
    const query = useQuery();
    const search = query.get("search");
    const debauncedSearch = useDebounce(search,300);

    return(
        <div>
            <Search></Search>
            <MoviesGrid key={debauncedSearch} search={debauncedSearch}></MoviesGrid> {/*si cambiamos la key de un componente se reinicia con los valores iniciales*/ }
        </div>
    );
}