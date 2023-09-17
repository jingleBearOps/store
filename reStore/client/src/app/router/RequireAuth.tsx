import { Navigate, Outlet, useLocation } from "react-router";
import { useAppSelector } from "../store/configureStore";

export default function RequireAuth(){
    const {user} = useAppSelector(state => state.account);
    const location = useLocation();

    if(!user){
        console.log(user)
        return<Navigate  to='/login' state={{from: location}}/>
    }

    return <Outlet/>
}