import NavBar from "./navBar";

export default function LayOut ({children}){

    const containerStyle ={ 
        width: '90%',
        margin: '100 px auto'

    };
    return (
        <div > 
           <NavBar />
           <div style={containerStyle}>{children}</div>
        </div>
    )
}