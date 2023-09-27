import { Navigate, Outlet, useLocation } from "react-router";
import { useAppSelector } from "../store/configureStore";
import { toast } from "react-toastify";

interface Props {
    roles?: string[]
}
export default function RequireAuth({roles}: Props){
    const {user} = useAppSelector(state => state.account);
    const location = useLocation();

    if(!user){
        // console.log(user)
        return<Navigate  to='/login' state={{from: location}}/>
    }
    if (roles && !roles.some(r => user.roles?.includes(r))) {
        toast.error('Not Authorised to access this function, contace Jingzhuo for access [jingzhuot@gmail.com]');
        return <Navigate to='/catalog'/>;
    }

    return <Outlet/>
}