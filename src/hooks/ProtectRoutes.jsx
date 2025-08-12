import { useNavigate } from "react-router-dom"
import { getFromLocalStorage } from "../utils/Helpers"
import { useEffect } from "react"

const ProtectRoutes = () => {



    const navigator = useNavigate()


    useEffect(()=> {
        const token = getFromLocalStorage('access-token')

        if (!token) {
            navigator('login')
        }

    },[])
    return(
        <></>
    )

}
export default ProtectRoutes