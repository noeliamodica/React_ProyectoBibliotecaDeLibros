import { Link } from "react-router-dom";

export default function Book ({item}){
//para darle estilo
    const booksContainerStyle ={
        display: 'flex',
        flexDirection: 'column',
        width: "300px",
    };

    const bookInfoSyle ={
        display: 'flex',
        flexDirection: 'column',
        aligItems: 'center',
        textAlign: 'center',
        color: 'white',
        textDecoration: 'none',
    }

// rellenamos los datos que necesitamos para mostrar nuestra lista de libros
    return (
        <div style={booksContainerStyle}>
            <Link to={`/view/${item.id}`} style={bookInfoSyle}>
                <img src={item.cover} width="200" alt={item.title} />
                <div>{item.title} </div>
            </Link>
        </div>
    )
}