import { createContext, useContext, useEffect, useState } from "react"

//1 -defino la estructura del estado 

const AppContext = createContext({
    items: [],
    createItem: (item) =>{},
    getItem: (id) => {},
    updateItem: (item) => {},
});


//2- mando a llamar el contexto
export default function Store({children}){

    const [items, setItems]= useState([]);

    function createItem(item){
        //inserto el elemento dentro del listado de items
        const temp = [...items];
        //lo incluyo al final
        temp.push(item);

        //actualizo el estado
        setItems(temp);

    }

    function getItem(id){
        const item = items.find(item => item.id ===id);

        return item
    }

    function updateItem(item){

        //para regresar el index dentro del arreglo
        const index = items.find(i => i.id ===item.id);

        //para sacar la copia
        const temp = [...items];
        //para actualizar el elemento en esa posicion con la nueva info
        temp[index] = {... item};
    }


    return(

        //hacemos accecible a cualquier componente de nuestra aplicacion
        <AppContext.Provider 
            value ={ {
                items,
                createItem,
                getItem,
                updateItem,
                }}>

            {children}
        </AppContext.Provider>
    )
}

export function useAppContext (){
        return useContext(AppContext);
}