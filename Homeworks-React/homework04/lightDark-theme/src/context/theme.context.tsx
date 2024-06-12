import { createContext, ReactNode, useState } from "react";


enum ThemeColor {
    dark= "black",
    light= "white"
}

interface ContextDefault {
    theme: ThemeColor,
    handleClick : ()=> void
}
const contextDefaultValues : ContextDefault = {
    theme: ThemeColor.dark,
    handleClick: () => {}
}

export const ThemeContext = createContext(contextDefaultValues)

interface ThemeContextProviderProps{
    children: ReactNode
}
export const ThemeContextProvider = ({ children }: ThemeContextProviderProps)=> {
    const[theme,setTheme] = useState(ThemeColor.dark)

    function handleClick(){
        theme == ThemeColor.dark ? setTheme(ThemeColor.light) : setTheme(ThemeColor.dark)
        console.log(theme)
    }

    return(

        <ThemeContext.Provider value={{theme, handleClick}}>
            {children}
        </ThemeContext.Provider>
    )
}
