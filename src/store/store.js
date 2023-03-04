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



    return(
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}