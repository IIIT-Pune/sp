import React from "react";
import {Route, Redirect} from 'react-router-dom';
import { getAuth } from "firebase/auth";

const auth=getAuth();
export const ProtectedRoute = ({component: Component, ...rest})=>{
    return(
        <Route {...rest} render={
            props=>(
                (auth.currentUser)?  <Component {...props}/>: <Redirect to="./Login"/>
            )
        }/>
    )
}

// {
//     {
//         pathname: "/",
//         state: {
//             from: props.location
//         }
//     }
// }