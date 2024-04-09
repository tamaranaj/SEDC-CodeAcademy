import { v4 as uuid} from "uuid"

interface Movie {
    id: string,
    title: string,
    duration: number,
    genre: string,
    hasWonOscar?: boolean
}

const arrayOfMovies: Movie[] = []

const addMovie = (title: string,
    duration: number,
    genre: string,
    hasWonOscar?: boolean) => {

        const movie: Movie = {
            id: uuid(),
            title: title,
            duration: duration,
            genre: genre,
            hasWonOscar: hasWonOscar
        }

        arrayOfMovies.push(movie)
    console.log(`Movie ${movie.title} is add.`)
}

addMovie("No country for old men", 122,"crime", true)
addMovie("The Godfather", 175,"crime", true)
addMovie("Pulp Fiction", 153,"drama", false)
addMovie("The Dark Knight", 152, "action",false)

console.log(arrayOfMovies)

const printMovies = (array: Movie[], genre: string = "Action")=>{
    const result = array.filter((item)=>item.genre === genre.toLocaleLowerCase())
    console.log(result)
}

printMovies(arrayOfMovies, "DRAMA")
