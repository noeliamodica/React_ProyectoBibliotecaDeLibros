
import LayOut from "../components/layout";
import { useAppContext } from "../store/store"


export default function Index (){

    const store = useAppContext();

    return (
        <LayOut>
            
            {store.items.map(item => <div> {item.title} </div> ) }
        </LayOut>
    )
}