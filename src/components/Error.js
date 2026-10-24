import { useRouteError } from "react-router-dom"
const Error = () =>{
    //useRouteError is a hook shows the exact error what we are getting 
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Opps...</h1>
            <h2>Something went wrong</h2>
            <h3>{err.status} : {err.statusText}</h3>
            <h3>{err.error.message}</h3>
        </div>
    )
}

export default Error;