import style from "./Search.module.css"
import { FaSearch } from 'react-icons/fa';
//import { useEffect, useState } from "react"; //usar hooks para el estado y efectos de este componente
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";

export function Search() {

  const query = useQuery();
    const search = query.get("search");
   // const [searchText, setSearchText] = useState("")
   const history = useHistory();
   
//    useEffect(() => {  //esto se hace para que cuando se regrese a la pagina inicial el cuadro de busqueda quede en blanco
//     //setSearchText(search || "");
//     (search == null) ? setSearchText("") : setSearchText(search)
//     }, [search])
   
   const handleSubmit = (e) => {
        e.preventDefault();//e es evento
     //   history.push("/?search="+searchText);//se va hacia la ruta /?sear+searchtext
    }

    return (
        <form className={style.searchContainer} onSubmit={handleSubmit}> {/* cuando el usuario envia el formulario se ejecuta la funcion handle submit */}
            <div className={style.searchBox}>
                <input 
                    className={style.searchInput} 
                    type="text"
                    value={search} 
                    placeholder="Title"
                    onChange={(e) => {
                        const value = e.target.value;
                     //   setSearchText(value);
                        history.push("/?search="+ value);//para buscar contantemente con tecnica debounce
                    }}> 
                </input> {/* onchange esta pendiente de los cambios en la entrada tipo texto y los guarda en searchtext*/}

                <FaSearch className={style.searchButton} size={20}></FaSearch>
                
            </div>
        </form>
    )
}

