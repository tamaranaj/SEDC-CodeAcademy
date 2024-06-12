import { useContext } from "react";
import { Header } from "./components/Header/Header";
import { ThemeContext } from "./context/theme.context";
import './App.css'
function App(){
    const {theme} = useContext(ThemeContext)
    
    return (
        
        <div style={{backgroundColor: theme}}>
        
            <Header/>
        
        </div>
        
        
    )
}


export default App;
