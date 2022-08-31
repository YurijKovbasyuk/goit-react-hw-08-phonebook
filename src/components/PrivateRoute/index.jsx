import { Navigate,Outlet } from "react-router-dom"
import { useSelector } from "react-redux"


const PrivateRoute=()=>{
    const name=useSelector(state=>state.user.name)
    return(
        
        name?<Outlet/>:<Navigate to="/login" replace/>

    )
}

export default PrivateRoute;