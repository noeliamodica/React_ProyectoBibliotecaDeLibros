import { Link } from "react-router-dom";

export default function Book ({item}){
// rellenamos los datos que necesitamos para mostrar nuestra lista de libros
    return (
        <div>
            <Link to={`/view/${item.id}`}>
                <img src={item.cover} width="200" alt={item.title} />
                <div>{item.title} </div>
            </Link>
        </div>
    )
}