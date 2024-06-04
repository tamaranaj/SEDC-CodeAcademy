import React from "react"
import './components/App.css'
import { Greetings } from "./components/Greetings"
import { Trips } from "./components/Trips"
import { AboutMe } from "./components/AboutMe"
function App() {
  
  return (
    <React.Fragment>
      <main>
        <Greetings/>
        <Trips/>
        
      </main>
      <h3>About me:</h3>
      <AboutMe fullName={"Tamara Najdovska"} from={"Skopje"} favoriteMovies={["Fight Club", "Pulp Fiction", "Back to the Future"]}/>
    </React.Fragment>
  )
}

export default App
