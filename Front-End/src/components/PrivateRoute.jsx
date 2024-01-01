import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../services/TokenUtil";
import { Alert, Container } from "react-bootstrap";


export function PrivateRoute(props){
    
    if (isAuthenticated()) {
        return props.children;
    } else {
    
       return(<>
        <Navigate to="/signin"></Navigate>
        </>
       ) ;

        
       
    }
}