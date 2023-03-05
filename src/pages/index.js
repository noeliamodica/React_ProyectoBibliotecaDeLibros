
import Book from "../components/book";
import LayOut from "../components/layout";
import { useAppContext } from "../store/store"


export default function Index (){

    const store = useAppContext();

    //para manejar estilos con js

    const booksContainer ={
        display: 'flex',
        flexWrap:  'wrap',
        gap: '10px',
    }

    return (
        <LayOut>
            <div style={booksContainer} >
            {store.items.map((item) =>(
                <Book key={item.id} item={item}/>
            ) ) }

            </div>
        </LayOut>
    )
}