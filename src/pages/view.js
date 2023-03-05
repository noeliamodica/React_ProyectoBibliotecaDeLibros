import { useEffect, useState } from "react";
import { useParams} from "react-router-dom"
import LayOut from "../components/layout"
import { useAppContext } from "../store/store";


export default function View (){
    
    const [item, setItem]=useState(null);
    
    //obtengo el id que estamos usando

    const params = useParams();
    const store = useAppContext();

    //para que se ejecute al iniciar la pagina
    useEffect(() =>{
        const book = store.getItem(params.bookId); 
    //actualizo el elemento
        setItem(book);

    }, []

    );
    //genero un condicional

    if (!item){
        return <LayOut> Item not found </LayOut>
    }


    return (
        <LayOut>
             <h2>{item?.title} </h2>     
                <div>{item?.cover? <img src={item?.cover} width="400" /> : '' }</div>     
                <div>{item?.author} </div>
                <div>{item?.intro} </div>
                <div>{item?.completed ? 'Leido' : 'Por terminar'} </div>
                <div>{item?.review} </div>
        </LayOut>
    )
}