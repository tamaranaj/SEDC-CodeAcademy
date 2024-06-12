import { useContext } from "react"
import { ThemeContext } from "../../context/theme.context"

export const UserDetails = ()=>{
    const {theme} = useContext(ThemeContext)
    const user = {
        fullName: "firstName and lastName ",
        age: 28,
        profession: "some profession",
        from: "somewhere"
    }
    return(
        <ul className="display" style={theme == "black" ? {color: "white"} : {color: "blue"}}>
            {Object.values(user).map(val=>(<li key={val}>{val}</li>))}
        </ul>
    )
}
