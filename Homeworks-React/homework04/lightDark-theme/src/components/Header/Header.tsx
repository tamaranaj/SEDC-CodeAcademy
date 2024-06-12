import { useContext } from "react"
import { UserDetails } from "../UserDetails/UserDetails"
import { ThemeContext } from "../../context/theme.context"

export const Header = ()=>{
    
    const {theme, handleClick} = useContext(ThemeContext)
    return(
        <div>

            <button onClick={handleClick} style={{width:"80px", height: "60px", marginBottom: "20px", fontSize: "0.8em"}}>{theme}</button>

            <UserDetails/>
        </div>
        
    )
}
