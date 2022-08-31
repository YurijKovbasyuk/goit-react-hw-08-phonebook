import { Navigate,Outlet } from "react-router-dom"
import { useSelector } from "react-redux"


const PublicRoutes=({restricted})=>{
    const name=useSelector(state=>state.user.name)
    const navigatePage=name&&restricted
    return(
        !navigatePage?<Outlet/>:<Navigate to="/contacts"/>
    )
}

export default PublicRoutes;