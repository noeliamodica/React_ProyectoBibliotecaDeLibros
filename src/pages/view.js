import { useEffect, useState } from "react";
import { useParams} from "react-router-dom"
import LayOut from "../components/layout"
import { useAppContext } from "../store/store";
import { useState } from "react";

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
        return <div> Item not found </div>
    }

    

    

    return (
        <LayOut>
            
        </LayOut>
    )
}