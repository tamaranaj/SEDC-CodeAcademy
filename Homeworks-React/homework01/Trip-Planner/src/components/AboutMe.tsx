import Movies from "./Movies"
import './AboutMe.css'
type AboutMeProps = {
    fullName: string,
    from: string,
    favoriteMovies: string[]
}

export const AboutMe = (aboutMeProps: AboutMeProps) =>{

    return(
        <div className="aboutMe">
            <p>My name is {aboutMeProps.fullName}.</p>
            <p>I am from {aboutMeProps.from}.</p>
            <Movies movies={aboutMeProps.favoriteMovies}/>
        </div>
    )
}
