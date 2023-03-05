
import Book from "../components/book";
import LayOut from "../components/layout";
import { useAppContext } from "../store/store"


export default function Index (){

    const store = useAppContext();

    return (
        <LayOut>
            
            {store.items.map((item) =>(
                <Book key={item.id} item={item}/>
            ) ) }
        </LayOut>
    )
}